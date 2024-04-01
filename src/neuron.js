import { activationFns } from "./activationFns.js";

// Definición de la clase Neuron
export class Neuron {
  constructor(inputSize) {
    // Inicialización de pesos y sesgo de forma aleatoria
    this.weights = new Array(inputSize);
    for (let i = 0; i < inputSize; i++) {
      this.weights[i] = Math.random(); // Pesos aleatorios
    }
    this.bias = Math.random(); // Sesgo aleatorio
  }

  // Función de activación
  actiavteFn(x) {
    console.log("result: ", x);
    return activationFns.sigmoid(x);
  }

  // Función de propagación hacia adelante
  forward(inputs) {
    let activation = this.bias;
    for (let i = 0; i < inputs.length; i++) {
      activation += inputs[i] * this.weights[i];
    }
    return this.actiavteFn(activation);
  }
}
