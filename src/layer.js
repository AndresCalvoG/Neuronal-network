import { Neuron } from "./neuron.js";

export class Layer {
  constructor(size, inputSize) {
    this.neurons = new Array(size);
    for (let i = 0; i < size; i++) {
      this.neurons[i] = new Neuron(inputSize);
    }
  }

  forward(inputs) {
    return this.neurons.map((neuron) => neuron.forward(inputs));
  }
}
