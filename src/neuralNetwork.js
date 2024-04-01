import { activationFns } from "./activationFns.js";
import { Layer } from "./layer.js";

export class NeuralNetwork {
  constructor(inputSize, hiddenSize, outputSize) {
    this.inputSize = inputSize;
    this.hiddenSize = hiddenSize;
    this.outputSize = outputSize;
    this.hiddenLayer = new Layer(hiddenSize, inputSize);
    this.outputLayer = new Layer(outputSize, hiddenSize);
  }

  // Función de entrenamiento (descenso del gradiente)
  // train(inputs, expectedOutput, learningRate) {
  //   console.clear();
  //   console.log("initial config_______________________________");
  //   const inps = ["A", "B"];
  //   for (let i = 0; i < this.inputSize; i++) {
  //     console.log(`
  //   weight input ${inps[i]}: ${this.neuron.weights[i]}
  //   `);
  //   }
  //   console.log(`
  //   bias: ${this.neuron.bias}
  //   `);
  //   const output = this.neuron.forward(inputs);
  //   const error = expectedOutput - output;
  //   console.log(`
  //   output: ${output}
  //   error: ${error}
  //   `);
  //   //Ajuste de pesos y sesgo utilizando el descenso del gradiente
  //   console.log("ajuste:______________________________________");
  //   for (let i = 0; i < this.inputSize; i++) {
  //     this.neuron.weights[i] += learningRate * error * inputs[i];
  //     console.log(`
  //     weight input ${inps[i]}: ${this.neuron.weights[i]}
  //     `);
  //   }
  //   this.neuron.bias += learningRate * error;
  //   console.log(`
  //   bias: ${this.neuron.bias}
  //   `);
  // }

  // train(inputs, expectedOutput, learningRate) {
  //   const output = this.neuron.forward(inputs);
  //   const error = expectedOutput - output;
  //   for (let i = 0; i < this.inputSize; i++) {
  //     this.neuron.weights[i] += learningRate * error * inputs[i];
  //   }
  //   this.neuron.bias += learningRate * error;
  // }

  // Función de predicción
  // predict(inputs) {
  //   return this.neuron.forward(inputs);
  // }

  train(inputs, expectedOutput, learningRate) {
    // Propagación hacia adelante
    const hiddenOutput = this.hiddenLayer.forward(inputs);
    const output = this.outputLayer.forward(hiddenOutput);

    // Cálculo del error en la capa de salida
    const outputErrors = [];
    for (let i = 0; i < this.outputSize; i++) {
      const error = expectedOutput[i] - output[i];
      outputErrors.push(error);
    }

    // Retropropagación del error a la capa oculta
    const hiddenErrors = [];
    for (let i = 0; i < this.hiddenSize; i++) {
      let error = 0;
      for (let j = 0; j < this.outputSize; j++) {
        error += outputErrors[j] * this.outputLayer.neurons[j].weights[i];
      }
      hiddenErrors.push(error);
    }

    // Actualización de pesos en la capa de salida
    for (let i = 0; i < this.outputSize; i++) {
      for (let j = 0; j < this.hiddenSize; j++) {
        const delta =
          outputErrors[i] *
          activationFns.sigmoidDerivative(output[i]) *
          hiddenOutput[j];
        this.outputLayer.neurons[i].weights[j] += learningRate * delta;
      }
      this.outputLayer.neurons[i].bias +=
        learningRate *
        outputErrors[i] *
        activationFns.sigmoidDerivative(output[i]);
    }

    // Actualización de pesos en la capa oculta
    for (let i = 0; i < this.hiddenSize; i++) {
      for (let j = 0; j < this.inputSize; j++) {
        const delta =
          hiddenErrors[i] *
          activationFns.sigmoidDerivative(hiddenOutput[i]) *
          inputs[j];
        this.hiddenLayer.neurons[i].weights[j] += learningRate * delta;
      }
      this.hiddenLayer.neurons[i].bias +=
        learningRate *
        hiddenErrors[i] *
        activationFns.sigmoidDerivative(hiddenOutput[i]);
    }
  }

  predict(inputs) {
    const hiddenOutput = this.hiddenLayer.forward(inputs);
    return this.outputLayer.forward(hiddenOutput);
  }
}
