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

export const underklassenBackgroundEvents = [
  { min: 1, max: 2, description: "Barnarbete. Rollpersonen har tvingats arbeta hårt som barn. Rollpersonen har dålig rygg. Sänk TÅL med ett (–1). Rollpersonens startkapital ökar med Ob3T6 x 50 euro.", modifiers: [{ type: 'attribute', target: 'TÅL', amount: -1 }, { type: 'startkapital', description: 'Barnarbete', diceFormula: 'Ob3T6', multiplier: 50 }] },
  { min: 3, max: 4, description: "Barnhem. Rollpersonen har blivit övergiven av sina föräldrar och satts på barnhem. Rollpersonen känner inte till var föräldrarna är." },
  { min: 5, max: 6, description: "Beskyddare i skolan. Rollpersonen tvingades betala för beskydd av en stor kille på skolan. Sänk startkapitalet med Ob3T6 x 10." , modifiers: [{ type: 'startkapital', description: 'Beskydd', diceFormula: 'Ob3T6', multiplier: -10 }] },
  { min: 7, max: 8, description: "Demonstration. Rollpersonen har deltagit i en demonstration som urartade rejält. Rollpersonen hamnade i bråk med motdemonstranter och fick allvarliga men. Sänk TÅL med ett (–1). Rollpersonen blev arresterad av polisen och finns dessutom med i brottsregistret.", modifiers: [{ type: 'attribute', target: 'TÅL', amount: -1 }, { type: 'brottsregister', value: true }] },
  { min: 9, max: 11, description: "Drogmissbruk. Rollpersonen börjat på en någon beroendeframkallande drog. Se kapitlet om droger för att avgöra vilken. Rollpersonens beroendegrad är 2T6 för den aktuella drogen. Minska rollpersonens startkapital med Ob3T6 x 100 euro. Rollpersonen känner en langare (anteckna som kontakt med 2T6 resurser).", modifiers: [{ type: 'startkapital', description: 'Drogmissbruk', diceFormula: 'Ob3T6', multiplier: -100 }, { type: 'kontakt', title: 'Langare', resources: '2T6' }] },
  { min: 12, max: 14, description: "Engagerad lärare. En lärare har kollat upp sig personligen för hur det går för rollpersonen (anteckna som kontakt med 2T6 resurser).", modifiers: [{ type: 'kontakt', title: 'Lärare', resources: '2T6' }] },
  { min: 15, max: 16, description: "Extremist. Rollpersonen har en ideologi som är extrem. Det kan exempelvis röra sig om en rasistisk eller religiös övertygelse till någon rörelse i samhället. Spelaren bestämmer vilka åsikter rollpersonen har. Anteckna en extremistledare som kontakt med 1T6+3 resurser.", modifiers: [{ type: 'kontakt', title: 'Extremistledare', resources: '1T6+3' }] },
  { min: 17, max: 19, description: "Familjetragedi. Hela rollpersonens familj har blivit dödad i ett våldsdåd. Rollpersonen flyttat till en släkting (vän eller fiende, anges i slagen som kontakt med 1T6+3 resurser).", modifiers: [{ type: 'kontakt', title: 'Släkting', resources: '1T6+3' }] },
  { min: 20, max: 21, description: "Flykting. Rollpersonens familj har tvingats fly ett krig och bor nu i ett annat land." },
  { min: 22, max: 24, description: "Djurattaktivist. Rollpersonen har saboterat en djuraffär så den gick i konkurs. Anteckna en affärsägare som fiende med 3T6 resurser.", modifiers: [{ type: 'fiende', title: 'Affärsägare', resources: '3T6' }] },
  { min: 25, max: 28, description: "Gängmedlem. Rollpersonen var medlem i ett gäng under sin uppväxt (anteckna gängledare som kontakt med 2T6 resurser).", modifiers: [{ type: 'kontakt', title: 'Gängledare', resources: '2T6' }] },
  { min: 29, max: 30, description: "Instörtad byggnad. Det hus som rollpersonen bodde i rasade samman. En av rollpersonens familjemedlemmar dog. Rollpersonen familj tvingades flytta." },
  { min: 31, max: 32, description: "Kollektiv. Rollpersonen har växt upp i ett kollektiv där även en begåvad men fattig konstnär bodde (anteckna som kontakt med 1T6 resurser).", modifiers: [{ type: 'kontakt', title: 'Fattig konstnär', resources: '1T6' }] },
  { min: 33, max: 34, description: "Mobbing. Rollpersonen har sysslat med att mobba och kränka personer i skolan. Öka startkapital med Ob3T6 x 10. Anteckna en f.d. klasskamrat som fiende med 3T6 resurser.", modifiers: [{ type: 'startkapital', description: 'Mobbning', diceFormula: 'Ob3T6', multiplier: 10 }, { type: 'fiende', title: 'F.d. klasskamrat', resources: '3T6' }] },
  { min: 35, max: 36, description: "Mystisk granne. Rollpersonen har lärt känna en uträknad ronin (anteckna som en kontakt med 1T6+3 resurser).", modifiers: [{ type: 'kontakt', title: 'Ronin', resources: '1T6+3' }] },
  { min: 37, max: 38, description: "Organiserad brottslighet. Rollpersonens familj är involverad i organiserad brottslighet (anteckna maffiamedlem som kontakt med 1T6+3 resurser).", modifiers: [{ type: 'kontakt', title: 'Maffiamedlem', resources: '1T6+3' }] },
  { min: 39, max: 40, description: "Rån. Rollpersonen har blivit nedslagen och rånad i en mörk gränd. Händelsen har gjort rollpersonen mycket mer räddhågen än vad hen var tidigare. Minska Cool med två (–2). Öka antalet psykoskryss med 1T6. Minska dessutom startkapital med Ob3T6 x 10.", modifiers: [{ type: 'attribute', target: 'Cool', amount: -2 }, { type: 'startkapital', description: 'Rån', diceFormula: 'Ob3T6', multiplier: -10 }] },
  { min: 41, max: 42, description: "Shadowdoc. Rollpersonen arbetar extra hos en shadowdoc som ägnar sig åt att installera begagnad och illegal cybertech billig och utan frågor (anteckna som kontakt med 2T6+1 resurser).", modifiers: [{ type: 'kontakt', title: 'Shadowdoc', resources: '2T6+1' }] },
  { min: 43, max: 44, description: "Självmordsförsök. Rollpersonen har försökt ta livet av sig utan att lyckas. Detta har lett till att rollpersonen fått 2T6 psykoskryss. Rollpersonen blev dock räddad av en polisman (anteckna som kontakt med 2T6 resurser).", modifiers: [{ type: 'kontakt', title: 'Polisman', resources: '2T6' }] },
  { min: 45, max: 48, description: "Skuldsatt. Rollpersonen har lånat pengar till hög ränta. Sänk startkapital med Ob3T6 x 100 euro. Anteckna en lånehaj som fiende med 2T6 resurser.", modifiers: [{ type: 'startkapital', description: 'Skuld', diceFormula: 'Ob3T6', multiplier: -100 }, { type: 'fiende', title: 'Lånehaj', resources: '2T6' }] },
  { min: 49, max: 50, description: "Spelberoende. Rollpersonen är intresserad av vadhållning. Rollpersonen har en person på det lokala märker (anteckna som kontakt med 2T6 resurser).", modifiers: [{ type: 'kontakt', title: 'Vadhållare', resources: '2T6' }] },
  { min: 51, max: 52, description: "Svarttaxichaufför. Rollpersonen har lärt känna en taxichaufför som man många under världen (anteckna som kontakt med 2T6 resurser).", modifiers: [{ type: 'kontakt', title: 'Svarttaxichaufför', resources: '2T6' }] },
  { min: 53, max: 54, description: "Torped. Rollpersonen har lärt känna en torped som sysslar med att inkassera förfallna skulder och att mörda folk som inte betalar (anteckna som kontakt med 2T6 resurser).", modifiers: [{ type: 'kontakt', title: 'Torped', resources: '2T6' }] },
  { min: 55, max: 57, description: "Vräkt. Rollpersonens familj betalade inte hyran och blev vräkt från sin bostad. Anteckna hyresvärden som fiende med 2T6+8 resurser.", modifiers: [{ type: 'fiende', title: 'Hyresvärd', resources: '2T6+8' }] },
  { min: 58, max: 60, description: "Övervakare. Rollpersonen har blivit villkorligt dömd för mindre brott.", modifiers: [{ type: 'kontakt', title: 'Övervakare', resources: '2T6' }] },
  { min: 61, max: 70, description: "Slå på händelsetabellen för hemlösa (N2.17)." },
  { min: 71, max: 100, description: "Slå på den allmänna händelsetabellen (N2.21)." },
];

