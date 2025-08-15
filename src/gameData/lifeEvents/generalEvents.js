export const generalEvents = [
  {
    min: 1,
    max: 2,
    description: "Aktieklipp. Rollpersonen har gjort lyckade affärer på börsen. Anteckna en aktiemäklare som kontakt med 2T6+10 resurser. Fördubbla rollpersonens nuvarande startkapital. Om rollpersonen är skuldsatt halveras skulden.",
    modifiers: [
      { type: 'kontakt', title: 'Aktiemäklare', resources: '2T6+6'},
      { type: 'startkapital', multiplier: 1 },
    ]
  },
  {
    min: 3,
    max: 4,
    description: "Alkoholdmissbruk. Rollpersonen har börjat supa. Använd 1T6+6 enheter för att höja färdigheten Supa. Anteckna en bartender som kontakt med 2T6+6 resurser.",
    modifiers: [
      { type: 'kontakt', title: 'Bartender', resources: '2T6+6'},
      { type: 'skill_distribution', allowedSkills: ['Supa'], description: 'Alkoholmissbruk', diceFormula: '1T6+6' }
    ]
  },
  {
    min: 5,
    max: 6,
    description: "Anonymt betalkort. Rollpersonen har lyckats få tag på ett anonymt betalkort på vilket det finns Ob3T6 × 1.000 euro. Kortet kan ej laddas upp med mer pengar. Alla transaktioner med kortet är så gott som omöjliga att spåra.",
    modifiers: [
      { type: 'startkapital', description: 'Anonymt betalkort', diceFormula: 'Ob3T6', multiplier: 1000 },
    ]
  },
  {
    min: 7,
    max: 8,
    description: "Arv. Rollpersonen har ärvt en avlägsen släkting. En annan släkting blev avslös (anteckna som fiende med 3T6 resurser). Arvet ökar rollpersonens startkapital med Ob3T6 × 10.000 euro.",
    modifiers: [
      { type: 'startkapital', description: 'Arv', diceFormula: 'Ob3T6', multiplier: 10000 },
      { type: 'fiende', title: 'Släkting', resources: '3T6'},
    ]
  },
  {
    min: 9,
    max: 10,
    description: "Beroende. Rollpersonen har börjat använda en beroendeframkallande drog. Beroendegraden för drogen är 2T6. Minska rollpersonens startkapital med Ob3T6 × 1.000 euro. Anteckna en langare som kontakt med 3T6 resurser.",
    modifiers: [
      { type: 'startkapital', description: 'Brogmissbruk', diceFormula: 'Ob3T6', multiplier: -1000 },
      { type: 'fiende', title: 'Langare', resources: '3T6'},
    ]
  },
  {
    min: 11,
    max: 13,
    description: "Bestulen. Rollpersonen har blivit bestulen på alla sina pengar. Slå 1T6 för att avgöra hur: 1 inbrott, 2 rån, 3 kontokortsbedrägeri, 4 lurendrejeri, 5 försäkring, 6 datakrasch. Nollställ rollpersonens startkapital (om rollpersonen var skuldsatt så ökar skulden med Ob3T6 × 100 euro).",
    modifiers: [
      { type: 'startkapital', description: 'Bestulen', multiplier: 0 },
    ]
  },
  {
    min: 14,
    max: 15,
    description: "Beundrare. Rollpersonen har av någon anledning fått en beundrare på halsen. Denna är ganska efterhängsen och kan exempelvis skicka brev och ringa till rollpersonen (anteckna som kontakt med 3T6 resurser).",
    modifiers: [
      { type: 'kontakt', title: 'Efterhängsam beundrare', resources: '3T6'},
    ]
  },
  {
    min: 16,
    max: 17,
    description: "Bråkstake. Rollpersonen har under ett flertal slagsmål blivit tagen av polisen. Rollpersonen finns med i brottsregistret.",
    modifiers: [
        { type: 'brottsregister', value: true }
    ]
  },
  {
    min: 18,
    max: 19,
    description: "Dansfreak. Rollpersonen har spenderat många nätter på diskotek och nattklubbar. Sänk HÖR med två (–2). Använd 1T6+6 enheter för att höja färdigheten Dans. Anteckna en diskjockey som kontakt med 2T6+6 resurser.",
    modifiers: [
      { type: 'attribute', target: 'HÖR', amount: -2, description: 'Hög musik' },
      { type: 'skill_distribution', allowedSkills: ['Dans'], description: 'Dansfreak', diceFormula: '1T6+6' },
      { type: 'kontakt', title: 'Discjockey', resources: '2T6+6'}
    ]
  },
  {
    min: 20,
    max: 21,
    description: "Demonstration. Rollpersonen har deltagit i en demonstration som dessvärre urartade rejält. Rollpersonen hamnade i bråk med kravallpolisen. Det hela ledde till att rollpersonen fick betala dyra böter. Minska rollpersonens startkapital med Ob3T6 × 100 euro. Rollpersonen finns dessutom med i polisens brottsregister.",
    modifiers: [
      { type: 'brottsregister', value: true },
      { type: 'startkapital', description: 'Anonymt betalkort', diceFormula: 'Ob3T6', multiplier: -100 },    
    ]
  },
  {
    min: 22,
    max: 24,
    description: "Emigration. Rollpersonen har flyttat till ett annat land och bosatt sig där. Spelaren måste välja ett nytt hemland åt rollpersonen. Använd 1T6+6 enheter för att lära sig det nya landets språk.",
    modifiers: [    
      { type: 'skill_distribution', allowedSkills: ['Språk'], description: 'Emigrerat', diceFormula: '1T6+6' }
    ]
  },
  {
    min: 25,
    max: 27,
    description: "Extremist. Rollpersonen har en åsikt eller ideologi som är extrem. Slå 1T6 för att avgöra vilken: 1 rasist, 2 militant vegan, 3 revolutionär, 4 religiös fanatiker, 5 anarkist, 6 överlevnadsfanatiker. Det är helt upp till spelaren att avgöra om och i vilket exempel rollpersonen visar sina åsikter eller arbetar i det dolda. Anteckna en ideologimedlem som kontakt med 2T6+6 resurser.",
    modifiers: [
      { type: 'kontakt', title: 'Extremist', resources: '2T6+6'}
    ]
  },
  {
    min: 28,
    max: 29,
    description: "Falsk identitet. Rollpersonen har lyckats komma över falska identitetshandlingar. Dessa kan kanske användas vid ett nödfall eller för mer frekvent användning ökar risken för upptäckt. Handlingarna håller inte för en noggrannare inspektion. Spelaren måste hitta på ett namn åt den falska identiteten."
  },
  {
    min: 30,
    max: 31,
    description: "Familjefejd. Av någon anledning har rollpersonen kommit på kant med hela sin släkt. Slå 1T6 för att avgöra anledningen: 1 arvstvist, 2 rollpersonens yrkesval, 3 falska anklagelser, 4 ren och skär elakhet, 5 tvist om gemensamma tillgångar, 6 dålig personkemi. Anteckna ett familjeöverhuvud som fiende med 2T6+6 resurser.",
    modifiers: [
      { type: 'fiende', title: 'Familjeöverhuvud', resources: '2T6+6'}
    ]
  },
  {
    min: 32,
    max: 33,
    description: "Granne. Rollpersonen har en vansinnig granne som jämt och ständigt tränger sig på (anteckna som fiende med 3T6 resurser).",
    modifiers: [
      { type: 'fiende', title: 'Granne', resources: '3T6'}
    ]
  },
  {
    min: 34,
    max: 35,
    description: "Haffad. Rollpersonen har åkt fast för ett mindre brott. Slå 1T6 för att avgöra vad: 1 fortkörning, 2 förareliggsväckande beteende, 3 skattebrott, 4 snatteri, 5 narkotikainnehav, 6 olaga hot. Rollpersonen fick villkorligt, men finns numera med i brottsregistret.",
    modifiers: [
      { type: 'brottsregister', value: true },
    ]
  },
  {
    min: 36,
    max: 37,
    description: "Hjälte. Rollpersonen har räddat en känd person och blivit känd i media. Slå 1T6 för att avgöra vem: 1 journalist, 2 politiker, 3 officer, 4 politiker, 5 företagsledare, 6 playboy. Anteckna denna person som kontakt med 2T6+6 resurser. Öka Mediastatus med 1T6.",
     modifiers: [
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' },
      { type: 'kontakt', title: ['Journalist', 'Politiker', 'Officer', 'Företagsledare', 'Playboy'], resources: '2T6+6'}
    ]
  },
  {
    min: 38,
    max: 40,
    description: "Hobby. Rollpersonen sysslar med en hobby på fritiden. Slå 1T6 för att avgöra vad: 1 Hasardspel, 2 Sjunga, 3 Musik, 4 Köra motorcykel, 5 Pistol, 6 Båge. Använd 1T6+2 enheter för att höja denna färdighet. Anteckna dessutom en person med samma hobby som kontakt med 2T6+6 resurser.",
    modifiers: [
      { type: 'skill_distribution', allowedSkills: ['Hasardspel', 'Sjunga', 'Musik', 'Köra/motorcykel', 'Pistol', 'Båge'], description: 'Hobby', diceFormula: '1T6+2' },
      { type: 'kontakt', title: 'Hobbyist', resources: '2T6+6'}
    ]
  },
  {
    min: 41,
    max: 42,
    description: "Husdjur. Rollpersonen har skaffat sig ett husdjur. Slå 1T6 för att avgöra vilken typ: 1 hund, 2 katt, 3 kanin, 4 iler, 5 varan, 6 orm. Anteckna en zooföreståndare som kontakt med 3T6 resurser.",
    modifiers: [
      { type: 'kontakt', title: 'Zooföreståndare', resources: '3T6'}
    ]
  },
  {
    min: 43,
    max: 44,
    description: "Inbrott. Rollpersonen har haft ett inbrott i sitt hem. Minska startkapitalet med Ob3T6 × 100 (dock aldrig lägre än till noll).",
    modifiers: [   
      { type: 'startkapital', description: 'Inbrott', diceFormula: 'Ob3T6', multiplier: -100 },    
    ]
  },
  {
    min: 45,
    max: 47,
    description: "Intresse. Rollpersonen har ett speciellt intresse som tar upp mycket av fritiden. Slå 1T6 för att avgöra vad: 1 Matlagning, 2 Läsa/skriva, 3 Konst, 4 Historia, 5 Astronomi, 6 Stil & smak. Använd 1T6+2 enheter för att höja denna färdighet. Anteckna dessutom en expert inom detta område med 2T6+8 resurser.",
    modifiers: [
      { type: 'skill_distribution', allowedSkills: ['Matlagning', 'Läsa/skriva', 'Konstkännedom', 'Historia', 'Astronomi', 'Stil & smak'], description: 'Intresse', diceFormula: '1T6+2' },
      { type: 'kontakt', title: 'Expert', resources: '2T6+8'}
    ]
  },
  {
    min: 48,
    max: 49,
    description: "Kampsport. Rollpersonen har sedan en tid tillbaka utövat en ny kampsport på fritiden. Slå 1T6 för att avgöra vilken: 1 karate, 2 kung fu, 3 tae kwon do, 4 judo, 5 taijutsu, 6 ju-jutsu. Använd 1T6+6 enheter för att höja den aktuella närstridsfärdigheten. Anteckna en sensei som kontakt med 2T6+6 resurser.",
    modifiers: [
      { type: 'skill_distribution', allowedSkills: ['Närstrid/stridskonst'], description: 'Kampsportsfreak', diceFormula: '1T6+6' },
      { type: 'kontakt', title: 'Sensei', resources: '2T6+6'}
    ]
  },
  {
    min: 50,
    max: 51,
    description: "Katastrof. Rollpersonen har varit inblandad i en större katastrof. Slå 1T6 för att avgöra vilken typ: 1 brinnande skyskrapa, 2 fartygsförlisning, 3 masskollision på motorvägen, 4 översvämning, 5 jordbävning, 6 flygplanskrasch. Rollpersonen hade tur och klarade sig lindrigt undan men är drabbad av återkommande mardrömmar. Rollpersonen får 2T6 psykoskryss. Anteckna en psykolog som kontakt med 2T6+6 resurser.",
    modifiers: [
      { type: 'kontakt', title: 'Psykolog', resources: '2T6+6'}
    ]
  },
  {
    min: 52,
    max: 53,
    description: "Kvällskurs. Rollpersonen har gått på kvällskurser. Slå 1T6 för att avgöra vad rollpersonen lärde sig: 1 Agera, 2 Dans, 3 Informationssökning, 4 Programmering, 5 Ekonomi, 6 Språk. Använd 1T6+2 enheter för att höja denna färdighet. Anteckna dessutom en lärare med 2T6+6 resurser.",
    modifiers: [
      { type: 'skill_distribution', allowedSkills: ['Agera', 'Dans', 'Informationssökning', 'Programmering', 'Ekonomi', 'Språk'], description: 'Kvällskurser', diceFormula: '1T6+2' },
      { type: 'kontakt', title: 'Lärare', resources: '2T6+6'}
    ]
  },
  {
    min: 54,
    max: 55,
    description: "Kärleksaffär. Rollpersonen har haft en kortare relation med en känd person av det motsatta könet. Rykten om affären cirkulerade i skvaller­media en tid. Öka därför rollpersonens Mediastatus med två (+2).",
    modifiers: [
      { type: 'secondary_attribute', name: 'Mediastatus', value: 2 }
    ]
  },
  {
    min: 56,
    max: 57,
    description: "Lotterivinst. Rollpersonen har köpt en lott som visade sig ge en rejäl vinst. Rollpersonens startkapital ökar med Ob3T6 x 20.000 euro. Öka Mediastatus med ett (+1).",
    modifiers: [
      { type: 'secondary_attribute', name: 'Mediastatus', value: 1 },
      { type: 'startkapital', description: 'Lotterivinst', diceFormula: 'Ob3T6', multiplier: 20000 },    
    ]
  },
  {
    min: 58,
    max: 60,
    description: "Maratonlöpare. Rollpersonen har sprungit flera maratonlopp och är mer eller mindre beroende av löpning. Öka rollpersonens TAL med två (+2).", 
    modifiers: [
      { type: 'attribute', target: 'TÅL', amount: 2, description: 'Maratonlöpare' },
    ]
  },
  {
    min: 61,
    max: 62,
    description: "Mardrömssemester. Rollpersonen har varit med om en mardrömssemester där allt gått snett. Rollpersonen blev bland annat bestulen, tappade hotellnycklarna, åkte fast i tullen och blev misshandlad av lokalbefolkningen. Öka rollpersonens psykoskryss med 1T6. Minska Cool med ett (–1) och startkapitalet med Ob3T6 x 100 euro.",
    modifiers: [
      { type: 'secondary_attribute', name: 'Cool', value: -1 },
      { type: 'startkapital', description: 'Mardrömssemester', diceFormula: 'Ob3T6', multiplier: -100 },    
      { type: 'secondary_attribute', name: 'Mediastatus', value: '1T6' }
    ]
  },
  {
    min: 63,
    max: 65,
    description: "Mindre ovana. Rollpersonen har lagt sig till med en störande, men oförarglig ovana. Slå 1T6 för att avgöra vad: 1 tuggummiberoende, 2 ständigt trummande med fingrarna, 3 kedjerökning, 4 rapar, 5 talar högt, 6 tycker om att lyssna på musik på hög volym."
  },
  {
    min: 66,
    max: 67,
    description: "Misslyckade affärer. Rollpersonen har satsat pengar i en riktigt dålig affär. Halvera rollpersonens startkapital. Om rollpersonen är skuldsatt så fördubblas skulden.",
    modifiers: [
      { type: 'startkapital', multiplier: -0.5 }
    ]
  },
  {
    min: 68,
    max: 69,
    description: "Rymdtur. Rollpersonen har vunnit en resa i omloppsbana. Vistelsen i viktlöst tillstånd har gjort att rollpersonen får 1T6+1 enheter för att höja färdigheten Fritt fall.",
    modifiers: [
      { type: 'skill_distribution', allowedSkills: ['Fritt fall'], description: 'Rymdtur', diceFormula: '1T6+1' },
    ]
  },
  {
    min: 70,
    max: 71,
    description: "Sektreligion. Rollpersonen har gått med i en religiös sekt. Slå 1T6 för att avgöra vilken typ av sekt det är: 1 cyberkosmologi, 2 buddhism, 3 satanism, 4 undergångsteologi, 5 new age, 6 personkult (välj person). Använd 1T6+6 enheter för att höja färdigheten Religion. Minska rollpersonens startkapital med Ob3T6 × 1.000 euro. Anteckna även en sektledare som kontakt med 2T6+6 resurser.", 
    modifiers: [
      { type: 'skill_distribution', allowedSkills: ['Religion'], description: 'Sekt', diceFormula: '1T6+6' },
      { type: 'startkapital', description: 'Sekt', diceFormula: 'Ob3T6', multiplier: -1000 },    
      { type: 'kontakt', title: 'Sektledare', resources: '2T6+6'}
    ]
  },
  {
    min: 72,
    max: 73,
    description: "Sjukhusvistelse. Rollpersonen drabbas av en långvarig sjukdom och tvingas använda dyra droger och ligga på sjukhus under en längre tid. Slå 1T6 för att avgöra vad rollpersonen drabbades av: 1 cancer, 2 hjärtattack, 3 infektion av resistenta bakterier, 4 brännskador, 5 ärftlig sjukdom, 6 mental ohälsa. Anteckna en läkare som kontakt med 2T6+6 resurser.", 
    modifiers: [
       { type: 'kontakt', title: 'Läkare', resources: '2T6+6'}
    ]
  },
  {
    min: 74,
    max: 75,
    description: "Självmordsförsök. Rollpersonen har försökt ta sitt liv utan att lyckas. Rollpersonen blev räddad av en arbetskamrat (anteckna som kontakt med 2T6+6 resurser). Rollpersonen får 2T6 psykoskryss.", 
    modifiers: [
      { type: 'kontakt', title: 'Arbetskamrat', resources: '2T6+6'}
    ]
  },
  {
    min: 76,
    max: 77,
    description: "Skilsmässa. Efter några månader i ett stormigt äktenskap har rollpersonen gått igenom en skilsmässa. Sänk startkapitalet till hälften. Anteckna en före detta make/maka som fiende med 2T6+6 resurser.", 
    modifiers: [
      { type: 'kontakt', title: 'Tidigare äktenskapspartner', resources: '2T6+6'},
      { type: 'startkapital', multiplier: 0.5 }
    ]
  },
  {
    min: 78,
    max: 79,
    description: "Skjuten. Rollpersonen har skottskadats och tvingats tillbringa två veckor på sjukhus. Detta minskar rollpersonens startkapital med Ob3T6 × 5.000 euro.", 
    modifiers: [
      { type: 'startkapital', description: 'Sjukhusavgifter', diceFormula: 'Ob3T6', multiplier: -5000 },    
    ]
  },
  {
    min: 80,
    max: 81,
    description: "Speldjävulen. Rollpersonen har under en längre tid i hemlighet spelat bort stora delar av sin förmögenhet. Rollpersonens startkapital minskar med Ob3T6 × 5.000 euro. Använd 1T6+2 för att höja färdigheten Hasardspel. Anteckna en bookmaker som kontakt med 2T6+6 resurser.",
    modifiers: [
      { type: 'startkapital', description: 'Spelproblem', diceFormula: 'Ob3T6', multiplier: -5000 }, 
      { type: 'skill_distribution', allowedSkills: ['Hasardspel'], description: 'Spelmani', diceFormula: '1T6+2' },
      { type: 'kontakt', title: 'Bookmaker', resources: '2T6+6'}
    ]
  },
  {
    min: 82,
    max: 84,
    description: "Rollpersonen är en fanatisk utövare av en sport. Slå 1T6 för att avgöra vilken: 1 Klättra, 2 Dykning, 3 Fritt fall, 4 Simma, 5 Idrott, 6 Skidåkning. Använd 1T6+2 enheter för att höja denna färdighet. Anteckna dessutom en instruktör som kontakt med 2T6+6 resurser.",
    modifiers: [
      { type: 'skill_distribution', allowedSkills: ['Klättra', 'Dykning', 'Fritt fall', 'Simma', 'Idrott', 'Skidåkning'], description: 'Idrottare', diceFormula: '1T6+2' },
      { type: 'kontakt', title: 'Instruktör', resources: '2T6+6'}
    ]
  },
  {
    min: 85,
    max: 86,
    description: "Spådom. Rollpersonen tror sig ha blivit sannspådd av en siare. Slå 1T6 för att avgöra vad rollpersonen tror kommer att ske i framtiden: 1 rollpersonen skall bli miljonär, 2 rollpersonen skall dö, 3 rollpersonen kommer bli känd, 4 rollpersonen kommer att lyckas med allt, 5 rollpersonen kommer att misslyckas, 6 rollpersonen kommer bli olycklig. Siaren sa att det skulle inträffa inom Ob1T6+6 år. Anteckna en siare som kontakt med 3T6 resurser.",
    modifiers: [
      { type: 'kontakt', title: 'Siare', resources: '3T6'}
    ]
  },
  {
    min: 87,
    max: 89,
    description: "Stamkund. Rollpersonen är stamkund på ett ställe. Slå 1T6 för att avgöra var: 1 bar, 2 nattklubb, 3 restaurang, 4 klädaffär, 5 vapenaffär, 6 resebyrå. Anteckna innehavaren som kontakt med 2T6+8 resurser.", 
    modifiers: [
      { type: 'kontakt', title: 'Affärsinnehavare', resources: '2T6+8'}
    ]
  },
  {
    min: 90,
    max: 91,
    description: "Styrketräning. Rollpersonen har tränat ett tag på gym för att hålla formen. Öka rollpersonens STY med två (+2). Anteckna en gymföreståndare som kontakt med 2T6+6 resurser.", 
    modifiers: [
      { type: 'attribute', target: 'STY', amount: 2, description: 'Gymfantast' },
      { type: 'kontakt', title: 'Personlig tränare', resources: '2T6+6'}
    ]
  },
  {
    min: 92,
    max: 93,
    description: "Terapi. Rollpersonen har en privat psykolog, som rollpersonen besöker minst en gång i månaden för att tala ut om sina problem (anteckna som kontakt med 2T6+6 resurser). Minska rollpersonens startkapital med Ob3T6 × 100 euro.", 
    modifiers: [
      { type: 'kontakt', title: 'Psykolog', resources: '2T6+6'},
      { type: 'startkapital', description: 'Psykologavgifter', diceFormula: 'Ob3T6', multiplier: -100 }, 
    ]
  },
  {
    min: 94,
    max: 95,
    description: "Tips. Rollpersonen har tipsat en journalist om en nyhet som blev ett scoop. För tipset fick rollpersonen Ob3T6 × 1.000 Euro av journalisten (anteckna som kontakt med 2T6+6 resurser). Öka rollpersonens Mediastatus med ett (+1).",
    modifiers: [
      { type: 'kontakt', title: 'Journalist', resources: '2T6+6'},
      { type: 'startkapital', description: 'Tips', diceFormula: 'Ob3T6', multiplier: 1000 }, 
      { type: 'secondary_attribute', name: 'Mediastatus', value: 1 }
    ]
  },
  {
    min: 96,
    max: 98,
    description: "Tävlingsvinnare. Rollpersonen har vunnit en populär TV-tävling. Slå 1T6 för att avgöra vad priset i tävlingen var: 1 en lyxresa till Söderhavet, 2 en splitter ny bil, 3 fritt shampoo resten av livet, 4 en lyxmiddag för två, 5 ett personligt möte med en kändis, 6 kontanter motsvarande Ob3T6 × 1.000 euro. Utöver priset så ökar dessutom rollpersonens Mediastatus med två (+2).",
    modifiers: [
      { type: 'secondary_attribute', name: 'Mediastatus', value: 2 }
    ]
  },
  {
    min: 99,
    max: 100,
    description: "Yoga. Rollpersonen har tagit kurser i yoga och meditation. Öka rollpersonens VIL med ett (+1). Anteckna en guru som kontakt med 2T6+6 resurser.",
    modifiers: [
      { type: 'kontakt', title: 'Guru', resources: '2T6+6'},
      { type: 'attribute', target: 'VIL', amount: 1, description: 'Yoga' },
    ]
  }
]


export default generalEvents