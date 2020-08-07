"use strict";

class AlgoritmoEuclides {
  constructor() {
    this.calcularMCD = (numeroA, numeroB) => {
      // Primeros organizamos los numeros de mayor a menor si es necesario
      if (numeroA < numeroB) {
        numeroA = numeroA + numeroB;
        numeroB = numeroA - numeroB;
        numeroA = numeroA - numeroB;
      }
      // Luego aplicamos recursion
      if (numeroA % numeroB == 0) {
        return numeroB;
      } else {
        return this.calcularMCD(numeroB, numeroA % numeroB);
      }
    };
  }
}

const algoritmoEuclides = new AlgoritmoEuclides();
