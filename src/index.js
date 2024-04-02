import { NeuralNetwork } from "./neuralNetwork.js";

const inputSize = 2;
const hiddenSize = 2;
const outputSize = 1;
const learningRate = 0.1;

const trainBtn = document.getElementById("train-btn");
const predictBtn = document.getElementById("predict-btn");
const inputA = document.getElementById("input-a");
const inputB = document.getElementById("input-b");
const expected = document.getElementById("expected");
const neuralNetwork = new NeuralNetwork(inputSize, outputSize);
//const neuralNetwork = new NeuralNetwork(inputSize, hiddenSize, outputSize);

// Datos de entrenamiento (OR gate)
const trainingDataOR = [
  { inputs: [0, 0], expectedOutput: 0 },
  { inputs: [0, 1], expectedOutput: 1 },
  { inputs: [1, 0], expectedOutput: 1 },
  { inputs: [1, 1], expectedOutput: 1 },
];

// Datos de entrenamiento (AND gate)
const trainingDataAND = [
  { inputs: [0, 0], expectedOutput: 0 },
  { inputs: [0, 1], expectedOutput: 0 },
  { inputs: [1, 0], expectedOutput: 0 },
  { inputs: [1, 1], expectedOutput: 1 },
];

// Datos de entrenamiento (XOR gate)
const trainingDataXOR = [
  { inputs: [0, 0], expectedOutput: [0] },
  { inputs: [0, 1], expectedOutput: [1] },
  { inputs: [1, 0], expectedOutput: [1] },
  { inputs: [1, 1], expectedOutput: [0] },
];

trainBtn.addEventListener("click", () => {
  const data = {
    inputs: [Number(inputA.value), Number(inputB.value)],
    expectedOutput: expected.value,
  };
  neuralNetwork.train(data.inputs, data.expectedOutput, learningRate);
});

predictBtn.addEventListener("click", () => {
  const data = {
    inputs: [Number(inputA.value), Number(inputB.value)],
    expectedOutput: expected.value,
  };
  const output = neuralNetwork.predict(data.inputs);
  console.log(output);
});

// Entrenamiento de la red neuronal
for (let i = 0; i < 1000; i++) {
  for (const data of trainingDataAND) {
    neuralNetwork.train(data.inputs, data.expectedOutput, learningRate);
  }
}

// // Prueba de la red neuronal entrenada
// console.log(neuralNetwork.predict([0, 0])); // Resultado esperado: ~0
// console.log(neuralNetwork.predict([0, 1])); // Resultado esperado: ~1
// console.log(neuralNetwork.predict([1, 0])); // Resultado esperado: ~1
// console.log(neuralNetwork.predict([1, 1])); // Resultado esperado: ~1
