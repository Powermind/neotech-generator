// src/gameData/careers/backgroundCareers.js

const backgroundCareers = [
  {
    id: 'bg-urban',
    name: 'Hemlös',
    type: 'background',
    description: 'Rollpersonen har levt ett liv på gatan eller i ödemarken. Rollpersonen har inte gått i någon skola och det är tveksamt om rollpersonen kan läsa.',
    characteristicRolls: ['Rörlighet', 'Personlighet', 'Syn'], // Attributes to roll for success
    baseCareerSkillPoints: 30, // Points for skills associated with this career
    baseFreeSkillPoints: 0,    // Points for any skill
    baseStridsvanaPoints: 0,   // Points for Stridsvana
    promotion: 'Street-Smart', // Promotion title
    startingCapital: 100,      // Starting money for this career
    eventTable: 'hemlosBackgroundEvents', // Name of a career-specific event table
    associatedSkills: ['Fingerfärdighet', 'Genomsöka', 'Gömma', 'Klättra', 'Närstrid', 'Smyga', 'Supa', 'Undre världen', 'Värdering', 'Överlevnad', 'Övertalning'], // Skills to enable/buy
    restrictions: [], // No restrictions for background careers
    yearsInCareer: 3, // Example: how many years this career path represents
  },
  {
    id: 'bg-rural',
    name: 'Rural Background',
    type: 'background',
    description: 'Raised in the countryside, accustomed to nature and hard work.',
    characteristicRolls: ['Styrka', 'Tålighet', 'Hörsel'],
    baseCareerSkillPoints: 10,
    baseFreeSkillPoints: 5,
    baseStridsvanaPoints: 0,
    promotion: 'Country Strong',
    startingCapital: 50,
    eventTable: 'ruralBackgroundEvents',
    associatedSkills: ['Överlevnad', 'Jakt', 'Simma', 'Klättra'],
    restrictions: [],
    yearsInCareer: 7,
  },
  {
    id: 'bg-academic',
    name: 'Academic Training',
    type: 'background',
    description: 'Educated in a formal institution, a mind for study and theory.',
    characteristicRolls: ['Bildning', 'Psyke', 'Vilja'],
    baseCareerSkillPoints: 15,
    baseFreeSkillPoints: 5,
    baseStridsvanaPoints: 0,
    promotion: 'Scholar',
    startingCapital: 200,
    eventTable: 'academicBackgroundEvents',
    associatedSkills: ['Skriva/Läsa', 'Historia', 'Lingvistik', 'Filosofi', 'Matematik'],
    restrictions: [],
    yearsInCareer: 6,
  },
  // Add more background careers as needed
];

export default backgroundCareers;