export const medelklassenBackgroundEvents = [
  { min: 1, max: 2, description: "Adopterad. Rollperson blev bortadopterad som liten. Byrån som arrangerade adoptionen vägrar att avslöja vilka de biologiska föräldrarna är." },
  { min: 3, max: 5, description: "Bil. Rollpersonen har en rejält begåvad bil. Rollpersonen är stamkund hos en bilmekaniker (anteckna som kontakt med 3T6 resurser).", modifiers: [{ type: 'kontakt', title: 'Bilmekaniker', resources: '3T6' }] },
  { min: 6, max: 8, description: "Drogmissbruk. Rollpersonen har börjat använda en beroendeframkallande drog. Se kapitlet om droger för att avgöra vilken. Rollpersonens beroendegrad är 2T6 för den aktuella drogen. Minska rollpersonens startkapital med Ob3T6 × 100 euro. Rollpersonen känner en langare (anteckna som kontakt med 3T6 resurser).", modifiers: [{ type: 'startkapital', description: 'Drogmissbruk', diceFormula: 'Ob3T6', multiplier: -100 }, { type: 'kontakt', title: 'Langare', resources: '3T6' }] },
  { min: 9, max: 11, description: "Engagerad släkting. Rollpersonen har en släkting som verkligen bryr sig om hur det går för rollpersonen. Slå 1T6: 1 Mormor, 2 Morfar, 3 Farmor, 4 Farfar, 5 Morbror, 6 Farbror (anteckna som kontakt med 3T6 resurser).", modifiers: [{ type: 'kontakt', title: 'Engagerad släkting', resources: '3T6' }] },
  { min: 12, max: 15, description: "Extraknäck. Rollpersonen har jobbat extra i en närbutik. För detta får rollpersonen Ob3T6 × 100 euro i extra startkapital. Anteckna en butiksinnehavare som kontakt med 3T6 resurser.", modifiers: [{ type: 'startkapital', description: 'Extraknäck', diceFormula: 'Ob3T6', multiplier: 100 }, { type: 'kontakt', title: 'Butiksinnehavare', resources: '3T6' }] },
  { min: 16, max: 17, description: "Familjetragedi. En av rollpersonens föräldrar har blivit dödad i en trafikolycka. Slå 1T6 för att avgöra vem: 1–3 moder, 4–6 fader. Rollpersonen har gått i terapi hos en psykolog (anteckna som kontakt med 3T6 resurser).", modifiers: [{ type: 'kontakt', title: 'Psykolog', resources: '3T6' }] },
  { min: 18, max: 20, description: "Hacker. Rollpersonen har sysslat mycket med datorer och varit på nätet mycket. Via nätet har rollpersonen gjort en hacker till åtlöje (anteckna som fiende med 2T6+6 resurser).", modifiers: [{ type: 'kontakt', title: 'Hacker', resources: '2T6+6' }] },
  { min: 21, max: 22, description: "Idrottare. Rollpersonen har tränat mycket idrott under sin uppväxt och dessutom tävlat i olika sporter. Rollpersonen är fysiskt stark och har goda reflexer. Rollpersonen känner någon med kontakter inom sportvärlden (anteckna som kontakt med 2T6+6 resurser) och låt spelaren bestämma vilken idrott det gäller.", modifiers: [{ type: 'kontakt', title: 'Agent', resources: '2T6+6' }] },
  { min: 23, max: 25, description: "Inbrott. Rollpersonen har blivit rånad under ett inbrott i sitt hem. Händelsen har gjort rollpersonen räddhågen. Minska Cool med ett (–1) och öka antalet psykoskryss med 1T6. Minska dessutom startkapital med Ob3T6 × 10.", modifiers: [{ type: 'attribute', target: 'Cool', amount: -1 }, { type: 'startkapital', description: 'Inbrott', diceFormula: 'Ob3T6', multiplier: -10 }] },
  { min: 26, max: 27, description: "Invandrare. Rollpersonens föräldrar är invandrare från ett annat land. Rollpersonen bor nu i ett annat land (spelaren bestämmer vilket)." },
  { min: 28, max: 31, description: "Musiker. Rollpersonen har varit med i ett ungdomsband. Ledaren för bandet blev sedermera en ganska känd artist (anteckna som kontakt med 2T6 resurser).", modifiers: [{ type: 'kontakt', title: 'Känd musiker', resources: '2T6' }] },
  { min: 32, max: 35, description: "Nörd. Rollpersonen är helt besatt av något, exempelvis datorer, elektronik, litteratur, teknik, tv-serier eller något dylikt. Rollpersonen känner också en äldre expert inom detta område (anteckna som kontakt med 2T6+6 resurser).", modifiers: [{ type: 'kontakt', title: 'Äldre expert', resources: '2T6+6' }] },
  { min: 36, max: 37, description: "Plugghäst. Rollpersonen var en riktigt plugghäst i gymnasiet. Höj BIL med två (+2).", modifiers: [{ type: 'attribute', target: 'BIL', amount: 2 }] },
  { min: 38, max: 40, description: "Polisförälder. Rollpersonens mamma eller pappa var god vän till en poliskommissarie (anteckna som kontakt med 2T6+6 resurser).", modifiers: [{ type: 'kontakt', title: 'Poliskommissarie', resources: '2T6+6' }] },
  { min: 41, max: 42, description: "Programmerare. Rollpersonen har sysslat med betatestning av programvaror och lärt känna en programmerare (anteckna som kontakt med 2T6+6 resurser).", modifiers: [{ type: 'kontakt', title: 'Programmerare', resources: '2T6+6' }] },
  { min: 43, max: 44, description: "Rättsaktivist. Rollpersonen är aktiv medlem i någon organisation som kämpar för en bättre värld. Det kan vara allt från rumsrena organisationer som Amnesty International till mer extrema som Green Strife eller kanske någon helt annan (anteckna byråkrat som fiende med 2T6 resurser).", modifiers: [{ type: 'fiende', title: 'Byråkrat', resources: '2T6' }] },
  { min: 45, max: 46, description: "Självmordsförsök. Rollpersonen har försökt ta livet av sig utan att lyckas. Detta har lett till att rollpersonen fått 2T6 psykoskryss. Rollpersonen blev dock räddad av en läkare (anteckna som kontakt med 2T6+1 resurser).", modifiers: [{ type: 'psychosis', diceFormula: '2T6' }, { type: 'kontakt', title: 'Läkare', resources: '2T6+1' }] },
  { min: 47, max: 50, description: "Supporter. Rollpersonen är en hängiven idrottssupporter. Slå 1T6 för att avgöra vilken sport som fascinerar: 1 fotboll, 2 ishockey, 3 basket, 4 amerikansk fotboll, 5 baseboll, 6 wrestling. Rollpersonen har en kontakt i supporterklubben med 2T6 resurser.", modifiers: [{ type: 'kontakt', title: 'Supporterklubbsledare', resources: '2T6' }] },
  { min: 51, max: 52, description: "Tekniker. Rollpersonen känner en granne som är ingenjör på ett större teknikföretag (anteckna som kontakt med 2T6+6 resurser).", modifiers: [{ type: 'kontakt', title: 'Ingenjör', resources: '2T6+6' }] },
  { min: 53, max: 55, description: "Tips. Rollpersonen har tipsat en journalist om en nyhet som blev ett scoop. Öka personens startkapital med Ob3T6 x 100 Euro (anteckna som kontakt med 2T6+3 resurser).", modifiers: [{ type: 'startkapital', description: 'Tips', diceFormula: 'Ob3T6', multiplier: 100 }, { type: 'kontakt', title: 'Journalist', resources: '2T6+3' }] },
  { min: 56, max: 58, description: "Troende. Rollpersonen har varit med i en mystisk sekt men är numera avprogrammerad (anteckna en sektledare som fiende med 3T6 resurser).", modifiers: [{ type: 'kontakt', title: 'Sektledaare', resources: '3T6' }] },
  { min: 59, max: 60, description: "Uppror. Rollpersonen har gjort uppror mot sina föräldrar. Även som vuxen finns det hatiska känslor (anteckna som fiender med 3T6 resurser).", modifiers: [{ type: 'fiende', title: 'Föräldrar', resources: '3T6' }] },
  { min: 61, max: 70, description: "Slå på händelsetabellen för underklassen (N2.18)." },
  { min: 71, max: 80, description: "Slå på händelsetabellen för överklassen (N2.20)." },
  { min: 81, max: 100, description: "Slå på den allmänna händelsetabellen (N2.21)." },
];

