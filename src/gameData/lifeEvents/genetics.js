
export const genetics = [
  { min: 1, max: 50, description: "Genmanipulationen hade ingen effekt." },
  { min: 51, max: 60, description: "Genmanipulerad för att undvika svagheter. Alla attribut under 10 har slagits om en gång.", modifiers: [{type: 'reroll10', target: 'attributes' }] },
  { min: 61, max: 70, description: "Genmanipulerad för att bli atletisk ", modifiers: [{type: 'attribute', amount: '1T6', target: 'Styrka' }] },
  { min: 71, max: 80, description: "Genmanipulerad för att bli motståndskraftig ", modifiers: [{type: 'attribute', amount: '1T6', target: 'Tålighet' }] },
  { min: 81, max: 90, description: "Genmanipulerad för att bli vacker ", modifiers: [{type: 'attribute', amount: '1T6', target: 'Personlighet' }] },
  { min: 91, max: 100, description: "Genmanipulerad för att bli intelligent ", modifiers: [{type: 'attribute', amount: '1T6', target: 'Psyke' }] },
]


export const sideeffects = [
  { min: 1, max: 80, description: "Inga bieffekter från genmanipulation." },
  { min: 81, max: 82, description: "Bieffekt. Rollpersonen blev svag.", modifiers: [{type: 'attribute', amount: '-1T6', target: 'Styrka' }] },
  { min: 83, max: 84, description: "Bieffekt. Rollpersonen blev sjuklig.", modifiers: [{type: 'attribute', amount: '-1T6', target: 'Tålighet' }] },
  { min: 85, max: 86, description: "Bieffekt. Rollpersonen blev fumlig.", modifiers: [{type: 'attribute', amount: '-1T6', target: 'Rörlighet' }] },
  { min: 87, max: 88, description: "Bieffekt. Rollpersonen blev ful.", modifiers: [{type: 'attribute', amount: '-1T6', target: 'Personlighet' }] },
  { min: 89, max: 90, description: "Bieffekt. Rollpersonen blev ointelligent.", modifiers: [{type: 'attribute', amount: '-1T6', target: 'Psyke' }] },
  { min: 91, max: 92, description: "Bieffekt. Rollpersonen blev viljelös.", modifiers: [{type: 'attribute', amount: '-1T6', target: 'Vilja' }] },
  { min: 93, max: 94, description: "Bieffekt. Rollpersonen fick ett synfel.", modifiers: [{type: 'attribute', amount: '-1T6', target: 'Syn' }] },
  { min: 95, max: 96, description: "Bieffekt. Rollpersonen fick ett hörselfel.", modifiers: [{type: 'attribute', amount: '-1T6', target: 'Hörsel' }] },
  { min: 97, max: 100, description: "Bieffekt. Rollpersonen blev steril." },
]