'use strict'

var inputNumerador;
var inputDenominador;
var botonSimplificar;
var camposVacios;
var numeroInvalido;
// TODO Sera eliminada despues
var res;

// Iniciamos scripts
window.onload = () => {
   obtenerDocumento();
   botonSimplificar.onclick = () => simplificar();
   camposVacios = true;
   numeroInvalido = false;
}

function obtenerDocumento() {
   inputNumerador = document.querySelector('.caja-resolvedor__resolucion--numerador');
   inputDenominador = document.querySelector('.caja-resolvedor__resolucion--denominador');
   botonSimplificar = document.querySelector('.caja-resolvedor__resolucion--resolver');
}

function simplificar() {
   if (listoParaSimplificar()) {
      realizarAlgoritmo();
      mostrarResultado();
      reiniciar();
   } else {
      mostrarError();
      reiniciar();
   }
}

function listoParaSimplificar() {
   if(inputNumerador.value == '' | inputDenominador.value == '' ) {
      camposVacios = true;
   } else {
      camposVacios = false;
   }
   return !camposVacios;
}

function realizarAlgoritmo() {
   // Usamos algoritmo de euclides(Para conseguir el MCD de los dos numeros)
   let numerador = inputNumerador.value;
   let denominador = inputDenominador.value;
   res = algoritmoEuclides.calcularMCD(numerador, denominador);
}

function mostrarResultado() {
   // TODO: Usados como prueba
   alert(res);
}

function reiniciar() {
   inputNumerador.value = '';
   inputDenominador.value = '';
}

function mostrarError() {
   // TODO: Usados como prueba
   alert('Ingrese campos.');
}