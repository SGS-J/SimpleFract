"use strict";

let inputs;
var numerador;
var denominador;
var botonSimplificar;
var botonReiniciar;
var resultadoNumerador;
var resultadoDenominador;
var camposVacios;
var numeroInvalido;

// Iniciamos scripts
window.onload = () => {
  obtenerDocumento();
  configurarInputs();
  // TODO: Colocar función ocultar resultados
  document.querySelector("main").style.opacity = "1";
  camposVacios = true;
  numeroInvalido = true;
};

function obtenerDocumento() {
  inputs = document.querySelectorAll(".resolvedor__resolucion--input");
  botonSimplificar = document.querySelector(".boton-resolver");
  resultadoNumerador = document.querySelector(
    ".resolvedor__resultado--numerador"
  );
  resultadoDenominador = document.querySelector(
    ".resolvedor__resultado--denominador"
  );
  botonReiniciar = document.querySelector(".resolvedor__resultado--reiniciar");
}

function configurarInputs() {
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    if (i > 1) {
      element.addEventListener("click", evento.simplificar);
    } else {
      element.addEventListener("keypress", (e) => {
        return (e.charCode >= 48 && e.charCode <= 57) || e.charCode == 45;
      });
    }
  }
}

function ocultarResultados() {
  resultadoNumerador.hidden = true;
  resultadoDenominador.hidden = true;
  botonReiniciar.hidden = true;
}

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
