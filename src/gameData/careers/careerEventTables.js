export const arbetareCareerEvents = [
  { min: 1, max: 6, description: "Arbetsskada. Rollpersonen har fått allvarliga skador på sitt jobb. Minska rollpersonens RÖR med två (–2). Rollpersonen lär känna en sjukgymnast (anteckna som kontakt med 2T6+2 resurser). Efter mycket bråk lyckas rollpersonen få ut pengar på sin arbetsskadeförsäkring, höj därför startkapitalet med Ob3T6 × 1.000 euro.", modifiers: [{ type: 'kontakt', title: 'Sjukgymnast', resources: '2T6+2' }, { type: 'startkapital', description: 'Försäkring', diceFormula: 'Ob3T6', multiplier: 1000 }, { type: 'attribute', target: 'RÖR', amount: -2 }]  },
  { min: 7, max: 12, description: "Bonus. Rollpersonen har lämnat in ett rationaliseringsförslag som ledde till att företaget sparar Ob3T6 × 100.000 euro per år. Rollpersonen får 1% av detta som belöning (engångsbetalning).", modifiers: [{ type: 'startkapital', description: 'Innovation', diceFormula: 'Ob3T6', multiplier: 1000 } ] },
  { min: 13, max: 23, description: "Med i fackföreningen. Rollpersonen är med i fackföreningen, som dock är styrd av maffian. Rollpersonen känner en maffiaboss personligen (anteckna som kontakt med 1T6+12 resurser).", modifiers: [{ type: 'kontakt', title: 'Maffiaboss', resources: '1T6+12' }] },
  { min: 24, max: 33, description: "Mörkläggning. Rollpersonen har kommit på att företaget sysslar med olaglig verksamhet. Slå 1T6 för att avgöra vad: 1 miljöförorening, 2 olagliga vapen, 3 droger, 4 cancerframkallande ämne, 5 patentintrång, 6 illegal konkurrens. Rollpersonen avslöjade missförhållandena för myndigheterna efter att ett konkurrerande företag betalade Ob3T6 × 5.000 euro i belöning (höj startkapital med denna summa). Anteckna en företagschef som fiende med 1T6+12 resurser. Välj en annan sysselsättning nästa period.", modifiers: [{ type: 'fiende', title: 'VD', resources: '1T6+12' }, { type: 'startkapital', description: 'Sålt företagshemligheter', diceFormula: 'Ob3T6', multiplier: 5000 }] },
  { min: 34, max: 44, description: "Nedläggning. Rollpersonens företag gör nedskärningar och rollpersonen blir uppsagd. Nästa sysselsättningsperiod måste en annan sysselsättning väljas. En arbetsförmedlare hjälper rollpersonen (anteckna som kontakt med 3T6 resurser).", modifiers: [{ type: 'kontakt', title: 'Arbetsförmedlare', resources: '3T6' }] },
  { min: 45, max: 50, description: "Olycka. Rollpersonen har varit med om en allvarlig olycka där 1T6 arbetare dog. Företaget lade skulden på rollpersonen som är i rättgång. Blev dömd till fängelse (nästa sysselsättningsperiod måste göras i fängelse, 1T6 år). Anteckna försvarsadvokat som kontakt med 2T6+6 resurser.", modifiers: [{ type: 'kontakt', title: 'Advokat', resources: '2T6+6' }, { type: 'jail', reason: 'Arbetsolycka'}]  },
  { min: 51, max: 57, description: "Räddat direktör. Rollpersonen har räddat livet på en direktör då denne inspekterade verksamheten (anteckna som kontakt med 1T6+12 resurser). Rollpersonen fick dessutom en belöning på Ob3T6 × 1.000 euro.", modifiers: [{ type: 'kontakt', title: 'Direktör', resources: '1T6+12' }, { type: 'startkapital', description: 'Försäkring', diceFormula: 'Ob3T6', multiplier: 1000 }]  },
  { min: 58, max: 63, description: "Strejk. Rollpersonen har lett en omfattande strejk på arbetsplatsen, vilket lett till att arbetsgivaren tycker mycket illa om rollpersonen (nästa sysselsättningsperiod måste man välja någon annan sysselsättning). Anteckna en chef som fiende med 2T6+6 resurser. Rollpersonen blev intervjuad flera gånger i teve av en undersökande journalist. Öka Mediastatus dessutom med 1T6.", modifiers: [{ type: 'fiende', title: 'Företagschef', resources: '2T6+6' }, { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' }] },
  { min: 64, max: 70, description: "Utlandsflytt. Rollpersonens företag har blivit uppköpt av en stor utländsk företagskoncern. Produktionen flyttas utomlands och rollpersonen följer med. Spelaren väljer vilket land flytten går till. Rollpersonen får 1T6+2 enheter för att höja det språk som talas i det nya landet.",  modifiers: [{ type: 'skill_distribution', allowedSkills: ['Språk'], description: 'Utlandsflytt', diceFormula: '1T6+2' }] },
  { min: 71, max: 80, description: "Övertid. Rollpersonen har jobbat mycket övertid. Höj startkapitalet med Ob3T6 × 500 euro. Stressen ger dock rollpersonen 1T6 psykoskryss.", modifiers: [{ type: 'startkapital', description: 'Övertid', diceFormula: 'Ob3T6', multiplier: 500 }] },
  { min: 81, max: 100, description: "Annan händelse. Slå ett slag på den allmänna händelsetabellen (tabell N2:22).", modifiers: [{type: 'redirect', table: 'generalEvents' }]  }
]

export const affarsmanCareerEvents = [
  { min: 1, max: 6, description: "Beskyddad. Rollpersonen tvingas betala för beskydd av maffian. Minska startkapitalet med 1T6 × 1.000 euro. Maffian anser dock att detta är för lite så rollpersonen har flera gånger hotats/utpressats av en torped (anteckna som fiende med 1T6+10 resurser).",
    modifiers: [
      { type: 'startkapital', description: 'Beskydd', diceFormula: '1T6', multiplier: -1000 }, 
      { type: 'fiende', title: 'Torped', resources: '1T6+10' }
    ]
   },
  { min: 7, max: 12, description: "Dålig affär. Rollpersonen har gjort en riktigt dålig affär. Minska startkapital med Ob3T6 × 10.000 euro. Rollpersonen träffade dock en halvsuspekt finansman som såg till att rollpersonen kunde göra ordentliga förlustavdrag (anteckna som kontakt med 2T6+12 resurser). Öka startkapitalet med 3T6 × 10.000 euro.",
    modifiers: [
      { type: 'startkapital', description: 'Dålig affär', diceFormula: 'Ob3T6', multiplier: -10000 }, 
      { type: 'kontakt', title: 'Finansman', resources: '2T6+12' },
      { type: 'startkapital', description: 'Förlustavdrag', diceFormula: 'Ob3T6', multiplier: 10000 }
    ]
   },
  { min: 13, max: 21, description: "Konkurs. Rollpersonens firma har gått i konkurs. Sänk startkapital med Ob3T6 × 1.000 euro. Rollpersonen har näringsförbud och får inte fortsätta som affärsman nästa sysselsättningsperiod.",
    modifiers: [
      { type: 'startkapital', description: 'Dålig affär', diceFormula: 'Ob3T6', multiplier: -1000 }, 
      { type: 'fired', reason: 'Näringsförbud' }
    ]
   },
  { min: 22, max: 29, description: "Kontraband. Rollpersonen har med hjälp av en korrupt tulltjänsteman (anteckna som kontakt med 2T6+6 resurser) smugglat varor genom tullen. Slå 1T6 för att se vad det är för typ av varor: 1 vapen, 2 droger, 3 sprit, 4 cigaretter, 5 piratkopior, 6 utrotningshotade djur. Öka startkapitalet med Ob3T6 × 10.000 euro.",
    modifiers: [
      { type: 'startkapital', description: 'Dålig affär', diceFormula: 'Ob3T6', multiplier: 10000 }, 
      { type: 'kontakt', title: 'Korrupt tulltjänsteman', resources: '2T6+6' }
    ]
   },
  { min: 30, max: 38, description: "Marknadsföring. Rollpersonen har anlitat en skicklig marknadsförare (anteckna som kontakt med 2T6+6 resurser) som ordnat mycket reklam för rollpersonens företag i teve och media. Höj rollpersonens Mediastatus med 1T6.",
    modifiers: [
      { type: 'kontakt', title: 'Marknadsförare', resources: '2T6+6' },
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' },
    ]
   },
  { min: 39, max: 45, description: "Mycket lyckad affär. Rollpersonen har tack vare en affärsutvecklingskonsult lyckats göra flera mycket lyckade affärer (anteckna som kontakt med 2T6+12 resurser). Höj startkapital med Ob3T6 × 10.000 euro.",
    modifiers: [
      { type: 'startkapital', description: 'Lyckad affär', diceFormula: 'Ob3T6', multiplier: 10000 }, 
      { type: 'kontakt', title: 'Afärrsutvecklare', resources: '2T6+12' },
    ]
   },
  { min: 46, max: 51, description: "Rån. Rollpersonen har blivit utsatt för ett grovt rån. Sänk startkapital med Ob3T6 × 500 euro. Efter rånet anlitade rollpersonen en vakt (anteckna som kontakt med 2T6+6 resurser).",
    modifiers: [
      { type: 'startkapital', description: 'Grovt rån', diceFormula: 'Ob3T6', multiplier: -500 }, 
      { type: 'kontakt', title: 'Vakt', resources: '2T6+6' }
    ]
   },
  { min: 52, max: 58, description: "Skattebrott. Rollpersonen har blivit dömd för grova skattebrott och tvingas sitta i fängelse (nästa sysselsättningsperiod måste göras i Fängelse, 1T6 år). Minska startkapital med Ob3T6 × 500 euro. Anteckna försvarsadvokat som kontakt med 2T6+6 resurser.",
    modifiers: [
      { type: 'startkapital', description: 'Skattebrott', diceFormula: 'Ob3T6', multiplier: -500 }, 
      { type: 'kontakt', title: 'Försvarsadvokat', resources: '2T6+6' },
      { type: 'prison', title: 'Skattebrott' }
    ]
   },
  { min: 59, max: 65, description: "Stämning. Rollpersonen har blivit stämd av en missnöjd kund (anteckna som fiende med 3T6 resurser). En affärsjurist lyckades lösa tvisten utan att rollpersonen behövde betala någon kompensation. Arvodet till advokaten gör dock att startkapital minskar med 1T6 × 1.000 euro.",
    modifiers: [
      { type: 'startkapital', description: 'Skattebrott', diceFormula: '1T6', multiplier: -1000 }, 
      { type: 'fiende', title: 'Missnöjd kund', resources: '3T6' }
    ]
  },
  { min: 66, max: 71, description: "Stöldgods. Rollpersonen har gjort en del affärer med en halare. Då polisen kom på affärerna så avslöjade rollpersonen allt om hälaren (anteckna som fiende med 3T6 resurser). Rollpersonen fick villkorlig dom, men finns i polisens brottsregister.",
     modifiers: [
      { type: 'fiende', title: 'Hälare', resources: '3T6' },
      { type: 'brottsregister', value: true }
    ]
   },
  { min: 72, max: 80, description: "Utlandsaffärer. Rollpersonen har rest en del utomlands och gjort affärer med en utländsk affärsman (anteckna som kontakt med 2T6+6 resurser). Rollpersonen får dessutom 1T6+2 enheter för att höja valfri språkfärdighet.",
    modifiers: [
      { type: 'kontakt', title: 'Utländsk affärsman', resources: '2T6+6' },
      { type: 'skill_distribution', allowedSkills: ['Språk'], description: 'Affärsresor', diceFormula: '1T6+2' }
    ]
   },
  { min: 81, max: 100, description: "Annan händelse. Slå ett slag på den allmänna händelsetabellen (tabell N2:22).", 
    modifiers: [{type: 'redirect', table: 'generalEvents' }] 
  }
]

export const artistCareerEvents = [
  { min: 1, max: 8, description: "Beundrare. Rollpersonen omges av ett antal groupies (anteckna som kontakt med 3T6 resurser). Mediastatus ökar med två (+2) och Cool med två (+2).", modifiers: [{ type: 'kontakt', title: 'Groupies', resources: '3T6' },  { type: 'secondary_attribute', name: 'Mediastatus', value: 2 },  { type: 'secondary_attribute', name: 'Cool', value: 2 }] },
  { min: 9, max: 13, description: "Flopp. Rollpersonen gjorde en satsning på en egenfinansierad produktion tillsammans med en producent (anteckna som fiende med 2T6+6 resurser). Releasen blev en flopp. Minska därför startkapitalet med Ob3T6 × 10.000 euro.", modifiers: [{ type: 'startkapital', description: 'Floppad release', diceFormula: 'Ob3T6', multiplier: -10000 }, { type: 'fiende', title: 'Producent', resources: '2T6+6' }] },
  { min: 14, max: 17, description: "Merchandizing. Rollpersonen har blivit ett enda stort reklamjippo, det säljs massor med prylar som pryds av rollpersonens namn. Öka rollpersonens startkapital med Ob3T6 × 10.000 euro. Mediastatus ökar med 1T6+3.", modifiers: [{ type: 'startkapital', description: 'Merchandising', diceFormula: 'Ob3T6', multiplier: 10000 },{ type: 'secondary_attribute', name: 'Mediastatus', value: '1T6+3' }] },
  { min: 18, max: 24, description: "Paparazzi. Rollpersonen har blivit avslöjad i en pinsam situation. Öka Mediastatus med två (+2). Rollpersonen anlitade en advokat (anteckna som kontakt med 1T6+12 resurser) och lyckades stämma fotografen på Ob3T6 × 10.000 euro (anteckna som fiende med 3T6 resurser).", 
    modifiers: [
      { type: 'startkapital', description: 'Stämning', diceFormula: 'Ob3T6', multiplier: 10000 }, 
      { type: 'secondary_attribute', name: 'Mediastatus', value: 2 },
      { type: 'kontakt', title: 'Advokat', resources: '1T6+12' }
    ]
  },
  { min: 25, max: 28, description: "Prisad. Rollpersonen tillhör den utvalda skaran av aktörer som vunnit det stora priset (det kan vara en Oscar, Emmy eller liknande). Öka rollpersonens Mediastatus med 2T6+3.", 
    modifiers: [
      { type: 'secondary_attribute', name: 'Mediastatus', value: '2T6+3' },
    ] 
  },
  { min: 29, max: 37, description: "Reklamkontrakt. Rollpersonen har fått ett fördelaktigt reklamkontrakt vilket ökar startkapitalet med Ob3T6 × 10.000 euro. Rollpersonens Mediastatus ökar med 1T6+2. Anteckna en PR-man som kontakt med 1T6+12 resurser.",
    modifiers: [
      { type: 'startkapital', description: 'Reklamkontrakt', diceFormula: 'Ob3T6', multiplier: 10000 }, 
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6+2' },
      { type: 'kontakt', title: 'PR-Man', resources: '1T6+12' }
    ] },
  { min: 38, max: 44, description: "Skandal. Rollpersonen har blivit upptäckt i en oerhört skandalös situation vilket gör att hela rollpersonens karriär står på spel. Rollpersonen måste betala en PR-agent för att nyansera situationen och undvika rättgång. Minska rollpersonens startkapital med Ob3T6 × 5.000 euro.",
    modifiers: [
      { type: 'startkapital', description: 'Reklamkontrakt', diceFormula: 'Ob3T6', multiplier: -5000 }
    ] },
  { min: 45, max: 50, description: "Skönhetsoperation. Rollpersonen har genomfört ett antal skönhetsoperationer och ser numera nästan tio år yngre ut. Öka rollpersonens PER med två (+2). Minska rollpersonens startkapital med Ob2T6 × 1.000 euro. Anteckna plastikkirurg som kontakt med 2T6+10 resurser.",
    modifiers: [
      { type: 'attribute', target: 'PER', amount: 2, description: 'Plastikkirurgi' },
      { type: 'startkapital', description: 'Reklamkontrakt', diceFormula: 'Ob2T6', multiplier: -2000 },
      { type: 'kontakt', title: 'Plastikkirurg', resources: '2T6+10' }
    ] },
  { min: 51, max: 62, description: "Lurad. Rollpersonen har lyckats göra en hit (öka Mediastatus med 2T6). Tyvärr blev rollpersonen lurad av sin manager och fick därför inga pengar.",
    modifiers: [
      { type: 'secondary_attribute', name: 'Mediastatus', value: '2T6' }
    ] },
  { min: 63, max: 71, description: "Utbränd. Rollpersonen har arbetat alldeles för hårt, stressat och levt ett mycket påfrestande liv. Rollpersonen beslutade sig för att sluta som artist trots sin agents ihärdiga protester och hot om stämning (anteckna som fiende med 2T6+10 resurser). Rollpersonen måste välja en annan sysselsättning nästa sysselsättningsperiod. Rollpersonen får dessutom 1T6 psykoskryss.", 
    modifiers: [
      { type: 'kontakt', title: 'Agent', resources: '2T6+10' }
    ] },
  { min: 72, max: 80, description: "Överdos. Rollpersonen har tagit en överdos av en drog som rollpersonen är beroende av. Beroendegraden för drogen är 2T6. Överdosen höll på att kosta rollpersonen livet, men efter akut läkarvård och en längre tid på behandlingshem så kan rollpersonen återvända. Minska startkapitalet med Ob3T6 × 5.000 euro.",
    modifiers: [
      { type: 'startkapital', description: 'Drogberoende', diceFormula: 'Ob3T6', multiplier: -5000 },
    ] },
  { min: 81, max: 100, description: "Annan händelse. Slå ett slag på den allmänna händelsetabellen (tabell N2:22).",  modifiers: [{type: 'redirect', table: 'generalEvents' }] }
]


export const foretagsmanCareerEvents = [
  { min: 1, max: 8, description: "Affärsresor. Rollpersonen har gjort flera längre utlandsresor för företaget. Därför får rollpersonen 2T6 enheter för att höja en valfri språkfärdighet. Anteckna en utländsk hotellreceptionist som kontakt med 2T6+3 resurser.",
    modifiers: [
      { type: 'kontakt', title: 'Hotellreceptionist', resources: '2T6+3' },
      { type: 'skill_distribution', allowedSkills: ['Språk'], description: 'Affärsresor', diceFormula: '2T6' }
    ]
  },
  { min: 9, max: 17, description: "Avslöjanden. Rollpersonen har avslöjat oegentligheter inom företaget. Slå 1T6 för att avgöra vad: 1 illegala affärsmetoder, 2 skattebrott, 3 hot mot fackföreningar, 4 miljöbrott, 5 illegal konkurrensbegränsning, 6 mutor. Anteckna en undersökande journalist som kontakt med 2T6+6 resurser och en hög direktör som fiende med 1T6+18 resurser. Rollpersonen blev sparkad (nästa period måste en annan sysselsättning väljas). Höj dessutom rollpersonens Mediastatus med 1T6.",
    modifiers: [
      { type: 'kontakt', title: 'Undersökande journalist', resources: '2T6+6' },
      { type: 'fiende', title: 'Hög direktör', resources: '1T6+18' },
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' },
      { type: 'fired', reason: 'Avslöjande oegentligheter' }
    ]
   },
  { min: 18, max: 26, description: "Befordrad. Rollpersonen har informerat en hög direktör om sin chefs illojalitet gentemot ledningen. Chefen blev sparkad och rollpersonen blev befordrad. Höj rollpersonens befattningsgrad med en nivå. Anteckna en arbetslös företagsman som fiende med 1T6+18 resurser.",
     modifiers: [
      { type: 'fiende', title: 'Företagsman', resources: '1T6+18' },
      { type: 'promoted', reason: 'Avslöjande oegentligheter' }
    ]
   },
  { min: 27, max: 35, description: "Degraderad. Rollpersonens misslyckas slutföra en viktig affär och hans överordnad blir så förbannad så han degraderar rollpersonen (anteckna som fiende med 2T6+12 resurser). Sänk rollpersonens befattningsgrad med en nivå (dock lägst till assistent).",
    modifiers: [
      { type: 'fiende', title: 'Chef', resources: '2T6+12' },
      { type: 'demoted', reason: 'Avslöjande oegentligheter' }
    ]
   },
  { min: 36, max: 44, description: "Förskingring. Rollpersonen har lyckats skaffa sig ett hemligt nummerkonto i Schweiz där han lyckats smussla undan Ob3T6 × 5.000 euro i skyddat startkapital. Detta kapital påverkas inte av konfiskeringar eller konkurser och andra startkapitalsminskningar. Anteckna en schweizisk bankir som kontakt med 2T6+12 resurser.",
    modifiers: [
      { type: 'kontakt', title: 'Schweizisk bankir', resources: '2T6+12' },
      { type: 'startkapital', description: 'Förskingring', diceFormula: 'Ob3T6', multiplier: 5000 }
    ]
   },
  { min: 45, max: 53, description: "Insideraffär. Rollpersonen har använt sig av information inom företaget för att tjäna pengar på aktier. Öka rollpersonens startkapital med Ob3T6 × 100.000 euro. Anteckna en aktiemäklare som kontakt med 2T6+12 resurser. Rollpersonen har dock blivit avslöjad av finansinspektionen och dömd till 1T6 år i fängelse (nästa sysselsättningsperiod måste vara i Fängelse).",
    modifiers: [
      { type: 'kontakt', title: 'Aktiemäklare', resources: '2T6+12' },
      { type: 'startkapital', description: 'Förskingring', diceFormula: 'Ob3T6', multiplier: 100000 },
      { type: 'prison', reason: 'Insideraffärer' }
    ]
   },
  { min: 54, max: 62, description: "Kickbacks. Rollpersonen har fått mutor för att en leverantör skall få sälja till rollpersonens företag. Öka rollpersonens startkapital med Ob3T6 × 2.000 euro. Anteckna en säljare på ett annat megaföretag som en kontakt med 2T6+12 resurser.",
    modifiers: [
      { type: 'kontakt', title: 'Säljare', resources: '2T6+12' },
      { type: 'startkapital', description: 'Kickbacks', diceFormula: 'Ob3T6', multiplier: 2000 }
    ]
   },
  { min: 63, max: 71, description: "Utbränd. Rollpersonen har arbetat mycket över tid och haft en mycket stressig arbetssituation. Efter djupa samtal med företagsläkaren (anteckna som kontakt med 2T6+8 resurser) så har rollpersonen beslutat sig för att säga upp sig (rollpersonen måste välja en annan sysselsättning nästa sysselsättningsperiod). Rollpersonen får dessutom 1T6 psykoskryss.",
    modifiers: [
      { type: 'kontakt', title: 'Företagsläkare', resources: '2T6+8' },
      { type: 'fired', reason: 'Utbränd' },
    ]
   },
  { min: 72, max: 80, description: "Värvad. Rollpersonen har blivit värvad av en headhunter från ett annat megaföretag (anteckna som kontakt med 2T6+10 resurser). Rollpersonen byter företag och får dessutom en premie på Ob3T6 × 2.000 euro.",
    modifiers: [
      { type: 'kontakt', title: 'Chef på megaföretag', resources: '2T6+10' },
      { type: 'startkapital', description: 'Premie', diceFormula: 'Ob3T6', multiplier: 2000 }
    ]
  },
  { min: 81, max: 100, description: "Annan händelse. Slå ett slag på den allmänna händelsetabellen (tabell N2:22).",
    modifiers: [{type: 'redirect', table: 'generalEvents' }]
  }
]

export const gangsterCareerEvents = [
  { min: 1, max: 6, description: "Beskydd. Rollpersonen har gjort sig förtjänt av beskyddarpengar då rollpersonen räddat en mindre spelklubb vid ett rån (anteckna som kontakt med 2T6+6 resurser). Höj startkapitalet med Ob3T6 × 1.000 euro.",
    modifiers: [
      { type: 'kontakt', title: 'Spelklubbschef', resources: '2T6+6' },
      { type: 'startkapital', description: 'Beskyddarverksamhet', diceFormula: 'Ob3T6', multiplier: 1000 }
    ]
   },
  { min: 7, max: 14, description: "Blodbad. Rollpersonen har varit med om en mycket blodig sammandrabbning med en rivaliserande brottsorganisation. Använd 1T6+1 enheter för att höja Stridsvana. Rollpersonens får 2T6 psykoskryss. Den andra organisationens boss är ute efter hämnd (anteckna som fiende med 2T6+12 resurser).",
    modifiers: [
      { type: 'fiende', title: 'Gangsterboss', resources: '2T6+12' },
      { type: 'skill_distribution', allowedSkills: ['Stridsvana'], description: 'Blodig uppgörelse', diceFormula: '1T6+1' }
    ]
   },
  { min: 15, max: 22, description: "Lyckad kupp. Rollpersonen har deltagit i en lyckad kupp. Öka startkapitalet med Ob3T6 × 10.000 euro. Rollpersonen 'investerade' en stor del av pengarna på en innekrog och lärde känna en bartender (anteckna som kontakt med 2T6+6 resurser).",
    modifiers: [
      { type: 'kontakt', title: 'Bartender', resources: '2T6+6' },
      { type: 'startkapital', description: 'Lyckad kupp', diceFormula: 'Ob3T6', multiplier: 10000 }
    ]    
   },
  { min: 23, max: 28, description: "Muta. Rollpersonen har skött utbetalningarna av mutor till en korrupterad polis (anteckna som kontakt med 2T6+6 resurser).",
    modifiers: [
      { type: 'kontakt', title: 'Polis', resources: '2T6+6' }
    ] 
   },
  { min: 29, max: 35, description: "Märkt. Rollpersonen har varit med i duell med en gangster från ett rivaliserande brottsorganisation. Motståndaren blev invaliderad (anteckna som fiende med 3T6 resurser). Rollpersonen klarade sig undan med ett fult ärr i ansiktet (minska PER med två (–2)).",
    modifiers: [
      { type: 'fiende', title: 'Gangster', resources: '3T6' },
      { type: 'attribute', target: 'PER', amount: -2 }
    ] 
   },
  { min: 36, max: 41, description: "Mördare. Rollpersonen åker fast för ett mord. Nästa sysselsättningsperiod måste spenderas i Fängelse, 2T6+6 år. Försvarsadvokaten anser dock att rollpersonen är oskyldig (anteckna som kontakt med 2T6+6 resurser), men det gör inte änkan (anteckna som fiende med 3T6 resurser).",
     modifiers: [
      { type: 'prison', reason: 'Mord' },
      { type: 'fiende', title: 'Änka', resources: '3T6' },
      { type: 'kontakt', title: 'Försvarsadvokat', resources: '2T6+6' }
    ] 
   },
  { min: 42, max: 47, description: "Räddat boss. Rollpersonen har räddat sin boss under ett bakhåll (anteckna som kontakt med 2T6+12 resurser).",
     modifiers: [
      { type: 'kontakt', title: 'Maffiaboss', resources: '2T6+12' }
    ] 
   },
  { min: 48, max: 53, description: "Syndabock. Rollpersonen har fått skulden för en misslyckad kupp och åker i fängelse. Nästa sysselsättningsperiod måste spenderas i Fängelse, 1T6 år.",
     modifiers: [
      { type: 'prison', reason: 'Syndabock' }
    ] 
   },
  { min: 54, max: 60, description: "Tagen på bar gärning. Rollpersonen blev tagen på bar gärning. Nästa sysselsättningsperiod måste spenderas i Fängelse, 2T6 år.",
     modifiers: [
      { type: 'prison', reason: 'Tagen på bar gärning' }
    ] 
   },
  { min: 61, max: 66, description: "Tjallare. Rollpersonen har avslöjat information till polisen. Rollpersonen stryks ur brottsregistret, eventuellt negativt startkapital höjs till noll samt att rollpersonen får en ny identitet. Spelaren måste välja ett nytt namn åt rollpersonen. Nästa sysselsättningsperiod måste en annan sysselsättning väljas. Anteckna prisjägare som fiende med 2T6+10 resurser.",
     modifiers: [
      { type: 'brottsregister', value: false },
      { type: 'fired', reason: 'Tjallare' },
      { type: 'fiende', title: 'Maffiaboss', resources: '2T6+10' }
    ]
   },
  { min: 67, max: 74, description: "Uppoffring. Rollpersonen har tagit på sig skulden för ett brott som rollpersonens boss är skyldig till (anteckna som kontakt med 1T6+14 resurser). Rollpersonen åker i fängelse fem år Ob3T6 × 2.000 euro som ersättning för sin uppoffring. Nästa sysselsättningsperiod måste spenderas i Fängelse i 1T6 år (däremot kan rollpersonen bli gangstere efter fängelsevistelsen — om det finns en sysselsättningsperiod kvar till sig).",
     modifiers: [
      { type: 'prison', reason: 'Uppofring' },
      { type: 'fiende', title: 'Maffiaboss', resources: '1T6+14' },
      { type: 'startkapital', description: 'Lyckad kupp', diceFormula: 'Ob3T6', multiplier: 2000 }
    ]
   },
  { min: 75, max: 80, description: "Utlandskontakt. Rollpersonen har under en längre tid varit organisationens utlandskontakt i ett främmande land. Rollpersonen har därför 2T6 enheter för att höja en valfri språkfärdighet.",
    modifiers: [
      { type: 'skill_distribution', allowedSkills: ['Språk'], description: 'Utlandsvistelse', diceFormula: '2T6' }
    ]
   },
  { min: 81, max: 100, description: "Slå på den allmänna händelsetabellen (tabell N2-22).",
    modifiers: [{type: 'redirect', table: 'generalEvents' }]
   }
]

export const gangmedlemCareerEvents = [
  { min: 1, max: 7, description: "Drive-by. Rollpersonen blir har använts för att skjuta ner flera medlemmar ur ett rivaliserande gäng. Det andra gängets ledare är ute efter hämnd (anteckna som fiende med 3T6 resurser).",
    modifiers: [
      { type: 'fiende', title: 'Gängledare', resources: '3T6' },
    ]
   },
  { min: 8, max: 12, description: "Drogmissbruk. Rollpersonen har börjat ta droger. Beroendegraden för drogen är 2T6. Minska startkapitalet med Ob3T6 × 100 euro. Anteckna en knarklangare som kontakt med 2T6+6 resurser.",
     modifiers: [
      { type: 'startkapital', description: 'Drogmissbruk', diceFormula: 'Ob3T6', multiplier: -100 },
      { type: 'kontakt', title: 'Knarklangare', resources: '2T6+6' },
    ]
   },
  { min: 13, max: 18, description: "Dödsmisshandel. Rollpersonen har blivit gripen och dömd för ett mord. Nästa sysselsättningsperiod måste spenderas i Fängelse, 2T6 år. Försvarsadvokaten anser dock att rollpersonen är oskyldig (anteckna som kontakt med 2T6+6 resurser), men det gör inte den mördades änka (anteckna som fiende 3T6 resurser).",
    modifiers: [
      { type: 'prison', reason: 'Mord' },
      { type: 'fiende', title: 'Änka', resources: '3T6' },
      { type: 'kontakt', title: 'Försvarsadvokat', resources: '2T6+6' }
    ] 
   },
  { min: 19, max: 23, description: "Eldstrid. Rollpersonen har blivit jagad av polisen vilket slutade i en eldstrid. En av poliserna blev invaliderad (anteckna som fiende med 3T6 resurser). Nästa sysselsättningsperiod måste spenderas i Fängelse, 3T6 år.",
    modifiers: [
      { type: 'prison', reason: 'Eldstrid' },
      { type: 'fiende', title: 'Polis', resources: '3T6' },
    ] 
   },
  { min: 24, max: 32, description: "Graffiti. Rollpersonen är en känd graffitimålare. Använd 1T6+2 enheter för att öka färdigheten Design. Rollpersonen har blivit tagen av polisen flera gånger och finns nu med i brottsregistret.",
    modifiers: [
      { type: 'skill_distribution', allowedSkills: ['Design'], description: 'Grafitti', diceFormula: '1T6+2' },
      { type: 'brottsregister', value: false }
    ]
   },
  { min: 33, max: 42, description: "Gängkrig. Rollpersonen har varit med om en mycket blodig sammandrabbning med en rivaliserande gäng. Använd 1T6+1 enheter för att höja Stridsvana. Dessutom rollpersonens får 1T6 psykoskryss. En gängmedlem dog och det föll på rollpersonens lott att trösta dennes flickvän (anteckna som kontakt med 3T6 resurser).",
     modifiers: [
      { type: 'kontakt', title: 'Änka', resources: '3T6' },
      { type: 'skill_distribution', allowedSkills: ['Stridsvana'], description: 'Gängkrig', diceFormula: '1T6+1' }
    ]
   },
  { min: 43, max: 49, description: "Hälare. Rollpersonen har sålt en mängd stulna prylar till en hälare som nu känner rollpersonen väl (anteckna som kontakt med 2T6+6 resurser).",
    modifiers: [
      { type: 'kontakt', title: 'Hälare', resources: '2T6+6' }
    ]
   },
  { min: 50, max: 56, description: "Lyckad stöt. Rollpersonen och dennes gäng har lyckats lura en narkotikasmugglare på ett stort parti narkotika. Rollpersonens startkapital ökar med Ob3T6 × 1.000 euro. Anteckna en knarksmugglare som fiende med 2T6+10 resurser.",
    modifiers: [
      { type: 'fiende', title: 'Knarksmugglare', resources: '2T6+10' },
      { type: 'startkapital', description: 'Lyckad stöt', diceFormula: 'Ob3T6', multiplier: 1000 }
    ]
   },
  { min: 57, max: 64, description: "Olagligt innehav. Efter en polisrazzia blev rollpersonen avslöjad med ett innehav av olagliga varor. Slå 1T6 för att avgöra vad: 1 narkotika, 2 olagliga vapen, 3 stulen bil, 4 stöldgods, 5 piratkopior, 6 olaglig cyberelektronik. Rollpersonen blev dömd till fängelse. Nästa sysselsättningsperiod måste spenderas i Fängelse, 1T6 år.",
    modifiers: [
      { type: 'prison', reason: 'Olagligt innehav' },
    ] 
   },
  { min: 65, max: 73, description: "Duell. Rollpersonen har deltagit i en duell med ledaren för ett rivaliserande gäng. Slå 1T6 för att avgör vilken typ av duell det var: 1 chicken race, 2 knivfight, 3 motorcykelrace, 4 graffitmåling, 5 slagsmål, 6 rysk roulett (motståndaren vågade inte). Rollpersonens vann över det andra gängets ledare och denne blev mycket förolämpad (anteckna som fiende med 3T6 resurser). Öka rollpersonens Cool med ett (+1).",
    modifiers: [
      { type: 'fiende', title: 'Gängledare', resources: '3T6' },
      { type: 'secondary_attribute', name: 'Cool', value: 1 }
    ]
   },
  { min: 74, max: 80, description: "Tjallare. Polisen har använt rollpersonen som informationskälla inom gänget. Öka startkapitalet med Ob3T6 × 1.000 euro. Anteckna en polis som kontakt med 2T6+6 resurser.",
    modifiers: [
      { type: 'kontakt', title: 'Polis', resources: '2T6+6' },
      { type: 'startkapital', description: 'Lyckad stöt', diceFormula: 'Ob3T6', multiplier: 1000 }
    ]
   },
  { min: 81, max: 100, description: "Slå på en händelsetabell. Se slå på den allmänna händelsetabellen (tabell N2-22).",
    modifiers: [{type: 'redirect', table: 'generalEvents' }]
   }
]

export const hackerCareerEvents = [
  { min: 1, max: 5, description: "Asocial. Rollpersonen har blivit extremt beroende av nätet. Om rollpersonen inte får surfa varje dygn får rollpersonen ett extra psykoskryss." },
  { min: 6, max: 15, description: "Avslöjande. Rollpersonen har brutit sig in i ett storföretags datorer och hittat bevis på företagets olagliga verksamhet. Slå 1T6 för att avgöra vad: 1 förbjudna varor, 2 skattebrott, 3 olaga hot, 4 miljöbrott, 5 illegal konkurrensbegränsning, 6 mutor. Informationen gav rollpersonen till en journalist (anteckna som kontakt med 2T6+6 resurser). Anteckna en säkerhetskonsult som fiende med 1T6+10. Höj startkapitalet med Ob3T6 × 1.000 euro och Mediastatus med 1T6.",
    modifiers: [
      { type: 'kontakt', title: 'Journalist', resources: '2T6+6' },
      { type: 'fiende', title: 'Säkerhetskonsult', resources: '1T6+10' },
      { type: 'startkapital', description: 'Arvode', diceFormula: 'Ob3T6', multiplier: 1000 },
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' }
    ]
  },
  { min: 16, max: 23, description: "Het info. Rollpersonen har av en händelse fått tag på information som han helst skulle vilja vara utan. En prisjägare försöker ta reda på vem som döljer sig bakom rollpersonens alias (anteckna som fiende med 2T6+6 resurser).",
     modifiers: [
      { type: 'fiende', title: 'Prisjägare', resources: '2T6+6' }
     ]
  },
  { min: 24, max: 32, description: "Hotad. Rollpersonen har efter diverse oegentligheter blivit hotad av en torped från ett säkerhetsföretag (anteckna som fiende med 2T6+8 resurser). Rollpersonen bestämde sig för att lägga av med hacking (nästa sysselsättningsperiod måste man välja en annan sysselsättning).",
      modifiers: [
        { type: 'fiende', title: 'Torped', resources: '2T6+8' },
        { type: 'fired', reason: 'Hotad av torped från säkerhetsföretag' }
      ]
  },
  { min: 33, max: 40, description: "Illegal kopiering. Rollpersonen har åkt fast för olaglig piratkopiering av en värdefull algoritm. Upphovsmannen lyckades dock inte få någon ersättning (anteckna som fiende med 2T6+6 resurser). Rollpersonen måste tillbringa nästa sysselsättningsperiod i Fängelse, 1T6 år.",
      modifiers: [
        { type: 'fiende', title: 'Upphovsman till algoritm', resources: '2T6+6' },
        { type: 'prison', reason: 'Piratkopiering' }
      ]
  },
  { min: 41, max: 46, description: "Kontokortsbedrägeri. Rollpersonen har genomfört ett bedrägeri och fått ett bankkonto. Höj startkapitalet med Ob3T6 × 100.000 euro. Anteckna en banksäkerhetsman som fiende med 1T6+10 resurser (denna fiende aktiveras inte förrän rollpersonen börjar använda bankkontot).",
      modifiers: [
        { type: 'fiende', title: 'Säkerhetsman på bank', resources: '1T6+10' },
        { type: 'startkapital', description: 'Kontokortsbedrägeri', diceFormula: 'Ob3T6', multiplier: 100000 }
      ]
  },
  { min: 47, max: 55, description: "Kändis. Rollpersonen har brutit sig in i ett ytterst avancerat datasystem och lämnat sitt signum. Öka Mediastatus med fyra (+4), detta är dock under rollpersonens alias ('hackernamn').",
     modifiers: [
      { type: 'secondary_attribute', name: 'Mediastatus', value: 4 }
    ]
  },
  { min: 56, max: 63, description: "Lamer. Rollpersonen har mot betalning lärt upp en nybörjare från överklassen. Anteckna en rik lamer som kontakt med 1T6+12 resurser. Höj startkapitalet med Ob3T6 × 1.000 euro.",
    modifiers: [
        { type: 'kontakt', title: 'Rik lamer', resources: '1T6+12' },
        { type: 'startkapital', description: 'Upplärning av lamer', diceFormula: 'Ob3T6', multiplier: 1000 }
      ]
  },
  { min: 64, max: 67, description: "Nattuggla. Rollpersonen är beroende av en stimulerande drog som gör att han orkar sitta uppe på nätterna. Beroendegraden för drogen är 2T6. Minska startkapitalet med Ob3T6 × 100 euro. Anteckna en knarklangare som kontakt med 3T6 resurser.",
    modifiers: [
        { type: 'kontakt', title: 'Knarklangare', resources: '3T6' },
        { type: 'startkapital', description: 'Drogberoende', diceFormula: 'Ob3T6', multiplier: -100 }
      ]
  },
  { min: 68, max: 76, description: "Wilson. Rollpersonen har försökt bryta sig in i ett datasystem, men klantade till det ordentligt. Rollpersonen blev arresterad och dömd för dataintrång. Rollpersonen måste tillbringa nästa sysselsättningsperiod i Fängelse, 1T6 år.",
    modifiers: [
        { type: 'prison', reason: 'Hacking' }
      ]
  },
  { min: 77, max: 80, description: "Voodoo. Rollpersonen tror att det finns en AI som intresserar sig för vad rollpersonen gör på nätet (anteckna som kontakt med 1T6+12 resurser). Exakt vad AIn vill är ännu okänt.",
    modifiers: [
        { type: 'kontakt', title: 'AI', resources: '1T6+12' }
      ]
  },
  { min: 81, max: 100, description: "Annan händelse. Slå ett slag på den allmänna händelsetabellen (tabell N2-22).",
    modifiers: [{type: 'redirect', table: 'generalEvents' }]
  }
]

export const kriminellCareerEvents = [
  { min: 1, max: 7, description: "Avslöjad i media. En journalist har avslöjat rollpersonen som blev dömd till fängelse. Nästa sysselsättningsperiod måste spenderas i Fängelse, 1T6 år. Öka Mediastatus med 1T6.",
    modifiers: [
      { type: 'prison', reason: 'Avslöjad' },
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' }
    ]
  },
  { min: 8, max: 12, description: "Avslöjande bevis. Rollpersonen har kommit över bevis mot en korrupt politiker (anteckna som fiende med 1T6+12 resurser). Eftersom rollpersonen gömt bevismaterialet så vågar politikern inte göra något mot rollpersonen. Rollpersonen har lyckats pressa politikern på pengar. Öka därför startkapitalet med Ob3T6 × 10.000 euro.",
    modifiers: [
      { type: 'fiende', title: 'Korrupt politiker', resources: '1T6+12' },
      { type: 'startkapital', description: 'Utpressning', diceFormula: 'Ob3T6', multiplier: 10000 }
    ]
  },
  { min: 13, max: 19, description: "Beskyddad. Rollpersonen tvingas betala maffian för beskydd. Minska startkapitalet med Ob3T6 × 1.000 euro. Maffian anser dock att detta är för lite så rollpersonen har flera gånger besökts av en torped (anteckna som fiende med 1T6+10 resurser).",
    modifiers: [
      { type: 'fiende', title: 'Maffiatorped', resources: '1T6+10' },
      { type: 'startkapital', description: 'Beskyddad', diceFormula: 'Ob3T6', multiplier: -1000 }
    ]
  },
  { min: 20, max: 26, description: "Blåst. Rollpersonen blir blåst av en kumpan. Rollpersonens startkapital minskar med Ob3T6 × 10.000 euro. Som hämnd tjallade rollpersonen på kumpanen som åkte i fängelse (anteckna som fiende med 3T6 resurser).",
    modifiers: [
      { type: 'fiende', title: 'Kriminell', resources: '3T6' },
      { type: 'startkapital', description: 'Blåst', diceFormula: 'Ob3T6', multiplier: -10000 }
    ]
  },
  { min: 27, max: 33, description: "Callgirl. Rollpersonen samarbetar med en lyxprostituerad för att komma över information som kan användas för kriminell verksamhet (anteckna som kontakt med 2T6+6 resurser).",
    modifiers: [
      { type: 'kontakt', title: 'Lyxprostituerad', resources: '2T6+6' },
    ]
  },
  { min: 34, max: 38, description: "Drogmissbruk. Rollpersonen har börjat ta droger. Beroendegraden för drogen är 2T6. Minska startkapitalet med Ob3T6 × 100 euro. Anteckna en knarklangare som kontakt med 2T6+6 resurser.",
    modifiers: [
      { type: 'kontakt', title: 'Knarklangare', resources: '2T6+6' },
      { type: 'startkapital', description: 'Drogberoende', diceFormula: 'Ob3T6', multiplier: -100 }
    ]
  },
  { min: 39, max: 45, description: "Eldstrid. Rollpersonen har blivit jagad av polisen vilket slutade i en eldstrid. En av poliserna blev invalidiserad (anteckna som fiende med 3T6 resurser). Nästa sysselsättningsperiod måste spenderas i Fängelse, 3T6 år.",
    modifiers: [
      { type: 'fiende', title: 'Polis', resources: '3T6' },
      { type: 'prison', reason: 'Eldstrid med polis' }
    ]
  },
  { min: 46, max: 52, description: "Falska ID-handlingar. Rollpersonen har fått en extra identitet av en skicklig förfalskare (anteckna som kontakt med 1T6+10 resurser). Spelaren måste hitta på ytterligare ett namn åt identiteten.",
    modifiers: [
      { type: 'kontakt', title: 'Förfalskare', resources: '1T6+10' }
    ]
  },
  { min: 53, max: 59, description: "Korrupt polis. Rollpersonen har under lång tid mutat en kriminalpolis som ger rollpersonen viktig information (anteckna som kontakt med 2T6+6 resurser).",
    modifiers: [
      { type: 'kontakt', title: 'Korrupt polis', resources: '2T6+6' }
    ]
  },
  { min: 60, max: 66, description: "Lyckad stöt. Rollpersonen har genomfört en lyckad kupp. Öka startkapitalet med Ob3T6 × 10.000 euro. Rollpersonen 'investerade' en stor del av pengarna på en innekrog och lärde känna en bartender (anteckna som kontakt med 2T6+6 resurser).",
    modifiers: [
      { type: 'kontakt', title: 'Bartender', resources: '2T6+6' },
      { type: 'startkapital', description: 'Lyckad stöt', diceFormula: 'Ob3T6', multiplier: 10000 }
    ]
  },
  { min: 67, max: 73, description: "Stöldgods. Efter en polisrazzia blev rollpersonen avslöjad med ett innehav av stulna varor. Slå 1T6 för att avgöra vilken typ: 1 vapen, 2 datorer, 3 elektronik, 4 bilar, 5 programvara, 6 juveler. Gravearande bevis hittades och rollpersonen blev dömd till fängelse. Nästa sysselsättningsperiod måste spenderas i Fängelse, 1T6 år.",
    modifiers: [
      { type: 'prison', reason: 'Ertappad med stöldgods' }
    ]
  },
  { min: 74, max: 80, description: "Tagen på bar gärning. Rollpersonen blev tagen på bar gärning under ett rån eller en olaglig affär. Nästa sysselsättningsperiod måste därför spenderas i Fängelse, 1T6 år.",
    modifiers: [
      { type: 'prison', reason: 'Tagen på bar gärning under rån' }
    ]
  },
  { min: 81, max: 100, description: "Annan händelse. Slå ett slag på den allmänna händelsetabellen (tabell N2-22).",
    modifiers: [{type: 'redirect', table: 'generalEvents' }]
  }
]

export const mediaarbetareCareerEvents = [
  {
    min: 1,
    max: 11,
    description: "Förtal. Rollpersonen har producerat snaskiga skandalreportage om en känd person. Slå 1T6 för att avgöra vem det var: 1 popstjärna, 2 politiker, 3 playboy, 4 företagschef, 5 maffiaboss, 6 polischef. Anteckna denne person som fiende med 1T6+10 resurser. Rollpersonen tjänade dock en rejäl hacka och blev dessutom känd (slå: öka startkapitalet med Ob3T6 × 2.000 euro och höj Mediastatus med 1T6+1). Rollpersonen blev dock stämd och blev tvungen att betala ett stort skadestånd (sänk startkapitalet med Ob3T6 × 5.000 euro).",
    modifiers: [
      { type: 'startkapital', description: 'Skandalreportage', diceFormula: 'Ob3T6', multiplier: 2000 },
      { type: 'fiende', title: 'Kändis', resources: '1T6+10' },
      { type: 'startkapital', description: 'Skadestånd', diceFormula: 'Ob3T6', multiplier: -5000 },
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6+1' }
    ]
  },
  {
    min: 12,
    max: 15,
    description: "Grov ärekränkning. Förtal. Rollpersonen har producerat snaskiga skandalreportage om en känd person. Slå 1T6 för att avgöra vem det var: 1 popstjärna, 2 politiker, 3 playboy, 4 företagschef, 5 maffiaboss, 6 polischef. Dömd till fängelse istället för skadestånd (nästa sysselsättningsperiod måste rollpersonen tillbringa i Fängelse, 1T6 år).",
    modifiers: [
      { type: 'prison', reason: 'Grov ärekränkning' }
    ]
  },
  {
    min: 16,
    max: 25,
    description: "Hemlig källa. Rollpersonen har en hemlig källa som då och då läcker värdefull information. Slå 1T6 för att avgöra vem källan är: 1 politiker, 2 hög militär, 3 polischef, 4 hacker, 5 playboy, 6 maffiaboss. Anteckna som kontakt med 2T6+8 resurser.",
    modifiers: [
    { type: 'kontakt', title: 'Hemlig källa', resources: '2T6+8' }
    ]
  },
  {
    min: 26,
    max: 35,
    description: "Intermezoo. Rollpersonen har varit med om en uppslakande händelse. Slå 1T6 för att se vad som hände: 1 gisslandrama, 2 flygolycka, 3 naturkatastrof, 4 våldsamt upplopp, 5 lönnmord, 6 kidnappning. Rollpersonen får 1T6 psykosyrkss. Trots chocken så rapporterar rollpersonen om det inträffade. Höj Mediastatus med 1T6.",
    modifiers: [
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' }
    ]
  },
  {
    min: 36,
    max: 43,
    description: "Krigsrapportör. Rollpersonen har rapporterat från en oroshärd. Använd 1T6+1 enheter för att öka färdigheten Strategi, Stridsvana eller Taktik.",
    modifiers: [
      { type: 'skill_distribution', allowedSkills: ['Strategi', 'Stridsvana', 'Taktik'], description: 'Krigskorrespondent', diceFormula: '1T6+1' }
    ]
  },
  {
    min: 44,
    max: 53,
    description: "Opinionsbildare. Rollpersonen har i grova ordalag kritiserat landets president eller premiärminister (anteckna som fiende med 2T6+16 resurser). Rollpersonens politiska åsikter är dock populära bland en viss grupp. Slå 1T6 för att avgöra vilken grupp: 1 sociaa eliten, 2 underklassen, 3 militären, 4 näringslivet, 5 arbetslösa, 6 medelklassen. Öka Mediastatus med 1T6.",
    modifiers: [
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' }
    ]
  },
  {
    min: 54,
    max: 61,
    description: "Programledare. Rollpersonen har blivit en känd programledare för ett nyhetsprogram. Öka rollpersonens Mediastatus med 1T6. Anteckna en teveproducent som kontakt med 2T6+10 resurser. Öka rollpersonens startkapital med Ob3T6 × 10.000 euro.",
    modifiers: [
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' },
      { type: 'kontakt', title: 'TV-Producent', resources: '2T6+10' },
      { type: 'startkapital', description: 'Skadestånd', diceFormula: 'Ob3T6', multiplier: 10000 }
    ]
  },
  {
    min: 62,
    max: 71,
    description: "Scoop. Rollpersonen har gjort ett stort scoop och blivit känd för sin journalistiska skicklighet. Höj rollpersonens Mediastatus med 1T6. Öka dessutom rollpersonens startkapital med Ob3T6 × 1.000 euro.",
    modifiers: [
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' },
      { type: 'startkapital', description: 'Skadestånd', diceFormula: 'Ob3T6', multiplier: 1000 }
    ]
  },
  {
    min: 72,
    max: 77,
    description: "Tystad. Rollpersonen kom en viktig historia på spåren men blev tystad av hotfulla män som tog upp saken med rollpersonens överordnade. Rollpersonen blev avskedad (nästa period måste man välja en annan sysselsättning).",
    modifiers: [
      { type: 'fired', reason: 'Mörkläggning' }
    ]
  },
  {
    min: 78,
    max: 85,
    description: "Utrikeskorrespondent. Rollpersonen har varit korrespondent i ett främmande land. Använd 1T6+2 enheter för att höja ett valfritt språk.",
    modifiers: [ 
      { type: 'skill_distribution', allowedSkills: ['Språk'], description: 'Utrikeskorrespondent', diceFormula: '1T6+2' }
    ]
  },
  {
    min: 86,
    max: 100,
    description: "Annan händelse. Slå ett slag på den allmänna händelsetabellen (tabell N2-22).",
    modifiers: [{type: 'redirect', table: 'generalEvents' }]
  }
]

export const officerCareerEvents = [
  {
    min: 1,
    max: 5,
    description: "Atombombad. Rollpersonen får medalj efter att ha blivit drabbad av radioaktivitet i samband med en kärnvapenattack. Anteckna en strålskada på 1T6 Tgr."
  },
  {
    min: 6,
    max: 13,
    description: "Hjältedåd. Rollpersonen har räddat en känd person. Slå 1T6 för att avgöra vem: 1 journalist, 2 politiker, 3 officer, 4 affärsman, 5 läkare, 6 tekniker. Anteckna denna person som kontakt med 2T6+6 resurser. Rollpersonen får en medalj och dessutom ökar Mediastatus med 1T6.",
    modifiers: [
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' },
      { type: 'kontakt', title: 'Kändis', resources: '2T6+6' }
    ]
  },
  {
    min: 14,
    max: 21,
    description: "Hårda strider. Rollpersonen har varit med i en krigszon med mycket hårda strider. Rollpersonen får en medalj och blir dessutom befordrad en grad (+1). Rollpersonen får 1T6 Psykoskryss och dessutom 1T6+1 enheter för att höja Stridsvana.",
    modifiers: [
        { type: 'skill_distribution', allowedSkills: ['Stridsvana'], description: 'Krigskorrespondent', diceFormula: '1T6+1' }
    ]
  },
  {
    min: 22,
    max: 29,
    description: "Krigsrätt. Rollpersonen har ställts inför krigsrätt. Slå 1T6 för att avgöra varför: 1 ordervägran, 2 desertering, 3 krigsförbrytelser, 4 misshandel under permiess, 5 spionmisstänkt, 6 vållande till dödsolycka. Rollpersonen ställdes inför krigsrätt men friades (trots detta måste rollpersonen byta sysselsättning nästa period).",
    modifiers: [
      { type: 'fired', reason: 'Krigsrätt'}
    ]
  },
  {
    min: 30,
    max: 35,
    description: "Krigsrätt. Som ovan, fast rollpersonen blev fälld i krigsrätten. Nästa sysselsättningsperiod måste spenderas i Fängelse, 2T6 år. Rollpersonen mister dessutom sin militära grad.",
    modifiers: [
      { type: 'prison', reason: 'Krigsrätt'}
    ]
  },
  {
    min: 36,
    max: 43,
    description: "Misslyckad operation. Rollpersonen har misslyckats katastrofalt under en viktig operation. Rollpersonen blir degraderad.",
    modifiers: [
      { type: 'demoted', reason: 'Misslyckad militär operation'}
    ]
  },
  {
    min: 44,
    max: 50,
    description: "Omkommen vän. En officerskollega och nära vän dog under en strid i ett främmande land. Detta har påverkat rollpersonen starkt som får 1T6 psykoskryss. Rollpersonen hjälpte vänens änka (anteckna som kontakt med 3T6 resurser).",
    modifiers: [
      { type: 'kontakt', title: 'Änka', resources: '3T6'}
    ]
  },
  {
    min: 51,
    max: 58,
    description: "Skandal. Rollpersonen har tipsat media om oegentligheter inom militären. Slå 1T6 för att avgöra vad: 1 förskingring, 2 mutor, 3 samröre med olaglig organisation, 4 lönnmord, 5 olaglig operation, 6 olagliga vapenystem. Anteckna överordnad officer som fiende med 2T6+10 resurser. Anteckna en journalist som kontakt med 2T6+6 resurser. Höj Mediastatus med 1T6.",
    modifiers: [
      { type: 'kontakt', title: 'Journalist', resources: '2T6+6'},
      { type: 'fiende', title: 'Hög officer', resources: '2T6+10'},
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' }
    ]
  },
  {
    min: 59,
    max: 65,
    description: "Specialförband. Rollpersonen är medlem i ett specialförband. Använd 2T6+6 enheter för att höja Dykning, Fritt fall, Rymddräkt, Förhörsteknik, Spåra och Överlevnad. Använd dessutom 1T6+1 enheter för att höja Stridsvana.",
    modifiers: [
      { type: 'skill_distribution', allowedSkills: ['Stridsvana'], description: 'Specialförband', diceFormula: '1T6+1' },
      { type: 'skill_distribution', allowedSkills: ['Dykning', 'Fritt fall', 'Rymddräkt', 'Förhörsteknik', 'Spåra', 'Överlevnad'], description: 'Krigskorrespondent', diceFormula: '1T6+1' }
    ]
  },
  {
    min: 66,
    max: 73,
    description: "Specialist. Rollpersonen har blivit specialutbildad på ett speciellt vapensystem. Slå 1T6 för att avgöra vilken: 1 stridsvagnskanon, 2 sentry-gun, 3 laserkanon, 4 robot, 5 artilleri, 6 raketartilleri. Rollpersonen får 2T6+2 enheter för höja motsvarande Vapensystem-färdighet.",
    modifiers: [
      { type: 'skill_distribution', allowedSkills: ['Vapensystem'], description: 'Specialutbildad', diceFormula: '2T6+2' }
    ]
  },
  {
    min: 74,
    max: 80,
    description: "Tjänstgjort utomlands. Rollpersonen har tjänstgjort utomlands, som militär rådgivare eller i en fredsbevarande operation. Använd 2T6 enheter för att höja färdigheten Diplomati och ett valfritt språkfärdighet. Under utlandsvistelsen lär rollpersonen känna en utländsk officer med samma grad (anteckna som kontakt med 2T6+6 resurser).",
    modifiers: [
      { type: 'skill_distribution', allowedSkills: ['Språk', 'Diplomati'], description: 'Tjänstgjort utomlands', diceFormula: '2T6' },
      { type: 'kontakt', title: 'Utländsk officer', resources: '2T6+6'}
    ]
  },
  {
    min: 86,
    max: 100,
    description: "Annan händelse. Slå ett slag på den allmänna händelsetabellen (tabell N2-22).",
    modifiers: [{type: 'redirect', table: 'generalEvents' }]
  }
]


export const playboyCareerEvents = [
  {
    min: 1,
    max: 8,
    description: "Adelstitel. Rollpersonen har i en uppmärksammad process förvärvat en adlig titel från någon riddarorden. Slå 1T6 för att avgöra vilken titel: 1 knight, 2 baron, 3 vicomte, 4 marquis, 5 earl, 6 graf. Höj rollpersonens Mediastatus med 1T6.",
    modifiers: [
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' }
    ]
  },
  {
    min: 9,
    max: 17,
    description: "Delägare. Rollpersonen är delaktig i en känd verksamhet som bär rollpersonens namn. Slå 1T6 för att avgöra vilken: 1 designhus, 2 golfklubb, 3 inredkub, 4 lyxrestaurang, 5 konstgalleri, 6 bilugnslåda. Öka Mediastatus med 1T6. Verksamheten sköts av en skicklig affärsman (anteckna som kontakt med 1T6+12 resurser).",
    modifiers: [
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' },
      { type: 'kontakt', title: 'Affärsman', resources: '1T6+12'}
    ]
  },
  {
    min: 18,
    max: 24,
    description: "Drogberoende. Rollpersonen är beroende av en lyxdrog. Beroendegraden för drogen är 2T6. Rollpersonen tillbringade en längre tid i behandling på ett lyxhotell. Minska startkapitalet med Ob3T6 x 5.000 euro. Anteckna en hotellchef som kontakt med 2T6+12 resurser.",
    modifiers: [
      { type: 'kontakt', title: 'Hotellchef', resources: '2T6+12'},
      { type: 'startkapital', description: 'Skadestånd', diceFormula: 'Ob3T6', multiplier: -1000 }
    ]
  },
  {
    min: 25,
    max: 33,
    description: "Kidnappad. Rollpersonen har blivit kidnappad. Efter ett misslyckat försök att betala kidnapparna (sänk startkapitalet med Ob3T6 x 10.000 euro) lyckades polisen rädda rollpersonen med en väpnad insats. En av terroristerna kom undan i förvirringen (anteckna som fiende med 2T6+8 resurser). Hela händelsen chockade rollpersonen ordentligt och rollpersonen får därför 1T6 psykoskryss.",
    modifiers: [
      { type: 'fiende', title: 'Terrorist', resources: '2T6+8'},
      { type: 'startkapital', description: 'Lösensumma', diceFormula: 'Ob3T6', multiplier: -10000 }
    ]
  },
  {
    min: 34,
    max: 42,
    description: "Lurad. Rollpersonen blev kär och gifte sig. Efter några veckor försvann motparten med många dyrbarheter och mycket pengar. Rollpersonen minskar startkapitalet med Ob3T6 x 10.000 euro.",
    modifiers: [
      { type: 'startkapital', description: 'Lurad', diceFormula: 'Ob3T6', multiplier: -10000 }
    ]
  },
  {
    min: 46,
    max: 53,
    description: "Paparazzi. Rollpersonen har blivit avslöjad i en pinsam situation. Öka Mediastatus med två (+2). Rollpersonen anlitade en advokat (anteckna som kontakt med 1T6+12 resurser) och lyckades stämma journalisten på Ob3T6 x 10.000 euro (anteckna som fiende med 3T6 resurser).",
    modifiers: [
      { type: 'startkapital', description: 'Stämning', diceFormula: 'Ob3T6', multiplier: 10000 },
      { type: 'fiende', title: 'Journalist', resources: '3T6'},
      { type: 'kontakt', title: 'Advokat', resources: '1T6+12'},
      { type: 'secondary_attribute', name: 'Mediastatus', value: 2 }
    ]
  },
  {
    min: 54,
    max: 62,
    description: "Skönhetsoperation. Rollpersonen har genomfört ett antal skönhetsoperationer och ser numera nästan tio yngre ut. Öka rollpersonens PER med två (+2). Minska rollpersonens startkapital med Ob3T6 x 1.000 euro. Anteckna plastikkirurg som kontakt med 2T6+10 resurser.",
    modifiers: [
      { type: 'kontakt', title: 'Plastikkirurg', resources: '2T6+10'},
      { type: 'attribute', target: 'PER', amount: 2 },
      { type: 'startkapital', description: 'Lurad', diceFormula: 'Ob3T6', multiplier: -1000 }
    ]
  },
  {
    min: 63,
    max: 71,
    description: "Traumatisk skilsmässa. Rollpersonen gifte sig med en kändis. Slå 1T6: 1 rockstjärna, 2 skådespelare, 3 hög politiker, 4 adelsman/-dam, 5 programledare, 6 gangstersboss. Efter några månader i ett stormigt äktenskap krävde rollpersonen att få skilsmässa. Rollpersonen lyckas få ut en rejäl äktenskapsskillnad från sin före detta (anteckna som fiende med 3T6+6 resurser). Öka rollpersonens startkapital med Ob3T6 x 10.000 euro och Mediastatus med 1T6.",
    modifiers: [
      { type: 'startkapital', description: 'Lurad', diceFormula: 'Ob3T6', multiplier: 10000 },
      { type: 'fiende', title: 'Kändis', resources: '3T6+6'},
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' }
    ]
  },
  {
    min: 72,
    max: 80,
    description: "Utskrattad. Rollpersonen har gjort en rejäl social fadas och ingen av rollpersonens tidigare vänner vill umgås med rollpersonen. Minska Mediastatus med 1T6 (dock aldrig lägre än till noll). Rollpersonen måste välja en annan sysselsättning nästa sysselsättningsperiod.",
    modifiers: [
      { type: 'fired', reason: 'Utskrattad' },
      { type: 'secondary_attribute', name: 'Mediastatus', value: '-1T6' }
    ]
  },
  {
    min: 81,
    max: 100,
    description: "Annan händelse. Slå ett slag på den allmänna händelsetabellen (tabell N2-22).",
    modifiers: [{type: 'redirect', table: 'generalEvents' }]
  }
]

export const polisCareerEvents = [
  {
    min: 1,
    max: 8,
    description: "Cover up. Rollpersonen har tipsat media om oegentligheter inom poliskåren. Slå 1T6 för att avgöra vad: 1 förskingring, 2 justitiemord, 3 mord, 4 mutor, 5 diskriminering, 6 beskyddarverksamhet. Anteckna en överordnad polis som fiende med 2T6+10 resurser. Anteckna en journalist som kontakt med 2T6+6 resurser. Öka Mediastatus med 1T6.",
    modifiers: [
      { type: 'fiende', title: 'Journalist', resources: '2T6+6'},
      { type: 'kontakt', title: 'Polischef', resources: '2T6+10'},
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' }
    ]
  },
  {
    min: 9,
    max: 17,
    description: "Hjälte. Rollpersonen har räddat livet på en känd person. Slå 1T6 för att avgöra vem: 1 playboy, 2 politiker, 3 stjärnskådespelare, 4 företagschef, 5 rockstjärna, 6 programledare. Anteckna denna person som kontakt med 2T6+12 resurser. Slå därefter 1T6 för att avgöra i vilken situation det skedde: 1 kidnappning, 2 mordförsök, 3 rån, 4 gisslandrama 5 flygplanskapning, 6 självmordsförsök. Öka Mediastatus med två (+2).",
    modifiers: [
      { type: 'kontakt', title: 'Kändis', resources: '2T6+12'},
      { type: 'secondary_attribute', name: 'Mediastatus', value: 2 }
    ]
  },
  {
    min: 18,
    max: 26,
    description: "Insatsenhet. Rollpersonen är medlem i en speciell polisär insatsenhet (exempelvis SWAT). Använd 2T6+6 enheter för att höja Automateld, Diplomati, Gevär, Sprängteknik och Taktik. Använd dessutom 1T6+1 för att höja Stridsvana.",
    modifiers: [
      { type: 'skill_distribution', allowedSkills: ['Automateld', 'Diplomati', 'Gevär', 'Sprängteknik', 'Taktik'], description: 'SWAT', diceFormula: '2T6+6' },
      { type: 'skill_distribution', allowedSkills: ['Stridsvana'], description: 'SWAT', diceFormula: '1T6+1' }
    ]
  },
  {
    min: 27,
    max: 35,
    description: "Korrupt. Rollpersonen har tagit emot mutor från en gangster (anteckna som kontakt med 2T6+10 resurser). Höj startkapitalet med Ob3T6 × 1.000 euro. De hela avslöjades dock och rollpersonen blev dömd till fängelse (nästa sysselsättningsperiod måste spenderas i Fängelse, 1T6 år).",
    modifiers: [
      { type: 'prison', reason: 'Korrupt' },
      { type: 'kontakt', title: 'Gangster', resources: '2T6+10'},
      { type: 'startkapital', description: 'Lurad', diceFormula: 'Ob3T6', multiplier: 1000 },
    ]
  },
  {
    min: 36,
    max: 44,
    description: "Pension. Rollpersonen har blivit allvarligt skadad i en eldstrid. Sänk TÅL med ett. Rollpersonen tvingades gå i pension. Höj startkapitalet med Ob3T6 × 1.000 euro. Nästa sysselsättningsperiod måste man välja en annan sysselsättning.",
    modifiers: [
      { type: 'fired', reason: 'Eldstrid' },
      { type: 'attribute', target: 'TÅL', amount: 1 },
      { type: 'startkapital', description: 'Lurad', diceFormula: 'Ob3T6', multiplier: 1000 }
    ]
  },
  {
    min: 45,
    max: 53,
    description: "Polisbrutalitet. Rollpersonen har blivit anmäld för polisbrutalitet. Slå 1T6 för att se vem det var: 1 gängmedlem, 2 arbetare, 3 arbetslös, 4 langare, 5, journalist, 6 journalist. Anteckna denne person som fiende med 3T6 resurser.",
    modifiers: [
      { type: 'fiende', title: 'Polisbrutalitetsoffer', resources: '3T6'},
    ]
  },
  {
    min: 54,
    max: 62,
    description: "Undercover. Rollpersonen har arbetat undercover inom en gangsteroorganisation. Använd 2T6+6 enheter för att höja färdigheten Agera, Förklädnad och Undre världen. Anteckna en gangstersboss som fiende med 2T6+10 resurser.",
    modifiers: [
      { type: 'skill_distribution', allowedSkills: ['Agera', 'Förklädnad', 'Undre världen'], description: 'Undercover', diceFormula: '2T6+6' },
      { type: 'fiende', title: 'Gangsterboss', resources: '2T6+10'}
    ]
  },
  {
    min: 63,
    max: 71,
    description: "Upprättelse. Rollpersonen har arbetat vidare med ett fall som chefen officiellt förklarat avslutat. Detta ledde till att rollpersonen för en tid blev avstängd från tjänsten, men rollpersonen fortsatte ändå. Till slut kunde rollpersonen avslöja sanningen och fick på så sätt upprättelse. Höj rollpersonens befattningsgrad med en nivå (+1). Öka dessutom Mediastatus med 1T6.",
    modifiers: [
      { type: 'promoted', reason: 'Uppklarat gammal fall' },
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' }
    ]
  },
  {
    min: 72,
    max: 80,
    description: "Utbränd. Rollpersonen har arbetat mycket övertid och haft en mycket stressig arbetssituation. Efter djupa samtal med en psykolog (anteckna som kontakt med 2T6+8 resurser) så har rollpersonen beslutat sig för att säga upp sig (rollpersonen måste välja en annan sysselsättning nästa sysselsättningsperiod). Rollpersonen får dessutom 1T6 psykoskryss.",
    modifiers: [
      { type: 'fired', reason: 'Utbränd' },
      { type: 'kontakt', title: 'Psykolog', resources: '2T6+8'}
    ]
  },
  {
    min: 81,
    max: 100,
    description: "Annan händelse. Slå ett slag på den allmänna händelsetabellen (tabell N2-22).",
    modifiers: [{type: 'redirect', table: 'generalEvents' }]
  }
]
