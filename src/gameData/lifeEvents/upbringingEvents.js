// Each object represents a range, and the event description for that range

export const advantagesEvents = [
  { min: 1, max: 100, description: "You are awesome" }
]

export const disadvantagesEvents = [
  { min: 1, max: 1, description: "Albino: Rollpersonen har kritvit hud, rödaktiga ögon och är mycket känslig för solljus. Var 15:e minut som huden är utsatt för starkt solsken får rollpersonen Ob1T6 poäng Smärta. Denna försvinner om rollpersonen får vila minst ett dygn. Vid starkt solljus for rollpersonen en nivå svårare vid alla slag där synen används." },
  { min: 2, max: 3, description: "Allergisk: Rollpersonen är allergisk mot något vanligt ämne som damm, pollen eller nickel. Om rollpersonen är i närheten eller rör vid det hen är allergisk mot mer än 5 min känner sig rollpersonen dålig och får en nivå svårare på allt hen tar sig för. Droger som hämmar allergin finns och fungerar precis som Seredon (se droger)." },
  { min: 4, max: 4, description: "Allvarlig sjukdom: Rollpersonen lider av en permanent sjukdom som kräver medicinering. Medicinen kostar 150 euro i månaden." },
  { min: 5, max: 5, description: "Ansiktsförlamning: Ena sidan av rollpersonens ansikte är förlamat. Rollpersonen har svårt att stänga ögonlocken och hålla munnen stängd på den sidan. Plastikkirurgi kan åtgärda detta.", modifiers: [{type: 'attribute', target: 'Personlighet', amount: -1 }] },
  { min: 6, max: 6, description: "Blödarsjuka: Rollpersonen slutar inte blöda av sig själv och måste behandlas snabbt vid skador. Det tar en timme för varje poäng blödningstakt att återhämta sig. Kan enbart drabba män." },
  { min: 7, max: 7, description: "Cyberresistent: Kroppen stöter bort cybernetiska implantat med hög risk. Varje gång rollpersonen installerar cybertech måste hen slå ett normalsvårt slag (Ob3T6) under TÅL för att kroppen inte skall stöta bort det. Om det händer blir rollpersonen sängliggande i Ob2T6 dagar och måste operera bort tillägget. Psykoskryssen kvarstår." },
  { min: 8, max: 9, description: "Darrhänt: Rollpersonen har svårt med finmotorik och precision. Får en nivå svårare på allt som involverar precision, t.ex. prickskytte, Fingerfärdighet och spela instrument." },
  { min: 10, max: 10, description: "Disträ: Rollpersonen har svårt att koncentrera sig i stressade situationer och får därför en nivå svårare på Spaning, SYN, HÖR och VIL vid stressaade situationer." },
  { min: 11, max: 11, description: "Djurfientlig: Djur reagerar negativt på rollpersonens närvaro. Rollpersonen kan aldrig bli vän med djur oavsett hur hen agerar." },
  { min: 12, max: 12, description: "Dålig andedräkt: Rollpersonen får en nivå svårare på allt i sociala situationer om andedräkten inte åtgärdas med t.ex. munspray." },
  { min: 13, max: 14, description: "Dålig hand med barn: Rollpersonen har svårt att relatera till barn. Rollpersonen har två nivåer svårare mot Övertala när den används mot barn." },
  { min: 15, max: 16, description: "Dålig lögnare: Rollpersonen har mycket svårt att ljuga övertygande. Två nivåer svårare varje gång rollpersonen försöker tala osanning." },
  { min: 17, max: 17, description: "Extremt blyg: Rollpersonen får panik eller svårigheter att tala med okända, särskilt det motsatta könet. All kommunikation med okända personer är en nivå svårare. Förföra är två nivåer svårare." },
  { min: 18, max: 18, description: "Extremt ädel: Rollpersonen kan inte attackera obeväpnade eller använda fula knep. Om så skulle ske får rollpersonen Ob1T6 psykoskryss vid varje tillfälle." },
  { min: 19, max: 19, description: "Feg: Rollpersonen tenderar att fly eller gömma sig vid faror. Rollpersonen kan tillfälligt hämta mod genom ett svårt slag (Ob4T6) mot VIL i varje ny situation." },
  { min: 20, max: 21, description: "Fet: Rollpersonen är mycket överviktig, vilket påverkar uthållighet och rörlighet. Minska antalet utmattningskolumner till hälften avrundat uppåt." },
  { min: 22, max: 25, description: "Fobiker: Rollpersonen har en stark fobi och kan få panik vid konfrontation. Svårigheten (slå mot VIL) är i de flesta fall normal men kan vara värre i vissa situationer. SL avgör vad rollpersonen har fobi mot." },
  { min: 26, max: 27, description: "Färgblind: Rollpersonen kan inte se skillnad på färger." },
  { min: 28, max: 29, description: "Födelsemärke: Rollpersonen har ett stort födelsemärke. Slå på träffområdestabellen för att avgöra var det sitter." },
  { min: 30, max: 30, description: "Förtidigt åldrande: Rollpersonen har en sjukdom som åldrar kroppen snabbt. Från och med 20 års ålder måste rollpersonen så två slag per år på åldringstabellen." },
  { min: 31, max: 31, description: "Halt: Rollpersonen rör sig långsammare och har svårare med förflyttning. Förflyttning minskar med 2. Kan givetvis åtgärdas med cybertech." },
  { min: 32, max: 32, description: "Helt orblind: Rollpersonen kan varken lära sig skriva eller läsa." },
  { min: 33, max: 33, description: "Hörselskada: Halvera rollpersonens HÖR." },
  { min: 34, max: 34, description: "Dåligt immunförsvar: Rollpersonen är infektionskänslig och mottaglig för smitta. Alla slag mot TÅL blir två nivåer svårare (+Ob2T6) för att motstå infektioner." },
  { min: 35, max: 35, description: "Impotent. Rollpersonen vill inte ha sex eftersom det kan bli pinsamt eller smärtsamt." },
  { min: 36, max: 36, description: "Ingen orienteringsförmåga: Rollpersonen kan aldrig lära sig färdigheten Navigation och tar dubbelt så lång tid på sig att lära sig Geografi. Går ofta vilse och måste ha någon som visar hen vägen. Kompasser är obegripliga." },
  { min: 37, max: 37, description: "Inget kroppshår. Rollpersonen har inte ett hårstrå någonstans på kroppen." },
  { min: 38, max: 38, description: "Trögtänkt. Rollpersonen tar tid på sig att dra slutsatser.", modifiers: [{type: 'attribute', amount: '-2', target: 'Psyke' }] },
  { min: 39, max: 40, description: "Kort. Rollpersonen är ovanligt kort." , modifiers: [{type: 'attribute', amount: '-1', target: 'Styrka' }] },
  { min: 41, max: 41, description: "Kraftig hårväxt. Rollpersonen är myckte kraftigt behårad över hela kroppen.", modifiers: [{type: 'attribute', amount: '-2', target: 'Personlighet' }] },
  { min: 42, max: 42, description: "Känslig för infektioner och smittoämnen." , modifiers: [{type: 'attribute', amount: '-2', target: 'Tålighet' }] },
  { min: 43, max: 44, description: "Lugndefekt: Minskad syreupptagningsförmåga innebär att rollpersonens utmattningskolumner minskar med två." },
  { min: 45, max: 45, description: "Läspar kraftigt: Rollpersonen har svårt med sociala färdigheter och får en nivå (+Ob1T6) svårare om det innebär tal." },
  { min: 46, max: 47, description: "Lättpåverkad: Rollpersonen har svårt att säga nej till andra.",  modifiers: [{type: 'attribute', amount: '-2', target: 'Vilja' }] },
  { min: 48, max: 49, description: "Mager: Rollpersonen är mycket smal vilket påverkar styrka och hälsa negativt. Kroppsbyggnad minskar ett steg (dock aldrig under Klen).", modifiers: [{type: 'attribute', amount: '-2', target: 'Tålighet' }] },
  { min: 50, max: 54, description: "Manisk: Rollpersonen är besatt av något specifikt, som pengar, sex eller odling. För att kunna ägna sig åt annat krävs ett lätt slag (Ob2T6) mot PSY." },
  { min: 55, max: 55, description: "Migrän: Rollpersonen lider av kraftig migrän. Varje gång rollpersonen vaknar efter en sömnperiod får rollpersonen Ob1T6-1 poäng smärta." },
  { min: 56, max: 56, description: "Missbildad höft: En skada som påverkar rörelseförmågan negativt. Rollpersonens förflyttning minskar med 2." },
  { min: 57, max: 58, description: "Muskeldefekt: Rollpersonen är svag.",  modifiers: [{type: 'attribute', amount: '-2', target: 'Styrka' }] },
  { min: 59, max: 59, description: "Nervöst lagd: Minska analet psykoskolumner med två (lägst 1)." },
  { min: 60, max: 61, description: "Obildad: Rollpersonen hade svårt att lära sig saker som ung.",  modifiers: [{type: 'attribute', amount: '-2', target: 'Bildning' }] },
  { min: 62, max: 62, description: "Olyckskorp: Rollpersonen har otur i alla tänkbara situationer.",  modifiers: [{type: 'attribute', amount: '-2', target: 'Tur' }] },
  { min: 63, max: 63, description: "Ordblind: Rollpersonen kan inte öka Skriva/läsa högre än 5." },
  { min: 64, max: 64, description: "Relativt ofarlig permanent sjukdom som psoriasis. Ses som hinder av intoleranta människor." },
  { min: 65, max: 65, description: "Reumatisk: Rollpersonen har ont i lederna och svårt att röra sig.", modifiers: [{type: 'attribute', amount: '-2', target: 'Rörlighet' }] },
  { min: 66, max: 66, description: "Sifferblind: Kan inte räkna eller tolka siffror lätt. Matematik och Programmering kan maximalt höjas till nivå 5." },
  { min: 67, max: 67, description: "Skakningar: Får spasmattacker vid stressade situationer, exempelvis strid. Måste då slå ett lätt slag mot TÅL för att inte få ett anfall som gör alla handlingar en nivå svårare under en minuts tid." },
  { min: 68, max: 68, description: "Skallig: Har mycket tunt hår eller inget alls, får ofta dåligt humör p.g.a. solen." },
  { min: 69, max: 70, description: "Skrikig röst: Får sociala svårigheter (+ObT16) vid situationer där hen uttrycker sig verbalt." },
  { min: 71, max: 72, description: "Smutsig mun: Rollpersonen svär extremt mycket." },
  { min: 73, max: 73, description: "Smärtkänslig: Minska antalet kolumner för Smärta med två (-2)." },
  { min: 74, max: 74, description: "Stammar: Får sociala svårigheter (+ObT16) i situationer där hen uttrycker sig verbalt." },
  { min: 75, max: 76, description: "Steril: Kan aldrig få barn." },
  { min: 77, max: 77, description: "Stor mage: Ökad vikt (ObT16+10) kg.", modifiers: [{type: 'attribute', amount: '-2', target: 'Rörlighet' }]},
  { min: 78, max: 78, description: "Stressbenägen: Varje gång rollpersonen får psykoskryss får rollpersonen ett extra psykoskryss." },
  { min: 79, max: 79, description: "Stridspanik: Presterar alltid dåligt i strid. Rollpersonens turordning halveras alltid." },
  { min: 80, max: 81, description: "Svag för det motsatta könet: Två nivåer svårare att övertala en person av motsatt kön." },
  { min: 82, max: 82, description: "Svag språkförmåga: Rollpersonen kan som högst ha Färdighetsnivå 10 i sitt modersmål och maximalt 5 i främmande språk." },
  { min: 83, max: 84, description: "Svettningar: Rollpersonen har kraftiga svettning vilket ger två nivåer svårare på Förföra, utom då rollpersonen befinner sig i vatten." },
  { min: 85, max: 85, description: "Synfel: Halvera rollpersonens SYN." },
  { min: 86, max: 86, description: "Tidigare mentalsjuk: Alla slag mot mentalvärdet är en nivå svårare (+Ob1T6)." },
  { min: 87, max: 87, description: "Trög. Rollpersonen har en nivå svårare när det gäller att agera snabbt, t.ex. alla handlingar i första stridsrundan." },
  { min: 88, max: 89, description: "Tystlåten: Säger sällan mer än ett fåtal ord." },
  { min: 90, max: 91, description: "Tål ej alkohol: Blir snabbt stupfull även av små mängder. Alla slag mot Supa blir två nivåer svårare (+Ob2T6)." },
  { min: 92, max: 93, description: "Udda sexuell läggning: Ses som avvikande och väcker misstänksamhet i vissa miljöer." },
  { min: 94, max: 94, description: "Uselt nattsyn: En nivå svårare på alla slag mot SYN vid dåliga ljusförhållanden." },
  { min: 95, max: 95, description: "Utslag. Rollpersonen har stora röda utslag över hela kroppen. Ej farliga, men i alla sociala situationer där rollpersonen inte döljer dessa för hen en nivå svårare på alla färdigheter (+Ob1T6)." },
  { min: 96, max: 96, description: "Vanställt ansikte: Fram till att rollpersonen har övertygat dem att hen innerst inne är snäll får rollpersonen en nivå svårare på alla sociala färdigheter." },
  { min: 97, max: 97, description: "Viskande röst: Rollpersonen kan inte skrika på grund av sina stämband och hörs maximalt fem meter bort." },
  { min: 98, max: 98, description: "Ärrad och dålig hy: Rollpersonen har alltid en nivå svårare på Förföra." },
  { min: 99, max: 100, description: "Slå två gånger på denna tabell och använd båda resultaten." },
]


