// Datos de entrenamiento (OR gate)
export const DataGateOR = [
  { inputs: [0, 0], expectedOutput: 0 },
  { inputs: [0, 1], expectedOutput: 1 },
  { inputs: [1, 0], expectedOutput: 1 },
  { inputs: [1, 1], expectedOutput: 1 },
];

// Datos de entrenamiento (AND gate)
export const DataGateAND = [
  { inputs: [0, 0], expectedOutput: 0 },
  { inputs: [0, 1], expectedOutput: 0 },
  { inputs: [1, 0], expectedOutput: 0 },
  { inputs: [1, 1], expectedOutput: 1 },
];

// Datos de entrenamiento (XOR gate)
export const DataGateXOR = [
  { inputs: [0, 0], expectedOutput: [0] },
  { inputs: [0, 1], expectedOutput: [1] },
  { inputs: [1, 0], expectedOutput: [1] },
  { inputs: [1, 1], expectedOutput: [0] },
];
