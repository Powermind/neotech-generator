// src/gameData/careers/careerEventTables.js

export const hemlosBackgroundEvents = [
  { min: 1, max: 3, description: "Adopterad: Rollpersonen blev adopterad av en tiggare som lär upp rollpersonen (anteckna som kontakt med T16 resurser).", modifiers: [{ type: 'kontakt', title: 'Tiggare', resources: '1T6' }]  },
  { min: 4, max: 7, description: "Alkoholmissbruk: Rollpersonen utvecklar ett beroende av alkohol. Använd 1T6+6 enheter för att höja färdigheten Supa.", modifiers: [{ type: 'skill_distribution', allowedSkills: ['Supa'], description: 'Höj Supa', diceFormula: '1T6+6' }]  },
  { min: 8, max: 13, description: "Droger: Rollpersonen har börjat med någon beroendeframkallande drog. Beorendegraden för drogen är 2T6. Eftersom rollpersonen inte kunde betala så tjallade hen på sin langare så att denna åkte i fängelse.", modifiers: [{ type: 'fiende', title: 'Langare', resources: '1T6' }] },
  { min: 14, max: 15, description: "Familjetragedi: Rollpersonens familj har blivit dödad – föräldrar och syskon. Detta skedde genom en olyckshändelse eller eldvåda." },
  { min: 16, max: 19, description: "Försöksperson: Rollpersonen har varit försöksobjekt och testat en ny drog.", modifiers: [{ type: 'startkapital', description: 'Försöksperson', diceFormula: 'Ob3T6', multiplier: 10 }]  },
  { min: 20, max: 23, description: "Föräldralös: Båda föräldrarna är döda." },
  { min: 24, max: 25, description: "Gängmedlem: Välj ett typ av gäng på sidan 43. Anteckna gängledare som kontakt.", modifiers: [{ type: 'kontakt', title: 'Gängledare', resources: '1T6' }]  },
  { min: 26, max: 28, description: "Härbärge: Rollpersonen har haft rätt att bo och äta på ett härbärge. Anteckna kontakt med Resurser T16+2.", modifiers: [{ type: 'kontakt', title: 'Socialarbetare', resources: '1T6+2' }]  },
  { min: 29, max: 31, description: "Härdad. Rollpersonen har varit med om mycket lidande och får därför 1T6 psykoskryss." },
  { min: 32, max: 35, description: "Langat knart. Rollpersonen har langat knark och finns därför med i brottsregistret.", modifiers: [{ type: 'kontakt', title: 'Langare', resources: '1T6+2' }, { type: 'startkapital', description: 'Knarklangare', diceFormula: 'Ob3T6', multiplier: 100 }, { type: 'brottsregister', value: true }] },
  { min: 36, max: 38, description: "Misshandlad: Har blivit misshandlad av ett gäng överklassungdomar. PER minskar med två (–2). Plastikkirurgi kan förbättra.", modifiers: [{ type: 'attribute', target: 'PER', amount: -2 }] },
  { min: 39, max: 40, description: "Misshandlad av polisen: Fick permanenta men. Minska TÅL med ett (–1) och STY med ett (–1).",  modifiers: [{ type: 'attribute', target: 'TÅL', amount: -1, description: 'Misshandlad' }, { type: 'attribute', target: 'STY', amount: -1, description: 'Misshandlad' }] },
  { min: 41, max: 44, description: "Prostituerad: Rollpersonen har prostituerat sig för att överleva men tröttnade och flydde från sin hallick.", modifiers: [{ type: 'fiende', title: 'Hallick', resources: '2T6' }] },
  { min: 45, max: 47, description: "Självmordsförsök: Rollpersonen har försökt ta sitt liv. Detta medför att rollpersonen får 2T6 psykoskryss.", modifiers: [{ type: 'kontakt', title: 'Socialarbetare', resources: '2T6' }] },
  { min: 48, max: 50, description: "Småbrottsling: Rollpersonen har ett flertal bussincidenter bakom sig.", modifiers: [{ type: 'fiende', title: 'Butiksinnehavare', resources: '3T6' }] },
  { min: 51, max: 54, description: "Sopshämtare: Rollpersonen har livnärt sig på sopor. Under senare tid lärde rollpersonen känna en baglady som delade märkliga utsagor.", modifiers: [{ type: 'kontakt', title: 'Baglady', resources: '1T6' }] },
  { min: 55, max: 57, description: "Tjackhora: Rollpersonen har lärt känna en prostituerad som numera är tyngt beroende av droger.", modifiers: [{ type: 'kontakt', title: 'Prostituerad', resources: '1T6' }] },
  { min: 58, max: 61, description: "Ungdomsanstalt: Rollpersonen har blivit intagen på ungdomsanstalt för kriminalitet.", modifiers: [{ type: 'kontakt', title: 'Kriminell', resources: '2T6' }] },
  { min: 62, max: 64, description: "Upplopp: Rollpersonen har deltagit i ett upplopp som slogs ner brutalt av ordningsmakten.", modifiers: [{ type: 'attribute', target: 'TÅL', amount: -1, description: 'Misshandlad' }, { type: 'brottsregister', value: true }, { type: 'startkapital', description: 'Böter', diceFormula: 'Ob3T6', multiplier: -10 }] },
  { min: 65, max: 67, description: "Okänd välgörare: Rollpersonen har fått hjälp från en okänd person.", modifiers: [{ type: 'kontakt', title: 'Okänd välgörare', resources: '3T6' }, { type: 'startkapital', description: 'Okänd välgörare', diceFormula: 'Ob3T6', multiplier: 100 } ] },
  { min: 68, max: 70, description: "Övergiven: Föräldrarna har lämnat rollpersonen och rollpersonen vet inte var de finns." },
  { min: 71, max: 80, description: "Slå på händelsetabellen för underklassen (N2.22)." },
  { min: 81, max: 100, description: "Slå på den allmänna händelsetabellen (N2.21)." },
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