export const overklassenBackgroundEvents = [
  { min: 1, max: 2, description: "Arv. Rollpersonen har ärvt en avlägsen släkting. Arvet ökar rollpersonens startkapital med Ob3T6 × 10.000 euro. Rollpersonen har anlitat en finansman som förvaltar kapitalet (anteckna som kontakt med 3T6+6 resurser).", modifiers: [{ type: 'startkapital', description: 'Arv', diceFormula: 'Ob3T6', multiplier: 10000 }, { type: 'kontakt', title: 'Finansman', resources: '3T6+6' }] },
  { min: 3, max: 4, description: "Arvslös. Rollpersonen har kommit ordentligt på kant med sin släkt och kan inte räkna med att få något arv från sin rika släkting (anteckna som fiende med 1T6+12 resurser).", modifiers: [{ type: 'fiende', title: 'Rik släkting', resources: '1T6+12' }] },
  { min: 5, max: 7, description: "Egen lägenhet. Rollpersonens familj känner en ägare av ett fastighetsföretag (anteckna som kontakt med 1T6+12 resurser). Rollpersonen har fått en egen lägenhet på 1T6 rum.", modifiers: [{ type: 'kontakt', title: 'Fastighetsägare', resources: '1T6+12' }] },
  { min: 8, max: 9, description: "Farliga äventyr. Rollpersonen gillar äventyr, exempelvis bergsklättring, dykning, forsränning eller något liknande. På grund av rollpersonens slarv skadade sig en annan deltagare allvarligt. Vännen är nu invalidiserad och som fiende med 3T6+6 resurser.", modifiers: [{ type: 'fiende', title: 'Skadad vän', resources: '3T6+6' }] },
  { min: 10, max: 12, description: "Hög officer. Rollpersonen känner en överste eller general inom någon militär organisation (anteckna som kontakt med 3T6+6 resurser).", modifiers: [{ type: 'kontakt', title: 'Hög officer', resources: '3T6+6' }] },
  { min: 13, max: 14, description: "Idrottsproffs. Rollpersonen har lärt känna ett idrottsproffs (anteckna som kontakt med 1T6+12 resurser). Spelaren kan själv bestämma vilken sport det rör sig om. Idrottsproffset har en egen linje med kläder som rollpersonen ibland får gratis.", modifiers: [{ type: 'kontakt', title: 'Idrottsproffs', resources: '1T6+12' }] },
  { min: 15, max: 17, description: "Jagad. Rollpersonen är jagad. Slå 1T6 för att avgöra vem det är: 1 lönnmördare med förvridningar, 2 psykopat, 3 torped, 4 polis, 5 knivhuggare, 6 hacker. Anteckna som fiende med 1T6+12 resurser.", modifiers: [{ type: 'fiende', title: 'Fiende', resources: '1T6+12' }] },
  { min: 18, max: 21, description: "Lurad. Rollpersonen blev lurad att investera i helt värdelös kryptovaluta (minska startkapitalet med Ob3T6 × 1.000 euro). Till hjälp för att reda upp det hela anlitade rollpersonen en känd advokat (anteckna som kontakt med 1T6+12 resurser).", modifiers: [{ type: 'startkapital', description: 'Investering', diceFormula: 'Ob3T6', multiplier: -1000 }, { type: 'kontakt', title: 'Skicklig advokat', resources: '1T6+12' }] },
  { min: 22, max: 25, description: "Lyckade investeringar. Rollpersonen har gjort en investering som gett ordentlig avkastning. Öka rollpersonens startkapital med Ob3T6 × 5.000 euro. Genom sina investeringar känner rollpersonen en direktör i ett multinationellt storföretag (anteckna som kontakt med 1T6+14 resurser).", modifiers: [{ type: 'startkapital', description: 'Lyckade investeringar', diceFormula: 'Ob3T6', multiplier: 5000 }, { type: 'kontakt', title: 'Företagsdirektör', resources: '1T6+14' }] },
  { min: 26, max: 30, description: "Psykoterapi. Rollpersonen har en privat psykolog som rollpersonen besöker minst en gång i månaden (anteckna som kontakt med 4T6 resurser). Rollpersonen får 1T6 psykoskryss.", modifiers: [{ type: 'kontakt', title: 'Psykolog', resources: '4T6' }] },
  { min: 31, max: 33, description: "Restaurangägare. Rollpersonen har lärt känna en ägare till en populär nattklubb eller lyxrestaurang (anteckna som kontakt med 1T6+12 resurser).", modifiers: [{ type: 'kontakt', title: 'Restaurangägare', resources: '1T6+12' }] },
  { min: 34, max: 38, description: "Rumla. Rollpersonen har dröstat sig in i en innegäng och blivit en riktig festprisse. Öka rollpersonens Cool med ett (+1). Rollpersonen har dessutom börjat använda en beroendeframkallande drog. Rollpersonens beroendegrad är nu 2T6 för den aktuella drogen. Minska rollpersonens startkapital med Ob3T6 × 100 euro. Rollpersonen känner en partytaxare (anteckna som kontakt med 1T6+12 resurser).", modifiers: [{ type: 'attribute', target: 'Cool', amount: 1 }, { type: 'startkapital', description: 'Rumla', diceFormula: 'Ob3T6', multiplier: -100 }, { type: 'kontakt', title: 'Partyfixare', resources: '1T6+12' }] },
  { min: 39, max: 41, description: "Självmordsförsök. Rollpersonen har försökt ta livet av sig utan att lyckas. Detta har lett till att rollpersonen fått 2T6 psykoskryss. Rollpersonen blev dock räddad av en tevepredikant som senare använde rollpersonen i en av sina tevepredikningar (anteckna som kontakt med 1T6+12 resurser). Höj mediastatus med 1T6.", modifiers: [{ type: 'kontakt', title: 'Tevepredikant', resources: '1T6+12' }, { type: 'mediastatus', diceFormula: '1T6' }] },
  { min: 42, max: 43, description: "Skandal. Rollpersonen hamnar i rampljuset i en uppseendeväckande händelse. Detta ökar rollpersonens Mediastatus med tre (+3). (en som för denna story kan vara en skvallerreporter antecknas som fiende med 1T6+12 resurser).", modifiers: [{ type: 'mediastatus', amount: 3 }, { type: 'fiende', title: 'Stjärnreporter', resources: '1T6+12' }] },
  { min: 45, max: 46, description: "Skådespelare. Rollpersonen var barndomsvän med en skådespelarstjärna. Vännen är nu en känd skådespelare, antingen filmskådespelare eller som skådespelare i någon högklassig såpopera (anteckna som kontakt med 1T6+14 resurser).", modifiers: [{ type: 'kontakt', title: 'Känd skådespelare', resources: '1T6+14' }] },
  { min: 47, max: 48, description: "Sportbil. Rollpersonen har fått en egen sportbil." },
  { min: 49, max: 51, description: "Toppmodell. Rollpersonen har jobbat extra som modell. Uppdragen har kopplingar till en agent inom skönhet ekonomi och promotion (anteckna som kontakt med 1T6+12 resurser).", modifiers: [{ type: 'kontakt', title: 'Modellagent', resources: '1T6+12' }] },
  { min: 52, max: 53, description: "Toppolitiker. Rollpersonen har arbetat ideellt i en valkampanj. Politikern lyckades bli vald och fungerar nu som mentor och en viktig röst (anteckna som kontakt med 1T6+12 resurser).", modifiers: [{ type: 'kontakt', title: 'Politiker', resources: '1T6+12' }] },
  { min: 54, max: 58, description: "Utanlandsutbildning. Rollpersonen har gått i en känd skola i väst, såsom Eton, Harrow eller annan utländsk vishetsskola. Familjen har en viktig diplomat anställd som vän (anteckna som kontakt med 1T6+12 resurser).", modifiers: [{ type: 'kontakt', title: 'Diplomat', resources: '1T6+12' }] },
  { min: 59, max: 60, description: "Vetenskapsman. Rollpersonen har fått en mentor som är en erkänd forskare inom ett vetenskapligt område (anteckna som kontakt med 1T6+12 resurser).", modifiers: [{ type: 'kontakt', title: 'Forskare', resources: '1T6+12' }] },
  { min: 61, max: 70, description: "Slå på händelsetabellen för medelklassen (N2.19)." },
  { min: 71, max: 80, description: "Slå på händelsetabellen för underklassen (N2.18)." },
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