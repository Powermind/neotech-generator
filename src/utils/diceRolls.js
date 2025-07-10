export function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

export function rollDiceString(diceString) {
  // Normalize "T" to "D" for Swedish compatibility
  let normalized = diceString.replace(/T/gi, 'D');

  // Track leading minus
  const hasLeadingMinus = normalized.startsWith('-');
  if (hasLeadingMinus) {
    normalized = normalized.slice(1); // Remove the minus for parsing
  }

  // Check for 'Ob' exploding dice
  const isExploding = normalized.startsWith('Ob');
  if (isExploding) {
    normalized = normalized.slice(2); // Remove 'Ob' prefix
  }

  // Match the dice string
  const match = normalized.match(/^(\d+)D(\d+)([+-]\d+)?$/i);
  if (!match) {
    console.error(`Invalid dice string format: "${diceString}". Expected format like "1D6+2", "-2D8", or "-Ob2D6+1".`);
    return 0;
  }

  const numDice = parseInt(match[1], 10);
  const sides = parseInt(match[2], 10);
  const modifierString = match[3];

  let rolls = [];

  // Exploding dice logic
  function rollExplodingDice(n, sides) {
    let results = [];
    for (let i = 0; i < n; i++) {
      const roll = rollDice(sides);
      if (roll === sides) {
        // Explode into 2 more dice
        results = results.concat(rollExplodingDice(2, sides));
      } else {
        results.push(roll);
      }
    }
    return results;
  }

  if (isExploding) {
    rolls = rollExplodingDice(numDice, sides);
  } else {
    for (let i = 0; i < numDice; i++) {
      rolls.push(rollDice(sides));
    }
  }

  const total = rolls.reduce((sum, val) => sum + val, 0);
  const modifier = modifierString ? parseInt(modifierString, 10) : 0;
  const finalTotal = total + modifier;

  // Apply leading minus if necessary
  return hasLeadingMinus ? -finalTotal : finalTotal;
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