'use strict'

var inputNumerador;
var numerador;
var inputDenominador;
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
   botonSimplificar.onclick = () => simplificar();
   botonReiniciar.onclick = () => reiniciar();
   resultadoNumerador.hidden = true;
   resultadoDenominador.hidden = true;
   botonReiniciar.hidden = true;
   document.querySelector('main').style.opacity = '1';
   camposVacios = true;
   numeroInvalido = true;
}

function obtenerDocumento() {
   inputNumerador = document.querySelector('.input-numerador');
   inputDenominador = document.querySelector('.input-denominador');
   botonSimplificar = document.querySelector('.boton-resolver');
   resultadoNumerador = document.querySelector('.resolvedor__resultado--numerador')
   resultadoDenominador = document.querySelector('.resolvedor__resultado--denominador');
   botonReiniciar = document.querySelector('.resolvedor__resultado--reiniciar');
}

function simplificar() {
   if (listoParaSimplificar()) {
      realizarAlgoritmo();
      mostrarResultado();
   } else {
      mostrarError();
      reiniciar();
   }
}

function listoParaSimplificar() {
   if(inputNumerador.value == '' || inputDenominador.value == '' ) {
      camposVacios = true;
   } else {
      camposVacios = false;
   }
   if(parseInt(inputNumerador.value) > 9999 || parseInt(inputDenominador.value) > 9999) {
      numeroInvalido = true;
   } else {
      numeroInvalido = false;
   }
   return !camposVacios && !numeroInvalido;
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
   inputNumerador.value = '';
   inputDenominador.value = '';
   numerador = 0;
   denominador = 0;
}

function mostrarError() {
   alert('Ingrese campos validos');
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