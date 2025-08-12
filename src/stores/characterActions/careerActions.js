// src/stores/characterActions/careerActions.js

import { rollDiceString } from '../../utils/diceRolls'; // For characteristic rolls
import { resolveEvent } from '../../utils/eventResolver'; // For career events

// Import all career event tables
import * as backgroundEventTables from '../../gameData/careers/backgroundEventTables';
import * as careerEventTables from '../../gameData/careers/careerEventTables';

// --- NEW IMPORT ---
import generalCareers from '../../gameData/careers/generalCareers';

// Helper function to see if the success roll is an attribute
function isAttribute(name) {
    return name === name.toUpperCase();
}

// Helper function to apply characteristic rolls (Step 2 of career path)
// Returns the number of succesful career rolls
function applyCharacteristicRolls(store, career, bribedAttribute = null) {
    if (!career.characteristicRolls || career.characteristicRolls.length === 0) {
        console.log(`No characteristic rolls defined for ${career.name}.`);
        // Assume career only has one choice
        return 0;
    }
    let successfulRolls = 0
    career.characteristicRolls.forEach(attrName => {
        // NEW: Check if a bribe exists for this roll.
        if (attrName === bribedAttribute) {
            successfulRolls += 1;
            console.log(`Bribe applied for ${attrName}. Automatic success!`);
            store.current.money -= 10000; // Deduct the bribe cost
            return; // Skip the roll for this attribute
        }
        // Roll Ob3D6 for each characteristic (as per your game, adjust if 3D6/4D6)
        if (attrName === 'Startkapital') {
            if (store.totalStartkapital >= 10000) {
                successfulRolls += 1;
                console.log(`Automatic success for ${attrName}.`);
            } else {
                console.log(`Fail for ${attrName}.`, store.totalStartkapital);
            }
        } else if (attrName === 'Mediastatus') {
            const targetValue = store.mediastatus
            const rollResult = rollDiceString("Ob3T6");
            if (rollResult <= targetValue) {
                 successfulRolls += 1;
            }
            console.log(`Rolled ${rollResult} for ${attrName}.`);
        } else if (attrName === 'Examen') {
            const targetValue = store.hasDegree
            if (targetValue) {
                successfulRolls += 1;
            }
        } else if (attrName === 'Cool') {
            const targetValue = store.cool
            const rollResult = rollDiceString("Ob3T6");
            if (rollResult <= targetValue) {
                 successfulRolls += 1;
            }
            console.log(`Rolled ${rollResult} for ${attrName}.`);
        } else {
            let targetValue = 0
            if (isAttribute(attrName)) {
                targetValue = store.getAttributeValue(attrName);
                console.log(`Target is ${targetValue} for ${attrName}.`);
            } else {
                targetValue = store.getSkillValue(attrName);
                console.log(`Target is ${targetValue} for ${attrName}.`);
            }
            const rollResult = rollDiceString("Ob3T6");
            if (rollResult <= targetValue) {
                 successfulRolls += 1;
            }
            console.log(`Rolled ${rollResult} for ${attrName}.`);
        }
    });
    console.log(`Rolled ${successfulRolls} successes.`);
    return successfulRolls
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

// --- UPDATED Logic for Applying Career Effects (Called after selection, before skill spending) ---
export function applyCareerEffectsLogic(store, bribedAttribute) {
    const currentStage = store.current.currentCareerStage;
    let selectedCareer = store.current.currentCareerDetails;

    if (!selectedCareer) {
        console.warn(`No career selected for stage ${currentStage}. Cannot advance.`);
        return;
    }

    console.log(`Advancing through career: ${selectedCareer.name} for stage ${currentStage}...`);

    // 1) Roll against 3 different characteristics
    let successRate = 0
    if (currentStage !== 'background_selection') {
        successRate = applyCharacteristicRolls(store, selectedCareer, bribedAttribute);
        
        // --- NEW LOGIC: REDIRECT ON TOTAL FAILURE ---
        if (successRate === 0) {
            console.log("Failing all rolls! Character is redirected to the Arbetslös or Hemlös career.");
            let autoCareer = generalCareers.find(c => c.id === 'car-arbetslos');
            if (store.totalStartkapital < 0) {
                autoCareer = generalCareers.find(c => c.id === 'car-hemlos');
            }
            // Find the "Arbetare" career
            if (autoCareer) {
                selectedCareer = autoCareer;
                store.current.currentCareerDetails = selectedCareer;
                // Re-run the rolls for the new career, but force a success rate of 0 to show the penalty
                // Or you could roll again, but this feels more punitive.
                successRate = 1;
            } else {
                console.error("Could not find career for redirection.");
            }
        }
    }
    // NB! Reduce successRate here to keep for array indexing
    if (successRate > 0) {
       successRate -= 1
    } 

    // 2) User gets some skill points to buy career skills
    store.current.careerPointsPool = selectedCareer.baseCareerSkillPoints[successRate];
    // --- NEW: Set initial award for career points ---
    store.current.initialCareerPointsAwarded = selectedCareer.baseCareerSkillPoints[successRate];
    enableCareerSkills(store, selectedCareer);

    // 3) User gets a number of free skill points
    store.current.freeSkillPointsPool += selectedCareer.baseFreeSkillPoints[successRate];
    // --- NEW: Set initial award for free points ---
    store.current.initialFreeSkillPointsAwarded = selectedCareer.baseFreeSkillPoints[successRate];

    // 4) User gets a number of skillpoints for "Stridsvana"
    store.current.stridsvanaSkillPointsPool += selectedCareer.baseStridsvanaPoints[successRate];
    // --- NEW: Set initial award for Stridsvana points ---
    store.current.initialStridsvanaSkillPointsAwarded = selectedCareer.baseStridsvanaPoints[successRate];

    // 5) Character age increases
    store.current.age += selectedCareer.yearsInCareer;

    // 6) Character gets a promotion
    store.current.promotions.push(selectedCareer.promotion);

    // 7) Characters gets money for their starting capital
    const amountRoll = rollDiceString('Ob3T6')
    const amount = amountRoll * selectedCareer.startingCapital[successRate];
    store.current.startkapital.push({ amount , description: "Lön"});

    // 8) Character rolls two times on the career event table
    if (selectedCareer.eventTable) {
        const eventTable = careerEventTables[selectedCareer.eventTable];
        if (eventTable) {
            store.rollLifeEvent(selectedCareer.eventTable);
            store.rollLifeEvent(selectedCareer.eventTable);
        } else {
            // Check background table
            const eventTable = backgroundEventTables[selectedCareer.eventTable]
            if (eventTable) {
                store.rollLifeEvent(selectedCareer.eventTable);
                store.rollLifeEvent(selectedCareer.eventTable);
            } else {
                console.warn(`Career event table "${selectedCareer.eventTable}" not found.`);
            }
        }
    }

    // 9) Character gets benefits or penalties for career success
    if (successRate < 1 && selectedCareer.failedBenefits) {
        store.applyLifeEvents(selectedCareer.failedBenefits);
    }
    if (successRate === 1 && selectedCareer.normalBenefits) {
        store.applyLifeEvents(selectedCareer.normalBenefits);
    }
    if (successRate > 1 && selectedCareer.successfulBenefits) {
        store.applyLifeEvents(selectedCareer.successfulBenefits);
    }
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

    // Reset prison for character
    // store.current.prisonTerm = false

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
