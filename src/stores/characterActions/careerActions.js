// src/stores/characterActions/careerActions.js

import { rollDiceString } from '../../utils/diceRolls'; // For characteristic rolls
import { resolveEvent } from '../../utils/eventResolver'; // For career events

// Import all career event tables
import * as careerEventTables from '../../gameData/careers/backgroundEventTables';

// Helper function to apply characteristic rolls (Step 2 of career path)
// IMPORTANT: Clarify if this should ADD or SET attribute values.
// For now, keeping it as setting, as per your original code.
// We discussed this before, and it's a critical decision for your game's math.
function applyCharacteristicRolls(store, career) {
    if (!career.characteristicRolls || career.characteristicRolls.length === 0) {
        console.log(`No characteristic rolls defined for ${career.name}.`);
        return;
    }
    career.characteristicRolls.forEach(attrName => {
        // Roll Ob3D6 for each characteristic (as per your game, adjust if 3D6/4D6)
        const rollResult = rollDiceString("Ob3T6");
        
        // Assuming updateAttribute sets the value
        //store.updateAttribute(attrName, rollResult);
        console.log(`Rolled ${rollResult} for ${attrName}.`);
    });
}

// Helper function to enable career-specific skills for buying (Part of Step 3)
function enableCareerSkills(store, career) {
    if (career.associatedSkills && career.associatedSkills.length > 0) {
        career.associatedSkills.forEach(skillName => {
            store.setSkillBuyable(skillName, true);
        });
    }
}

// Helper to disable 'buyable' status for skills (useful at end of skill purchase phase)
function disableAllBuyableSkills(store) {
    store.current.skills.forEach(skill => {
        if (skill.buyable) {
            store.setSkillBuyable(skill.name, false);
        }
    });
}

// --- Logic for Selecting a Career (Step 1 of career path) ---
export function selectCareerLogic(store, careerId, allBackgroundCareers, allGeneralCareers) {
    const allCareers = [...allBackgroundCareers, ...allGeneralCareers];
    const selectedCareer = allCareers.find(c => c.id === careerId);

    if (!selectedCareer) {
        console.error(`Career with ID "${careerId}" not found.`);
        return;
    }

    store.current.selectedCareerId = careerId;
    store.current.currentCareerDetails = selectedCareer;

    console.log(`Selected career for ${store.current.currentCareerStage}: ${selectedCareer.name}`);
}

// --- NEW/REFACTORED Logic for Applying Career Effects (Called after selection, before skill spending) ---
export function applyCareerEffectsLogic(store) {
    const currentStage = store.current.currentCareerStage;
    const selectedCareer = store.current.currentCareerDetails;

    if (!selectedCareer) {
        console.warn(`No career selected for stage ${currentStage}. Cannot advance.`);
        return;
    }

    console.log(`Advancing through career: ${selectedCareer.name} for stage ${currentStage}...`);

    // 1) Roll against 3 different characteristics
    applyCharacteristicRolls(store, selectedCareer);

    // 2) User gets some skill points to buy career skills
    store.current.careerPointsPool += selectedCareer.baseCareerSkillPoints;
    // --- NEW: Set initial award for career points ---
    store.current.initialCareerPointsAwarded = selectedCareer.baseCareerSkillPoints;
    enableCareerSkills(store, selectedCareer);

    // 3) User gets a number of free skill points
    store.current.freeSkillPointsPool += selectedCareer.baseFreeSkillPoints;
    // --- NEW: Set initial award for free points ---
    store.current.initialFreeSkillPointsAwarded = selectedCareer.baseFreeSkillPoints;

    // 4) User gets a number of skillpoints for "Stridsvana"
    store.current.stridsvanaSkillPointsPool += selectedCareer.baseStridsvanaPoints;
    // --- NEW: Set initial award for Stridsvana points ---
    store.current.initialStridsvanaSkillPointsAwarded = selectedCareer.baseStridsvanaPoints;

    // 5) Character age increases
    store.current.age += selectedCareer.yearsInCareer;

    // 6) Character gets a promotion
    store.current.promotions.push(selectedCareer.promotion);

    // 7) Characters gets money for their starting capital
    store.current.money += selectedCareer.startingCapital;

    // 8) Character rolls two times on the career event table
    if (selectedCareer.eventTable) {
        const eventTable = careerEventTables[selectedCareer.eventTable];
        if (eventTable) {
            store.rollLifeEvent(selectedCareer.eventTable);
            store.rollLifeEvent(selectedCareer.eventTable);
        } else {
            console.warn(`Career event table "${selectedCareer.eventTable}" not found.`);
        }
    }

    /*
    // Store this completed career in history
    store.current.careerHistory.push({
        stage: currentStage,
        careerId: selectedCareer.id,
        name: selectedCareer.name,
        promotion: selectedCareer.promotion,
        years: selectedCareer.yearsInCareer,
    });

    // Reset current career details for the next stage's selection
    store.current.selectedCareerId = null;
    store.current.currentCareerDetails = null;
    // Optionally disable previously enabled skills
    // disableAllBuyableSkills(store); // Uncomment if you want to clear 'buyable' status after each stage completes

    // Advance to the next career stage
    if (currentStage === 'background') {
        store.current.currentCareerStage = 'career1';
    } else if (currentStage === 'career1') {
        store.current.currentCareerStage = 'career2';
    } else if (currentStage === 'career2') {
        store.current.currentCareerStage = 'career3';
    } else if (currentStage === 'career3') {
        store.current.currentCareerStage = 'finished';
    }
    console.log(`Character advanced to new stage: ${store.current.currentCareerStage}`);
    */
}