const upbringingEvents = [
 {
    min: 1,
    max: 5,
    event: "Born into a noble family, comfortable upbringing.",
    // No modifiers for this event
  },
  {
    min: 6,
    max: 15,
    event: "Grew up in a bustling merchant town, learned about trade.",
    // Example: This event increases Bildning (Education)
    modifiers: [
      { type: 'attribute', target: 'Bildning', amount: 1 },
      // You could add other types of modifiers here too, e.g.,
      // { type: 'skill', target: 'Trade', amount: 5 },
      // { type: 'inventory', item: { name: 'Small Coin Pouch', quantity: 1 } }
    ]
  },
  {
    min: 16,
    max: 25,
    event: "Lived in a quiet farming village, close-knit community.",
  },
  {
    min: 26,
    max: 35,
    event: "Orphaned early, learned to survive on the streets.",
    modifiers: [
      { type: 'attribute', target: 'Rörlighet', amount: 2 }, // Agility
      { type: 'attribute', target: 'Tålighet', amount: 1 }, // Toughness
    ]
  },
  {
    min: 36,
    max: 45,
    event: "Raised by a reclusive sage, gained unusual knowledge.",
    modifiers: [
      { type: 'attribute', target: 'Psyke', amount: 2 }, // Psyche
      { type: 'attribute', target: 'Vilja', amount: 1 }, // Willpower
    ]
  },
  {
    min: 46,
    max: 55,
    event: "Childhood spent in a military camp, disciplined and tough.",
    modifiers: [
      { type: 'attribute', target: 'Styrka', amount: 2 }, // Strength
      { type: 'attribute', target: 'Tålighet', amount: 1 }, // Toughness
    ]
  },
  {
    min: 56,
    max: 65,
    event: "Survived a major natural disaster (flood, fire, earthquake).",
    modifiers: [
      { type: 'attribute', target: 'Tålighet', amount: 2 },
      { type: 'attribute', target: 'Psyke', amount: -1 }, // Could also be negative!
    ]
  },
  {
    min: 66,
    max: 75,
    event: "Encountered a magical creature, leaving a lasting impression.",
    modifiers: [
      { type: 'attribute', target: 'Syn', amount: 1 }, // Sight
    ]
  },
  {
    min: 76,
    max: 85,
    event: "Witnessed a significant historical event (battle, royal wedding).",
  },
  {
    min: 86,
    max: 95,
    event: "Had a loving and supportive family, generally happy."
  },
  {
    min: 96,
    max: 100,
    event: "Experienced a profound personal loss, shaping your worldview.",
    modifiers: [
      { type: 'attribute', target: 'Vilja', amount: 2 },
      { type: 'attribute', target: 'Personlighet', amount: -1 },
    ]
  },
];

export default upbringingEvents;
