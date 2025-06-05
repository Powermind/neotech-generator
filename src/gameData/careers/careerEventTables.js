// src/gameData/careers/careerEventTables.js

export const urbanBackgroundEvents = [
    { min: 1, max: 50, event: "Got involved with a local street gang.", modifiers: [{ type: 'attribute', target: 'Undre världen', amount: 1 }] },
    { min: 51, max: 100, event: "Found a mentor in the city guard.", modifiers: [{ type: 'attribute', target: 'Ledarskap', amount: 1 }] },
];

export const ruralBackgroundEvents = [
    { min: 1, max: 50, event: "Faced down a wild animal.", modifiers: [{ type: 'attribute', target: 'Jakt', amount: 1 }] },
    { min: 51, max: 100, event: "Helped a struggling farm family.", modifiers: [{ type: 'attribute', target: 'Tålighet', amount: 1 }] },
];

export const academicBackgroundEvents = [
    { min: 1, max: 50, event: "Discovered a forgotten text.", modifiers: [{ type: 'attribute', target: 'Bildning', amount: 1 }] },
    { min: 51, max: 100, event: "Had a public debate with a rival scholar.", modifiers: [{ type: 'attribute', target: 'Filosofi', amount: 1 }] },
];

// Add specific event tables for Soldier, Medic, Scout, etc.
export const soldierCareerEvents = [
    { min: 1, max: 2, event: "Participated in a successful skirmish.", modifiers: [{ type: 'attribute', target: 'Stridsvana', amount: 1 }] },
    { min: 3, max: 4, event: "Witnessed a strategic blunder.", modifiers: [{ type: 'attribute', target: 'Taktik', amount: 1 }] },
    { 
    min: 5, 
    max: 100, 
    event: "Military training experience", 
    modifiers: [
      { 
        type: 'skill_distribution', 
        diceFormula: '1d6+6',
        allowedSkills: ['Pistol', 'Gevär', 'Smyga'],
        description: 'Distribute points among combat skills'
      }
    ] 
  },
];

export const medicCareerEvents = [
    { min: 1, max: 50, event: "Successfully treated a rare disease.", modifiers: [{ type: 'attribute', target: 'Medicin', amount: 1 }] },
    { min: 51, max: 100, event: "Failed to save a critical patient.", modifiers: [{ type: 'attribute', target: 'Psyke', amount: -1 }] },
];

export const scoutCareerEvents = [
    { min: 1, max: 50, event: "Discovered a hidden route.", modifiers: [{ type: 'attribute', target: 'Spaning', amount: 1 }] },
    { min: 51, max: 100, event: "Got lost in treacherous territory.", modifiers: [{ type: 'attribute', target: 'Överlevnad', amount: 1 }] },
];