// --- NEW Logic for Completing Current Career Stage and Advancing ---
export function completeCurrentCareerStageAndAdvanceLogic(store) {
    const currentStage = store.current.currentCareerStage;
    const selectedCareer = store.current.currentCareerDetails; // Still holds details from previous step

    if (!selectedCareer) {
        console.warn(`No career details found when trying to complete stage ${currentStage}. This shouldn't happen.`);
        // Fallback: if somehow we're in a skill purchase phase but no career is selected,
        // we'll try to move to the next selection stage anyway to prevent getting stuck.
        store.current.selectedCareerId = null;
        store.current.currentCareerDetails = null;
        if (currentStage.includes('_skill_purchase')) {
            const baseStage = currentStage.replace('_skill_purchase', '');
            if (baseStage === 'background') {
                store.current.currentCareerStage = 'career1_selection';
            } else if (baseStage === 'career1') {
                store.current.currentCareerStage = 'career2_selection';
            } else if (baseStage === 'career2') {
                store.current.currentCareerStage = 'career3_selection';
            } else if (baseStage === 'career3') {
                store.current.currentCareerStage = 'finished';
            }
        } else {
            // If somehow we're in an unknown stage, just go to finished to prevent infinite loop.
            store.current.currentCareerStage = 'finished';
        }
        console.warn('Force advanced due to missing career details. Please check flow.');
        return;
    }


    // Store this completed career in history
    store.current.careerHistory.push({
        stage: currentStage, // This will be like 'background_skill_purchase' or 'career1_skill_purchase'
        careerId: selectedCareer.id,
        name: selectedCareer.name,
        promotion: selectedCareer.promotion,
        years: selectedCareer.yearsInCareer,
        // You could store more details here if needed, e.g., points gained, skills improved
    });

    // Reset current career details for the next stage's selection
    store.current.selectedCareerId = null;
    store.current.currentCareerDetails = null;

    // Optional: Disable skills that were just enabled for this career path
    // This is good practice to clear 'buyable' status for the next career's specific skills
    disableAllBuyableSkills(store);

    // Advance to the next main career stage (selection phase)
    if (currentStage.includes('background')) {
        store.current.currentCareerStage = 'career1_selection';
    } else if (currentStage.includes('career1')) {
        store.current.currentCareerStage = 'career2_selection';
    } else if (currentStage.includes('career2')) {
        store.current.currentCareerStage = 'career3_selection';
    } else if (currentStage.includes('career3')) {
        store.current.currentCareerStage = 'finished';
    }
    console.log(`Character advanced to new stage: ${store.current.currentCareerStage}`);
}