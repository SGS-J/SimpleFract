"use strict";

let inputs;
let botonSimplificar;
let botonReiniciar;
let mensajeResultados;

window.addEventListener("load", () => {
  obtenerDocumento();
  //ocultarResultados();
  configurarEventos();
  animarEntrada();
});

function obtenerDocumento() {
  inputs = document.querySelectorAll(
    ".resolvedor__resolucion input[type='text']"
  );
  botonSimplificar = document.querySelector(".boton-resolver");
  botonReiniciar = document.querySelector(".resolvedor__resultado--reiniciar");
  mensajeResultados = document.querySelectorAll("resolvedor__resultado-span");
}

function configurarEventos() {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener("keypress", evento.limitarSoloNumeros);
    input.addEventListener("keypress", evento.verificarMenos);
    input.addEventListener("paste", evento.verificarCopia);
  }
  botonSimplificar.addEventListener("click", evento.simplificar);
  botonReiniciar.addEventListener("click", evento.reiniciar);
}

function ocultarResultados() {
  const cajaResultado = document.querySelector(".resolvedor__resultado")
    .children;
  for (let i = 0; i < cajaResultado.length; i++) {
    const elemento = cajaResultado[i];
    elemento.setAttribute("style", "opacity: 0");
  }
}

function animarEntrada() {
  const introduccion = document.querySelector("main #introduccion");
  introduccion.style.transform = "translateY(0)";
  introduccion.style.opacity = "1";
  const resolvedor = document.querySelector("main #resolvedor");
  resolvedor.style.transform = "translateY(0)";
  resolvedor.style.opacity = "1";
}
