// src/gameData/careers/generalCareers.js

const generalCareers = [
  {
    id: 'car-soldier',
    name: 'Soldier',
    type: 'general',
    description: 'Trained in combat and military discipline.',
    characteristicRolls: ['Styrka', 'Tålighet', 'Rörlighet'],
    baseCareerSkillPoints: 20,
    baseFreeSkillPoints: 10,
    baseStridsvanaPoints: 5,
    promotion: 'Sergeant',
    startingCapital: 150,
    eventTable: 'soldierCareerEvents',
    associatedSkills: ['Gevär', 'Närstrid–Slagsmål', 'Taktik', 'Stridsvana'],
    restrictions: [], // No general restrictions for this one
    yearsInCareer: 4,
  },
  {
    id: 'car-medic',
    name: 'Medic',
    type: 'general',
    description: 'Skilled in healing and medical procedures.',
    characteristicRolls: ['Psyke', 'Bildning', 'Personlighet'],
    baseCareerSkillPoints: 15,
    baseFreeSkillPoints: 10,
    baseStridsvanaPoints: 0,
    promotion: 'Field Doctor',
    startingCapital: 120,
    eventTable: 'medicCareerEvents',
    associatedSkills: ['Medicin', 'Första hjälpen', 'Biologi', 'Kirurgi'],
    // Example restriction: Requires a minimum Intelligence (Bildning) of 8
    restrictions: [{ type: 'min_attribute', attribute: 'Bildning', value: 8 }],
    yearsInCareer: 5,
  },
  {
    id: 'car-scout',
    name: 'Scout',
    type: 'general',
    description: 'Expert in reconnaissance and wilderness survival.',
    characteristicRolls: ['Rörlighet', 'Syn', 'Hörsel'],
    baseCareerSkillPoints: 18,
    baseFreeSkillPoints: 12,
    baseStridsvanaPoints: 2,
    promotion: 'Pathfinder',
    startingCapital: 100,
    eventTable: 'scoutCareerEvents',
    associatedSkills: ['Spaning', 'Smyga', 'Överlevnad', 'Jakt'],
    restrictions: [],
    yearsInCareer: 4,
  },
  // Add more general careers
];

export default generalCareers;