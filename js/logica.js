"use strict";

let numerador;
let denominador;
let camposVacios;
let inputsListened;

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

class Simplificador {
  constructor(num1 = 0, num2 = 0) {
    this.num1 = num1;
    this.num2 = num2;
    this.actualizarNumeros = (num1, num2) => {
      this.num1 = num1;
      this.num2 = num2;
    };
    this.comenzarProceso = () => {
      inputsListened = document.querySelectorAll(
        ".resolvedor__resolucion input[type='text']"
      );
      if (listoParaSimplificar()) {
        realizarAlgoritmo();
        mostrarResultado();
      } else {
        mostrarError();
        this.reiniciar();
      }
    };
    this.reiniciar = 14;

  }
}

const algoritmoEuclides = new AlgoritmoEuclides();
const simplificador = new Simplificador();

function listoParaSimplificar() {
  if (inputsListened[0].value == "" || inputsListened[1].value == "") {
    camposVacios = true;
  } else {
    camposVacios = false;
  }
  return !camposVacios;
}

function realizarAlgoritmo() {
  // Usamos algoritmo de euclides(Para conseguir el MCD de los dos numeros)
  numerador = inputsListened[0].nodeValue;
  denominador = inputsListened[1].nodeValue;
  let mcd = algoritmoEuclides.calcularMCD(numerador, denominador);
  // Simplificamos
  numerador /= mcd;
  denominador /= mcd;
}

function mostrarResultado() {
  const compsResultado = document.querySelector(".resolvedor__resultado")
    .children;
  for (let i = 0; i < compsResultado.length; i++) {
    const elemento = compsResultado[i];
    elemento.setAttribute("style", "opacity: 1");
  }
  compsResultado[0].innerHTML = numerador;
  compsResultado[1].innerHTML = denominador;
}

function mostrarError() {
  alert("Ingrese campos validos");
}