export const activationFns = {
  sigmoid: (x) => {
    return 1 / (1 + Math.exp(-x));
  },
  sigmoidDerivative: (x) => {
    return x * (1 - x);
  },
  step: (x) => {
    if (x >= 0) {
      return 1;
    } else if (x < 0) {
      return 0;
    }
  },
  signum: (x) => {
    if (x >= 0) {
      return 1;
    } else if (x < 0) {
      return -1;
    }
  },
};
