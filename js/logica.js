"use strict";

let numerador;
let denominador;
let valorNegativo;
let inputsListened;
const errorCamposVacios = 0;
const errorNumeroCero = 1;

class Simplificador {
  constructor(num1 = 0, num2 = 0) {
    this.num1 = num1;
    this.num2 = num2;
    this.errorActual = 2; // 2 = Sin error
    this.errorLanzado = false;
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
        mostrarError(this.errorActual);
        if(this.errorActual == errorNumeroCero) {
          this.reiniciar();
        }
      }
    };
    this.quitarError = () => {
      if (this.errorLanzado) {
        const error = document.querySelector(".mensaje-error");
        error.style.opacity = "0";
        error.style.animation = "none";
        this.errorLanzado = false;
      }
    };
    this.reiniciar = () => {
      const padResultados = document.querySelector(".resolvedor__resultado")
        .children;
      for (let i = 0; i < padResultados.length; i++) {
        const elemento = padResultados[i];
        elemento.setAttribute("style", "opacity: 0");
      }
      inputsListened[0].value = "";
      inputsListened[1].value = "";
      numerador = 0;
      denominador = 0;
    };
  }
}

function listoParaSimplificar() {
  let hayError = false;
  if (inputsListened[0].value == "" || inputsListened[1].value == "") {
    simplificador.errorActual = errorCamposVacios;
    hayError = true;
  } else if (inputsListened[0].value == "0" || inputsListened[1].value == "0") {
    simplificador.errorActual = errorNumeroCero;
    hayError = true;
  }
  return !hayError;
}

function realizarAlgoritmo() {
  verificarYAsignarValores();
  // Usamos algoritmo de euclides(Para conseguir el MCD de los dos numeros)
  const mcd = algoritmoEuclides.calcularMCD(numerador, denominador);
  // Simplificamos
  numerador /= mcd;
  denominador /= mcd;
}

function verificarYAsignarValores() {
  numerador = inputsListened[0].value;
  denominador = inputsListened[1].value;
  // Comprobacion XOR para verificar que tipo de valor se retornara
  valorNegativo = (numerador < 0) ^ (denominador < 0);
  // Pasar a positivo si es posible
  numerador *= numerador < 0 ? -1 : 1;
  denominador *= denominador < 0 ? -1 : 1;
}

function mostrarResultado() {
  const compsResultado = document.querySelector(".resolvedor__resultado")
    .children;
  for (let i = 0; i < compsResultado.length; i++) {
    const elemento = compsResultado[i];
    elemento.setAttribute("style", "opacity: 1");
  }
  animarFondo();
  const resultados = document.querySelector(".resolvedor__resultado-span").children;
  resultados[0].innerHTML = valorNegativo ? -numerador : numerador;
  resultados[1].innerHTML = valorNegativo ? -denominador : denominador;

  function animarFondo() {
    const cajaResultado = document.querySelector(".resolvedor__resultado");
    cajaResultado.style.background = "#0023";
    setTimeout(() => {
      cajaResultado.style.transition = "background .2s ease-in";
      cajaResultado.style.background = "transparent";
    }, 200);
  };
}

function mostrarError(tipo = 0) {
  const spanError = document.querySelector(".mensaje-error");
  spanError.setAttribute(
    "style",
    "animation: anim-mensaje alternate 1.2s infinite ease-out"
  );
  switch (tipo) {
    case errorCamposVacios:
      spanError.innerHTML = "Completa los campos vacios.";
      break;
    case errorNumeroCero:
      spanError.innerHTML = "El numero no puede ser cero.";
      break;
  }
  simplificador.errorLanzado = true;
}

const simplificador = new Simplificador();