"use strict";

class Evento {
  constructor() {
    this.simplificar = () => {
      if (listoParaSimplificar()) {
        realizarAlgoritmo();
        mostrarResultado();
      } else {
        mostrarError();
        reiniciar();
      }
    };
    this.reiniciar = () => reiniciar();
    this.limitarSoloNumeros = (e) => utiles.limitadorANumeros(e);
  }
}
const evento = new Evento();

function listoParaSimplificar() {
  if (inputNumerador.value == "" || inputDenominador.value == "") {
    camposVacios = true;
  } else {
    camposVacios = false;
  }
  return !camposVacios;
}

function realizarAlgoritmo() {
  // Usamos algoritmo de euclides(Para conseguir el MCD de los dos numeros)
  numerador = inputNumerador.value;
  denominador = inputDenominador.value;
  let mcd = algoritmoEuclides.calcularMCD(numerador, denominador);
  // Simplificamos
  numerador /= mcd;
  denominador /= mcd;
}

function mostrarResultado() {
  resultadoNumerador.hidden = false;
  resultadoDenominador.hidden = false;
  botonReiniciar.hidden = false;
  resultadoNumerador.innerHTML = numerador;
  resultadoDenominador.innerHTML = denominador;
}

function reiniciar() {
  resultadoNumerador.hidden = true;
  resultadoDenominador.hidden = true;
  botonReiniciar.hidden = true;
  inputNumerador.value = "";
  inputDenominador.value = "";
  numerador = 0;
  denominador = 0;
}

function mostrarError() {
  alert("Ingrese campos validos");
}
