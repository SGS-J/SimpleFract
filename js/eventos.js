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
    this.verificarCopia = (e) => utiles.verificadorDeCopia(e);
  }
}

class Utiles {
  constructor() {
    this.limitadorANumeros = (e) => {
      let letraValida =
        (e.charCode >= 48 && e.charCode <= 57) || e.charCode == 45;
      if (!letraValida) {
        e.preventDefault();
      }
    };
    this.verificadorDeCopia = (e) => {
      let copiaActual = e.clipboardData.getData("text");
      for (let i = 0; i < copiaActual.length; i++) {
        const codigoLetra = copiaActual.charAt(i).charCodeAt(0);
        let letraValida =
          (codigoLetra >= 48 && codigoLetra <= 57) ||
          codigoLetra == 45;
        if (!letraValida) {
          e.preventDefault();
          break;
        }
      }
    };
  }
}

const utiles = new Utiles();
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
