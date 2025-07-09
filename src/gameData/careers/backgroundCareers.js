// src/gameData/careers/backgroundCareers.js

const backgroundCareers = [
  {
    id: 'bg-hemlos',
    name: 'Hemlös',
    type: 'background',
    description: 'Rollpersonen har levt ett liv på gatan eller i ödemarken. Rollpersonen har inte gått i någon skola och det är tveksamt om rollpersonen kan läsa.',
    characteristicRolls: ['Rörlighet', 'Personlighet', 'Syn'], // Attributes to roll for success
    baseCareerSkillPoints: 30, // Points for skills associated with this career
    baseFreeSkillPoints: 0,    // Points for any skill
    baseStridsvanaPoints: 0,   // Points for Stridsvana
    promotion: 'Street-Smart', // Promotion title
    startingCapital: 10,      // Starting money for this career
    eventTable: 'hemlosBackgroundEvents', // Name of a career-specific event table
    associatedSkills: ['Fingerfärdighet', 'Genomsöka', 'Gömma', 'Klättra', 'Närstrid', 'Smyga', 'Supa', 'Undre världen', 'Värdering', 'Överlevnad', 'Övertalning'], // Skills to enable/buy
    restrictions: [], // No restrictions for background careers
    yearsInCareer: 3, // Example: how many years this career path represents
  },
  {
    id: 'bg-underklass',
    name: 'Underklass',
    type: 'background',
    description: 'Rollpersonen har vuxit upp i föga inspirerande uppväxtmiljö i en sjaskig lägenhet i ett stort betongblock. Rollpersonen har deltagit i grundskolan fast hoppade antagligen av tidigt. På fritiden är rollpersonen förmodligen med i ett gäng eller spenderar myckt tid på nätet med att drömma sig bort.',
    characteristicRolls: ['Styrka', 'Tålighet', 'Hörsel'],
    baseCareerSkillPoints: 25,
    baseFreeSkillPoints: 5,
    baseStridsvanaPoints: 0,
    promotion: 'Country Strong',
    startingCapital: 50,
    eventTable: 'underklassenBackgroundEvents',
    associatedSkills: ['Förföra', 'Genomsöka', 'Hasardspel', 'Idrott', 'Musik', 'Närstrid', 'Supa', 'Undre världen', 'Värdering', 'Övertalning'],
    restrictions: [],
    yearsInCareer: 7,
  },
  {
    id: 'bg-medelklass',
    name: 'Medelklass',
    type: 'background',
    description: 'Rollpersonens uppväxt har varit tämligen lugn och skyddad. Rollpersonen har troligen varit förskonad från brott och haft möjlighet att genomföra skolan i en hyfsad grundskola och har troligen också läst gymnasiet. Familjesammanhållningen är god även om det jobbas mycket.',
    characteristicRolls: ['Bildning', 'Psyke', 'Vilja'],
    baseCareerSkillPoints: 30,
    baseFreeSkillPoints: 0,
    baseStridsvanaPoints: 0,
    promotion: 'Scholar',
    startingCapital: 100,
    eventTable: 'medelklassenBackgroundEvents',
    associatedSkills: ['Dans', 'Förföra', 'Idrott', 'Köra bil', 'Musik', 'Simma', 'Socialt uppträdande', 'Övertalning', 'Administration', 'Biologi', 'Datateknik', 'Ekonomi', 'Fysik', 'Historia', 'Kemi', 'Matematik', 'Media', 'Programmering', 'Psykologi', 'Skriva/Läsa'],
    restrictions: [],
    yearsInCareer: 6,
  },
  {
    id: 'bg-overklass',
    name: 'Överklass',
    type: 'background',
    description: 'Rollpersonens uppväxt har varit bekymmersfri och skyddad mot problem. Familjens förmögenhet och inflytande har hållit rollpersonen borta från det mesta av samhällets destruktiva företeelser.',
    characteristicRolls: ['Bildning', 'Psyke', 'Vilja'],
    baseCareerSkillPoints: 30,
    baseFreeSkillPoints: 0,
    baseStridsvanaPoints: 0,
    promotion: 'Scholar',
    startingCapital: 1000,
    eventTable: 'medelklassenBackgroundEvents',
    associatedSkills: ['Dans', 'Förföra', 'Geografi', 'Köra bil', 'Ledarskap', 'Politik', 'Simma', 'Socialt uppträdande', 'Stil & Smak', 'Övertalning', 'Administration', 'Biologi', 'Datateknik', 'Ekonomi', 'Fysik', 'Historia', 'Kemi', 'Matematik', 'Media', 'Programmering', 'Psykologi', 'Skriva/Läsa'],
    restrictions: [],
    yearsInCareer: 6,
  },
  // Add more background careers as needed
];

export default backgroundCareers;