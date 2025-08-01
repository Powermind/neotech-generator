// src/gameData/careers/backgroundCareers.js

const backgroundCareers = [
  {
    id: 'bg-hemlos',
    name: 'Hemlös',
    type: 'background',
    description: 'Rollpersonen har levt ett liv på gatan eller i ödemarken. Rollpersonen har inte gått i någon skola och det är tveksamt om rollpersonen kan läsa.',
    characteristicRolls: [], // Attributes to roll for success
    baseCareerSkillPoints: [30], // Points for skills associated with this career
    baseFreeSkillPoints: [0],    // Points for any skill
    baseStridsvanaPoints: [0],   // Points for Stridsvana
    promotion: 'Street-Smart', // Promotion title
    startingCapital: [10000],      // Starting money for this career
    eventTable: 'hemlosBackgroundEvents', // Name of a career-specific event table
    associatedSkills: ['Fingerfärdighet', 'Genomsöka', 'Gömma', 'Klättra', 'Närstrid/Slagsmål', 'Smyga', 'Supa', 'Undre världen', 'Värdering', 'Överlevnad', 'Övertalning'], // Skills to enable/buy
    restrictions: [], // No restrictions for background careers
    yearsInCareer: 4, // Example: how many years this career path represents
    bilMod: -3,
    genetics: false
  },
  {
    id: 'bg-underklass',
    name: 'Underklass',
    type: 'background',
    description: 'Rollpersonen har vuxit upp i föga inspirerande uppväxtmiljö i en sjaskig lägenhet i ett stort betongblock. Rollpersonen har deltagit i grundskolan fast hoppade antagligen av tidigt. På fritiden är rollpersonen förmodligen med i ett gäng eller spenderar myckt tid på nätet med att drömma sig bort.',
    characteristicRolls: [],
    baseCareerSkillPoints: [25],
    baseFreeSkillPoints: [5],
    baseStridsvanaPoints: [0],
    promotion: 'Country Strong',
    startingCapital: [50000],
    eventTable: 'underklassenBackgroundEvents',
    associatedSkills: ['Förföra', 'Genomsöka', 'Hasardspel', 'Idrott', 'Musik', 'Närstrid/Slagsmål', 'Supa', 'Undre världen', 'Värdering', 'Övertalning'],
    restrictions: [],
    yearsInCareer: 4,
    bilMod: -1,
    genetics: false
  },
  {
    id: 'bg-medelklass',
    name: 'Medelklass',
    type: 'background',
    description: 'Rollpersonens uppväxt har varit tämligen lugn och skyddad. Rollpersonen har troligen varit förskonad från brott och haft möjlighet att genomföra skolan i en hyfsad grundskola och har troligen också läst gymnasiet. Familjesammanhållningen är god även om det jobbas mycket.',
    characteristicRolls: [],
    baseCareerSkillPoints: [30],
    baseFreeSkillPoints: [0],
    baseStridsvanaPoints: [0],
    promotion: 'Scholar',
    startingCapital: [100],
    eventTable: 'medelklassenBackgroundEvents',
    associatedSkills: ['Dans', 'Förföra', 'Idrott', 'Köra/bil', 'Musik', 'Simma', 'Socialt uppträdande', 'Övertalning', 'Administration', 'Biologi', 'Datateknik', 'Ekonomi', 'Fysik', 'Historia', 'Kemi', 'Matematik', 'Media', 'Programmering', 'Psykologi', 'Skriva/Läsa'],
    restrictions: [],
    yearsInCareer: 4,
    bilMod: 0,
    genetics: false
  },
  {
    id: 'bg-overklass',
    name: 'Överklass',
    type: 'background',
    description: 'Rollpersonens uppväxt har varit bekymmersfri och skyddad mot problem. Familjens förmögenhet och inflytande har hållit rollpersonen borta från det mesta av samhällets destruktiva företeelser.',
    characteristicRolls: [],
    baseCareerSkillPoints: [30],
    baseFreeSkillPoints: [0],
    baseStridsvanaPoints: [0],
    promotion: 'Scholar',
    startingCapital: [1000],
    eventTable: 'medelklassenBackgroundEvents',
    associatedSkills: ['Dans', 'Förföra', 'Geografi', 'Köra/bil', 'Ledarskap', 'Politik', 'Simma', 'Socialt uppträdande', 'Stil & smak', 'Övertalning', 'Administration', 'Biologi', 'Datateknik', 'Ekonomi', 'Fysik', 'Historia', 'Kemi', 'Matematik', 'Media', 'Programmering', 'Psykologi', 'Skriva/Läsa'],
    restrictions: [],
    yearsInCareer: 4,
    bilMod: '1T6-2',
    genetics: true
  },
  {
    id: 'bg-socialElit',
    name: 'Social Elit',
    type: 'background',
    description: 'Rollpersonens uppväxt var ensam, föräldrarna var ständigt ute på jobb eller i media. Familjesn rykte och status betyder allt och rollpersonen har sedan barnsben varit omgiven av betjänter, privatlärare och livvakter. Detta har starkt präglat rollpersonens uppväxt och människosyn - alla människor är giriga och kan köpas för pengar.',
    characteristicRolls: [],
    baseCareerSkillPoints: [30],
    baseFreeSkillPoints: [0],
    baseStridsvanaPoints: [0],
    promotion: 'Scholar',
    startingCapital: [10000],
    eventTable: 'medelklassenBackgroundEvents',
    associatedSkills: ['Dans', 'Förföra', 'Geografi', 'Köra/bil', 'Ledarskap', 'Simma', 'Socialt uppträdande', 'Stil & smak', 'Övertalning', 'Administration', 'Biologi', 'Datateknik', 'Ekonomi', 'Fysik', 'Historia', 'Kemi', 'Matematik', 'Media', 'Programmering', 'Psykologi', 'Skriva/Läsa'],
    restrictions: [],
    yearsInCareer: 4,
    bilMod: '1T6-3',
    genetics: true
  },
  // Add more background careers as needed
];

export default backgroundCareers;