export const generalEvents = [
  {
    min: 1,
    max: 2,
    description: "Aktieklipp. Rollpersonen har gjort lyckade affärer på börsen. Anteckna en aktiemäklare som kontakt med 2T6+10 resurser. Fördubbla rollpersonens nuvarande startkapital. Om rollpersonen är skuldsatt halveras skulden.",
    modifiers: [
      { type: 'kontakt', title: 'Aktiemäklare', resources: '2T6+10' },
      { type: 'startkapital', description: 'Börsvinst', multiplier: 2 },
      { type: 'skuldjustering', description: 'Skuld halveras om skuldsatt', factor: 0.5 }
    ]
  },
  {
    min: 3,
    max: 4,
    description: "Alkoholmissbruk. Rollpersonen har börjat supa. Använd 1T6+6 enheter för att höja färdigheten Supa. Anteckna en bartender som kontakt med 2T6+6 resurser.",
    modifiers: [
      { type: 'skill_distribution', allowedSkills: ['Supa'], description: 'Höj Supa', diceFormula: '1T6+6' },
      { type: 'kontakt', title: 'Bartender', resources: '2T6+6' }
    ]
  },
  {
    min: 5,
    max: 6,
    description: "Anonymt betalkort. Rollpersonen har lyckats få tag på ett anonymt betalkort på vilket det finns Ob3T6 x 1.000 euro. Kortet kan ej laddas upp med mer pengar. Alla transaktioner med kortet är så gott som omöjliga att spåra.",
    modifiers: [
      { type: 'startkapital', description: 'Anonymt betalkort', diceFormula: 'Ob3T6', multiplier: 1000 }
    ]
  },
  {
    min: 7,
    max: 8,
    description: "Arv. Rollpersonen har ärvt en avlägsen släkting. En annan släkting blev arvlös (anteckna som fiende med 3T6 resurser). Arvet ökar rollpersonens startkapital med Ob3T6 x 10.000 euro.",
    modifiers: [
      { type: 'startkapital', description: 'Arv', diceFormula: 'Ob3T6', multiplier: 10000 },
      { type: 'fiende', title: 'Arvlös släkting', resources: '3T6' }
    ]
  },
  {
    min: 9,
    max: 100,
    description: "Beroende. Rollpersonen har börjat använda en beroendeframkallande drog. Beroendegraden för drogen är 2T6. Minska rollpersonens startkapital med Ob3T6 x 1.000 euro. Anteckna en langare som kontakt med 3T6 resurser.",
    modifiers: [
      { type: 'beroende', description: 'Drogberoende', diceFormula: '2T6' },
      { type: 'startkapital', description: 'Drogkostnad', diceFormula: 'Ob3T6', multiplier: -1000 },
      { type: 'kontakt', title: 'Langare', resources: '3T6' }
    ]
  }
];

export default generalEvents