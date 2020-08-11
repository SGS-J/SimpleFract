"use strict";

let inputs;
let botonSimplificar;
let botonReiniciar;
let mensajeResultados;

window.addEventListener("load", () => {
  obtenerDocumento();
  configurarEventos();
  // TODO: Colocar función ocultar resultados
  document.querySelector("main").style.opacity = "1";
});

function obtenerDocumento() {
  inputs = document.querySelectorAll(".resolvedor__resolucion input[type='text']");
  botonSimplificar = document.querySelector(".boton-resolver");
  botonReiniciar = document.querySelector('resolvedor__resultado--reiniciar');
  mensajeResultados = document.querySelectorAll('resolvedor__resultado-span');
}

function configurarEventos() {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener('keypress', evento.limitarSoloNumeros);
    input.addEventListener('paste', evento.verificarCopia);
  }
  botonSimplificar.addEventListener('click', evento.simplificar);
}

function ocultarResultados() {
  resultadoNumerador.hidden = true;
  resultadoDenominador.hidden = true;
  botonReiniciar.hidden = true;
}