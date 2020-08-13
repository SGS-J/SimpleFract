"use strict";

let numerador;
let denominador;
let camposVacios;
let valorNegativo;
let inputsListened;

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
  if (inputsListened[0].value == "" || inputsListened[1].value == "") {
    camposVacios = true;
  } else {
    camposVacios = false;
  }
  return !camposVacios;
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
  valorNegativo = numerador < 0 ^ denominador < 0;
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
  const resultados = document.querySelector(".resolvedor__resultado-span").children;
  resultados[0].innerHTML = valorNegativo ? -numerador : numerador;
  resultados[1].innerHTML = valorNegativo ? -denominador : numerador;
}

function mostrarError() {
  alert("Ingrese campos validos");
}

const simplificador = new Simplificador();