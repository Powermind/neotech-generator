// Helper function to roll a single die (e.g., d6, d100)
export function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Helper function to roll 3d6 (sum of three 6-sided dice)
export function roll3D6() {
  return rollDice(6) + rollDice(6) + rollDice(6);
}

// Helper function to roll 4d6 and drop the lowest
export function roll4D6DropLowest() {
  const rolls = [];
  for (let i = 0; i < 4; i++) {
    rolls.push(rollDice(6));
  }
  rolls.sort((a, b) => a - b);
  rolls.shift();
  return rolls.reduce((sum, val) => sum + val, 0);
}