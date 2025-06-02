// Each object represents a range, and the event description for that range
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