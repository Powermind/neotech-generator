// src/gameData/careers/generalCareers.js

const generalCareers = [
  {
    id: 'car-abetare',
    name: 'Arbetare',
    type: 'general',
    description: '',
    characteristicRolls: ['VIL', 'TÅL', 'RÖR'],
    baseCareerSkillPoints: [5,10,15],
    baseFreeSkillPoints: [15,20,25],
    baseStridsvanaPoints: [0, 0, 0],
    promotion: ['Arbetare', 'Förman', 'Arbetsledare', 'Verksmästare'],
    startingCapital: [50, 100, 500],
    eventTable: 'arbetareCareerEvents',
    associatedSkills: ['Elektronik', 'Fingerfärdighet', 'Klättra', 'Mekanik', 'Köra/truck', 'Köra/lastbil'],
    restrictions: [], // No general restrictions for this one
    failedBenefits: {  description: 'Sparkad. Rollpersonen har förlorat jobbet och får inte fortsätta som Arbetare nästa period.',
      modifiers:[
         { type: 'fired', reason: 'Sparkad' },
      ] 
    },
    successfulBenefits: {  description: 'Oumbärlig. Rollpersonen har gjort sig oumbrälig på jobbet. Om rollpersonen väljer samma karriär nästa steg lyckas ett framgångsslag automatiskt.',
      modifiers:[
        { type: 'characteristicsRoll', career: 'Arbetare' }
      ] 
    },
    yearsInCareer: '1T6+2',
  },
  {
    id: 'car-artist',
    name: 'Artist',
    type: 'general',
    description: 'Skådespelare, musiker eller programledare.',
    characteristicRolls: ['PER', 'Mediastatus', 'Agera'],
    baseCareerSkillPoints: [15, 20, 25],
    baseFreeSkillPoints: [10, 15, 20],
    baseStridsvanaPoints: [0, 0, 0],
    promotion: 'Skådespelare',
    startingCapital: [50, 200, 10000],
    eventTable: 'artistCareerEvents',
    associatedSkills: ['Agera', 'Dans', 'Förklädnad', 'Media', 'Sjunga', 'Språk', 'Stil & smak', 'Övertalning'],
    // restrictions: [{ type: 'min_attribute', attribute: 'Bildning', value: 8 }],
    yearsInCareer: '1T6',
    failedBenefits: {  description: 'Fiasko. Rollpersonen har tappat sugen och vill inte fortsätta som Artist.',
      modifiers:[
         { type: 'fired', reason: 'Fiasko' },
      ] 
    },
    normalBenefits: {  description: 'Mediavan. Rollpersonen har klarat sig bra på jobbet och får höja mediastatus med 1.',
      modifiers:[
         { type: 'secondary_attribute', name: 'Mediastatus', modifier: 1 },
      ] 
    },
    successfulBenefits: {  description: 'Succe. Rollpersonen har gjort succe och får höja mediastatus med 2T6.',
      modifiers:[
         { type: 'secondary_attribute', name: 'Mediastatus', modifier: '2T6' },
      ] 
    },
  },
  {
    id: 'car-affarsman',
    name: 'Affärsman',
    type: 'general',
    description: 'Jobbar med egen firma, troligen som underleverantör eller konsult åt ett större företag.',
    characteristicRolls: ['PSY', 'Ekonomi', 'Startkapital'],
    baseCareerSkillPoints: [15, 20, 25],
    baseFreeSkillPoints: [10, 15, 20],
    baseStridsvanaPoints: [0, 0, 0],
    promotion: 'Pathfinder',
    startingCapital: [50, 100, 5000],
    eventTable: 'affarsmanCareerEvents',
    associatedSkills: ['Administration', 'Ekonomi', 'Juridik', 'Ledarskap', 'Media', 'Psykologi', 'Socialt Uppträdande', 'Värdering', 'Övertalning' ],
    restrictions: [],
    yearsInCareer: '1T6+1',
    failedBenefits: {  description: 'Fiasko. Rollpersonen har tappat sugen och vill inte fortsätta som Affärsman.',
      modifiers:[
         { type: 'fired', reason: 'Fiasko' },
      ] 
    },
    successfulBenefits: {  description: 'Reklam. Rollpersonen har gjort mycket reklam och blivit kändis genom den. Öka Mediastatus med 1T6.',
      modifiers:[
         { type: 'secondary_attribute', name: 'Mediastatus', modifier: '1T6' },
      ] 
    },
  },
  {
    id: 'car-foretagsman',
    name: 'Företagsman',
    type: 'general',
    description: 'Jobbar på megaföretag.',
    characteristicRolls: ['PSY', 'Ekonomi', 'Examen'],
    baseCareerSkillPoints: [15, 25, 40],
    baseFreeSkillPoints: [10, 10, 10],
    baseStridsvanaPoints: [0, 0, 0],
    promotion: 'Pathfinder',
    startingCapital: [200, 1000, 5000],
    eventTable: 'foretagsmanCareerEvents',
    associatedSkills: ['Administration', 'Diplomati', 'Ekonomi', 'Informationssökning', 'Juridik', 'Ledarskap', 'Psykologi', 'Socialt uppträdande', 'Stil & smak', 'Värdering', 'Övertalning' ],
    restrictions: [],
    yearsInCareer: '1T6+1',
    failedBenefits: {  description: 'Fiasko. Rollpersonen har tappat sugen och vill inte fortsätta som Företagsman.',
      modifiers:[
         { type: 'fired', reason: 'Fiasko' },
      ] 
    },
    successfulBenefits: {  description: 'Reklam. Rollpersonen har gjort mycket reklam och blivit kändis genom den. Öka Mediastatus med 1.',
      modifiers:[
         { type: 'secondary_attribute', name: 'Mediastatus', modifier: 1 },
      ] 
    },
  },
  {
    id: 'car-gangmedlem',
    name: 'Gängmedlem',
    type: 'general',
    description: 'Medlem av ett gatugäng.',
    characteristicRolls: ['STY', 'Slagsmål', 'Cool'],
    baseCareerSkillPoints: [10, 15, 20],
    baseFreeSkillPoints: [10, 15, 20],
    baseStridsvanaPoints: [2, 3, 4],
    promotion: 'Pathfinder',
    startingCapital: [5, 10, 50],
    eventTable: 'gangmedlemCareerEvents',
    associatedSkills: ['Fingerfärdighet', 'Genomsöka', 'Köra/bil', 'Närstrid/Slagsmål', 'Närstrid/Kniv', 'Pistol', 'Supa', 'Undre världen', 'Övertalning' ],
    restrictions: [],
    yearsInCareer: '1T6',
    failedBenefits: {  description: 'Utesluten. Rollpersonen har blivit utesluten ur gänget och får inte fortsätta som Gängmedlem nästa period.',
      modifiers:[
         { type: 'fired', reason: 'Utesluten' },
      ] 
    },
    successfulBenefits: {  description: 'Hårding. Rollpersonen har varit en riktig hårding och utmärkt sig i gänget. Om rollpersonen väljer samma karriär nästa period lyckas ett framgångsslag automatiskt.',
      modifiers:[
        { type: 'characteristicsRoll', career: 'Gängmedlem' }
      ] 
    },
  },
  {
    id: 'car-gangster',
    name: 'Gangster',
    type: 'general',
    description: 'Medlem av den organiserade brottsligheten.',
    characteristicRolls: ['PSY', 'PER', 'Undre världen'],
    baseCareerSkillPoints: [15, 20, 25],
    baseFreeSkillPoints: [10, 15, 20],
    baseStridsvanaPoints: [2, 3, 4],
    promotion: 'Pathfinder',
    startingCapital: [100, 500, 2500],
    eventTable: 'gangsterCareerEvents',
    associatedSkills: ['Ekonomi', 'Förhörsteknik', 'Hasardspel', 'Juridik', 'Köra/bil', 'Ledarskap', 'Närstrid/Slagsmål', 'Närstrid/Kniv', 'Pistol', 'Undre världen', 'Övertalning' ],
    restrictions: [],
    yearsInCareer: '1T6+1',
    failedBenefits: {  description: 'Utesluten. Rollpersonen har blivit utesluten ur mafifan och får inte fortsätta som Gangster nästa period.',
      modifiers:[
         { type: 'fired', reason: 'Utesluten' },
      ] 
    },
    successfulBenefits: {  description: 'Ökänd. Rollpersonen har blivit ökänd. Mediastatus ökar med 2.',
      modifiers:[
         { type: 'secondary_attribute', name: 'Mediastatus', modifier: 2 },
      ]
    },
  },
  {
    id: 'car-hacker',
    name: 'Hacker',
    type: 'general',
    description: 'IT-Proffs på nätet.',
    characteristicRolls: ['PSY', 'Hacking', 'Informationssökning'],
    baseCareerSkillPoints: [20, 25, 30],
    baseFreeSkillPoints: [5, 10, 15],
    baseStridsvanaPoints: [0, 0, 0],
    promotion: 'Pathfinder',
    startingCapital: [20, 250, 5000],
    eventTable: 'hackerCareerEvents',
    associatedSkills: ['Fingerfärdighet', 'Genomsöka', 'Köra/bil', 'Närstrid/Slagsmål', 'Närstrid/Kniv', 'Pistol', 'Supa', 'Undre världen', 'Övertalning' ],
    restrictions: [],
    yearsInCareer: '1T6',
    failedBenefits: {  description: 'Utbränd. Rollpersonen får inte fortsätta som Hacker nästa period.',
      modifiers:[
         { type: 'fired', reason: 'Utbränd' },
      ] 
    },
    successfulBenefits: {  description: 'Kändis. Rollpersonen har blivit uppmärksammad i media. Mediastatus ökar med 1T6.',
      modifiers:[
         { type: 'secondary_attribute', name: 'Mediastatus', modifier: '1T6' },
      ]
    },

  },
  {
    id: 'car-kriminell',
    name: 'Kriminell',
    type: 'general',
    description: 'Försörjer sig på småbrottslighet.',
    characteristicRolls: ['PSY', 'Cool', 'Undre världen'],
    baseCareerSkillPoints: [15, 20, 25],
    baseFreeSkillPoints: [10, 15, 20],
    baseStridsvanaPoints: [0, 2, 3],
    promotion: 'Pathfinder',
    startingCapital: [10, 200, 5000],
    eventTable: 'kriminellCareerEvents',
    associatedSkills: ['Dyrka lås', 'Fingerfärdighet', 'Förfalskning', 'Gömma', 'Klättra', 'Köra/bil', 'Närstrid/Kniv', 'Pistol', 'Smyga', 'Spaning', 'Sprängteknik', 'Säkerhetssystem', 'Värdering', 'Undre världen', 'Övertalning' ],
    restrictions: [],
    yearsInCareer: '1T6',
    failedBenefits: {  description: 'Blivit hederlig. Rollpersonen har avslutat sin kriminella bana och får inte fortsätta som Kriminell nästa period.',
      modifiers:[
         { type: 'fired', reason: 'Hederlig' },
      ] 
    },
    successfulBenefits: {  description: 'Kan alla knep. Rollpersonen har lärt sig alla knep i branschen. Om rollpersonen väljer samma karriär nästa period lyckas ett framgångsslag automatiskt.',
      modifiers:[
        { type: 'characteristicsRoll', career: 'Kriminell' }
      ] 
    },
  },
  {
    id: 'car-mediaarbetare',
    name: 'Mediaarbetare',
    type: 'general',
    description: 'Reporter eller programledare.',
    characteristicRolls: ['PER', 'Media', 'Informationssökning'],
    baseCareerSkillPoints: [15, 20, 25],
    baseFreeSkillPoints: [10, 15, 20],
    baseStridsvanaPoints: [0, 0, 0],
    promotion: 'Pathfinder',
    startingCapital: [50, 500, 1000],
    eventTable: 'mediaarbetareCareerEvents',
    associatedSkills: ['Agera', 'Foto & film', 'Förhörsteknik', 'Informationssökning', 'Media', 'Skriva/läsa', 'Socialt uppträdande', 'Språk', 'Stil & smak', 'Övertalning' ],
    restrictions: [],
    yearsInCareer: '1T6',
    failedBenefits: {  description: 'Oönskad. Rollpersonen är inte önskad i branschen och får inte fortsätta som Mediaarbetare.',
      modifiers:[
         { type: 'fired', reason: 'Oönskad' },
      ] 
    },
    normalBenefits: {  description: 'Mediavan. Rollpersonen har klarat sig bra på jobbet och får höja mediastatus med 1.',
      modifiers:[
         { type: 'secondary_attribute', name: 'Mediastatus', modifier: 1 },
      ] 
    },
    successfulBenefits: {  description: 'Kändis. Rollpersonen har blivit känd i media och får höja mediastatus med 1T6+1.',
      modifiers:[
         { type: 'secondary_attribute', name: 'Mediastatus', modifier: '1T6+1' },
      ] 
    },
  },
  {
    id: 'car-officer',
    name: 'Officer',
    type: 'general',
    description: 'Officer i någon form av försvarsstyrka.',
    characteristicRolls: ['TÅL', 'PSY', 'Ledarskap'],
    baseCareerSkillPoints: [25, 30, 35],
    baseFreeSkillPoints: [5, 10, 15],
    baseStridsvanaPoints: [4, 5, 6],
    promotion: 'Pathfinder',
    startingCapital: [100, 500, 1000],
    eventTable: 'officerCareerEvents',
    associatedSkills: ['Automateld', 'Första hjälpen', 'Gevär', 'Kasta', 'Ledarskap', 'Navigering', 'Närstrid/stridskonst', 'Pistol', 'Samband', 'Simma', 'Smyga', 'Spaning', 'Sprängteknik', 'Strategi', 'Taktik', 'Överlevnad', 'Övertalning' ],
    restrictions: [],
    yearsInCareer: '1T6',
    failedBenefits: {  description: 'Avskedad. Rollpersonen har blivit avskedad med goda vitsord och får inte fortsätta som Officer nästa period.',
      modifiers:[
         { type: 'fired', reason: 'Avskedad' },
      ] 
    },
    successfulBenefits: {  description: 'Medalj. Rollpersonen har visat tapperhet och får en medalj.'
    },
  },
  {
    id: 'car-playboy',
    name: 'Playboy',
    type: 'general',
    description: 'Lever loppan på sina pengar',
    characteristicRolls: ['PER', 'Mediastatus', 'Playboy'],
    baseCareerSkillPoints: [15, 20, 25],
    baseFreeSkillPoints: [10, 15, 20],
    baseStridsvanaPoints: [0, 0, 0],
    promotion: 'Pathfinder',
    startingCapital: [0, 1000, 10000],
    eventTable: 'playboyCareerEvents',
    associatedSkills: ['Dans', 'Förföra', 'Jakt', 'Hasardspel', 'Konstkännedom', 'Media', 'Socialt uppträdande', 'Språk', 'Stil & smak', 'Övertalning' ],
    restrictions: [],
    yearsInCareer: '1T6',
    failedBenefits: {  description: 'Oönskad. Rollpersonen är inte önskad i branschen och får inte fortsätta som Playboy.',
      modifiers:[
         { type: 'fired', reason: 'Oönskad' },
      ] 
    },
    normalBenefits: {  description: 'Mediavan. Rollpersonen har klarat sig bra på jobbet och får höja mediastatus med 1.',
      modifiers:[
         { type: 'secondary_attribute', name: 'Mediastatus', modifier: 1 },
      ] 
    },
    successfulBenefits: {  description: 'Kändis. Rollpersonen har blivit känd i media och får höja mediastatus med 1T6.',
      modifiers:[
         { type: 'secondary_attribute', name: 'Mediastatus', modifier: '1T6' },
      ] 
    },
  },
  {
    id: 'car-polis',
    name: 'Polis',
    type: 'general',
    description: 'Medlem av polisstyrka',
    characteristicRolls: ['PSY', 'Undre världen', 'Förhörsteknik'],
    baseCareerSkillPoints: [20, 25, 30],
    baseFreeSkillPoints: [5, 10, 15],
    baseStridsvanaPoints: [2, 3, 4],
    promotion: 'Pathfinder',
    startingCapital: [100, 400, 1000],
    eventTable: 'polisCareerEvents',
    associatedSkills: ['Administration', 'Förhörsteknik', 'Genomsöka', 'Gevär', 'Informationssökning', 'Juridik', 'Köra/bil', 'Ledarskap', 'Närstrid/stridskonst', 'Pistol', 'Samband', 'Spaning', 'Spåra', 'Undre världen', 'Övertalning'],
    restrictions: [],
    yearsInCareer: '1T6',
    failedBenefits: {  description: 'Avskedad. Rollpersonen har blivit avskedad och får inte fortsätta som Polis.',
      modifiers:[
         { type: 'fired', reason: 'Avskedad' },
      ] 
    },
  },
  {
    id: 'car-rymdarbetare',
    name: 'Rymdarbetare',
    type: 'general',
    description: 'Jobbat uppe i rymden',
    characteristicRolls: ['TÅL', 'PSY', 'Cool'],
    baseCareerSkillPoints: [25, 30, 35],
    baseFreeSkillPoints: [5, 10, 15],
    baseStridsvanaPoints: [0, 0, 0],
    promotion: 'Pathfinder',
    startingCapital: [250, 1000, 2500],
    eventTable: 'rymdarbetareCareerEvents',
    associatedSkills: ['Astronomi', 'Datateknik', 'Elektronik', 'Fritt fall', 'Fysik', 'Geologi', 'Mekanik', 'Navigering', 'Pilot/rymdfarkost', 'Rymddräkt', 'Samband'],
    restrictions: [],
    yearsInCareer: '1T6',
    failedBenefits: {  description: 'Avskedad. Rollpersonen har blivit avskedad och får inte fortsätta som Rymdarbetare.',
      modifiers:[
         { type: 'fired', reason: 'Oönskad' },
      ] 
    },
    successfulBenefits: {  description: 'Avslappnad attityd. Rollpersonen har utvecklat en cool attityd och får höja Cool med ett (+1).',
      modifiers:[
         { type: 'secondary_attribute', name: 'Cool', modifier: 1 },
      ] 
    },
  },
  {
    id: 'car-sjukvårdare',
    name: 'Sjukvårdare',
    type: 'general',
    description: 'Jobbat som sjukvårdare',
    characteristicRolls: ['PSY', 'Medicin', 'Första hjälpen'],
    baseCareerSkillPoints: [25, 30, 35],
    baseFreeSkillPoints: [5, 10, 15],
    baseStridsvanaPoints: [0, 0, 0],
    promotion: 'Pathfinder',
    startingCapital: [250, 1000, 3000],
    eventTable: 'sjukvardareCareerEvents',
    associatedSkills: ['Administration', 'Biologi', 'Cybernetik', 'Fingerfärdighet', 'Första hjälpen', 'Genteknik', 'Kemi', 'Kirurgi', 'Medicin', 'Psykologi', 'Övertalning'],
    restrictions: [],
    yearsInCareer: '1T6',
    failedBenefits: {  description: 'Avskedad. Rollpersonen har blivit avskedad och får inte fortsätta som Sjukvårdare.',
      modifiers:[
         { type: 'fired', reason: 'Avskedad' },
      ] 
    },
    successfulBenefits: {  description: 'Avslappnad attityd. Rollpersonen har utvecklat en cool attityd och får höja Cool med ett (+1).',
      modifiers:[
         { type: 'secondary_attribute', name: 'Cool', modifier: 1 },
      ] 
    },
  },
  {
    id: 'car-soldat',
    name: 'Soldat',
    type: 'general',
    description: 'Jobbat som soldat',
    characteristicRolls: ['STY', 'TÅL', 'Stridsvana'],
    baseCareerSkillPoints: [25, 30, 35],
    baseFreeSkillPoints: [5, 10, 15],
    baseStridsvanaPoints: [4, 6, 8],
    promotion: 'Pathfinder',
    startingCapital: [100, 200, 500],
    eventTable: 'soldatCareerEvents',
    associatedSkills: ['Automateld', 'Första hjälpen', 'Gevär', 'Gömma', 'Kasta', 'Ledarskap', 'Närstrid/kniv', 'Samband', 'Simma', 'Smyga', 'Spaning', 'Taktik', 'Undervisning', 'Överlevnad', 'Övertalning'],
    restrictions: [],
    yearsInCareer: '1T6',
    failedBenefits: {  description: 'Avskedad. Rollpersonen har blivit avskedad med goda vitsord och får inte fortsätta som Soldat.',
      modifiers:[
         { type: 'fired', reason: 'Avskedad' },
      ] 
    },
    successfulBenefits: {  description: 'Medalj. Rollpersonen har visat tapperhet och får en medalj.'
    },
  },
  {
    id: 'car-solo',
    name: 'Solo',
    type: 'general',
    description: 'Livvakt, lönnmördare, torped, prisjägare. Alla behövs.',
    characteristicRolls: ['PSY', 'Cool', 'Undre världen'],
    baseCareerSkillPoints: [15, 20, 25],
    baseFreeSkillPoints: [10, 15, 20],
    baseStridsvanaPoints: [2, 3, 4],
    promotion: 'Pathfinder',
    startingCapital: [100, 500, 5000],
    eventTable: 'soloCareerEvents',
    associatedSkills: ['Dyrka lås', 'Förklädnad', 'Förhörsteknik', 'Informationssökning', 'Klättra', 'Köra/bil', 'Närstrid/kniv', 'Närstrid/slagsmål', 'Samband', 'Pistol', 'Foto & film', 'Gevär', 'Smyga', 'Spaning', 'Spåra', 'Säkerhetssystem', 'Undre världen', 'Övertalning'],
    restrictions: [],
    yearsInCareer: '1T6',
    failedBenefits: {  description: 'Tröttnat. Rollpersonen har tröttnat på livet som Solo får inte fortsätta som Solo nästa period.',
      modifiers:[
         { type: 'fired', reason: 'Tröttnat' },
      ] 
    },
    successfulBenefits: {  description: 'Kan alla knep. Rollpersonen har lärt sig alla knep i branschen. Om rollpersonen väljer samma karriär nästa period lyckas ett framgångsslag automatiskt.',
      modifiers:[
        { type: 'characteristicsRoll', career: 'Solo' }
      ] 
    },
  },
  {
    id: 'car-tekniker',
    name: 'Tekniker',
    type: 'general',
    description: 'Kontruktör, Servicetekniker, Uppfinnare',
    characteristicRolls: ['PSY', 'BIL', 'Examen'],
    baseCareerSkillPoints: [15, 20, 25],
    baseFreeSkillPoints: [10, 15, 20],
    baseStridsvanaPoints: [0, 0, 0],
    promotion: 'Pathfinder',
    startingCapital: [100, 1000, 2500],
    eventTable: 'teknikerCareerEvents',
    associatedSkills: ['Administration', 'Cybernetik', 'Datateknik', 'Elektronik', 'Fysik', 'Informationssökning', 'Kemi', 'Ledarskap', 'Matematik', 'Mekanik', 'Programmering', 'Övertalning'],
    restrictions: [],
    yearsInCareer: '1T6',
    failedBenefits: {  description: 'Tröttnat. Rollpersonen har tröttnat på sin sysselsättning och får inte fortsätta som Tekniker nästa period.',
      modifiers:[
         { type: 'fired', reason: 'Tröttnat' },
      ] 
    },
    successfulBenefits: {  description: 'Patent. Rollpersonen har lyckats få ett patent i sitt eget namn.'
    },
  },
  {
    id: 'car-universitetet',
    name: 'Universitetet',
    type: 'general',
    description: 'Pluggat på universitet.',
    characteristicRolls: ['PSY', 'BIL', 'Informationssökning'],
    baseCareerSkillPoints: [15, 30, 40],
    baseFreeSkillPoints: [15, 10, 10],
    baseStridsvanaPoints: [0, 0, 0],
    promotion: 'Pathfinder',
    startingCapital: [100, 500, 1000],
    eventTable: 'universitetetCareerEvents',
    associatedSkills: ['Informationssökning', 'Läsa/skriva', 'Undervisning', 'Språk', 'Administration', 'Antropologi', 'Astronomi', 'Biologi', 'Cybernetik', 'Datateknik', 'Design', 'Ekonomi', 'Elektronik', 'Filosofi', 'Fysik', 'Genteknik', 'Geografi', 'Geologi', 'Historia', 'Juridik', 'Kemi', 'Kirurgi', 'Konstkänndeom', 'Matematik', 'Media', 'Medicin', 'Mekanik', 'Navigering', 'Politik', 'Programmering', 'Psykologi', 'Religion', 'Sociologi'],
    restrictions: [],
    yearsInCareer: '1T6',
    failedBenefits: {  description: 'Klarar inte studierna. Rollpersonen måste hitta en ny sysselsättning nästa period.',
      modifiers:[
         { type: 'fired', reason: 'Klarar inte studierna.' },
      ] 
    },
    successfulBenefits: {  description: 'Publicerad. Rollpersonen har lyckats få en artikel publicerad i en väl ansedd vetenskaplig publikation. Mediastatus ökar med ett (+1).',
      modifiers:[
         { type: 'secondary_attribute', name: 'Mediastatus', modifier: 1 },
      ] 
    },
  },
  {
    id: 'car-hemlos',
    name: 'Hemlös',
    type: 'automatic',
    description: 'Dragit runt på gatorna.',
    characteristicRolls: [],
    baseCareerSkillPoints: [20],
    baseFreeSkillPoints: [0],
    baseStridsvanaPoints: [0],
    promotion: 'Pathfinder',
    startingCapital: [0],
    eventTable: 'hemlosCareerEvents',
    associatedSkills: ['Genomsöka', 'Gömma', 'Hasardspel', 'Närstrid/slagsmål', 'Smyga', 'Supa', 'Undre världen', 'Överlevnad', 'Övertalning'],
    restrictions: [],
    yearsInCareer: '1T6',
  },
  {
    id: 'car-fangelse',
    name: 'Fängelse',
    type: 'automatic',
    description: 'Hamnat bakom lås och bom.',
    characteristicRolls: [],
    baseCareerSkillPoints: [30],
    baseFreeSkillPoints: [0],
    baseStridsvanaPoints: [2],
    promotion: 'Pathfinder',
    startingCapital: [0],
    eventTable: 'fangelseCareerEvents',
    associatedSkills: ['Fingerfärdighet', 'Hasardspel', 'Närstrid/slagsmål', 'Närstrid/kniv', 'Undre världen', 'Övertalning', 'Administration', 'Antropologi', 'Astronomi', 'Biologi', 
        'Cybernetik', 'Datateknik', 'Design', 'Ekonomi', 'Elektronik', 'Filosofi', 'Genteknik', 'Fysik', 
        'Geografi', 'Geologi', 'Historia', 'Juridik', 'Kemi', 'Kirurgi', 'Konstkännedom', 'Lingvistik', 
        'Matematik', 'Media', 'Medicin', 'Mekanik', 'Navigering','Politik','Programmering','Psykologi','Religion','Sociologi'],
    restrictions: [],
    yearsInCareer: '1T6',
  },
  {
    id: 'car-arbetslos',
    name: 'Arbetslös',
    type: 'automatic',
    description: 'Arbetslös.',
    characteristicRolls: [],
    baseCareerSkillPoints: [10],
    baseFreeSkillPoints: [10],
    baseStridsvanaPoints: [0],
    promotion: 'Pathfinder',
    startingCapital: [0],
    eventTable: 'arbetslosCareerEvents',
    associatedSkills: ['Hasardspel', 'Informationssökning', 'Matlagning', 'Musik', 'Supa', 'Undre världen'],
    restrictions: [],
    yearsInCareer: '1T6',
  },
];

export default generalCareers;