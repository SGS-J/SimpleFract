"use strict";

let botonesLaterales;
let inputs;
let botonSimplificar;
let botonReiniciar;

window.addEventListener("load", () => {
  obtenerDocumento();
  prepararDocumento();
  configurarEventos();
  animarEntrada();
});

function obtenerDocumento() {
  inputs = document.querySelectorAll(
    ".resolvedor__resolucion input[type='text']"
  );
  botonesLaterales = document.querySelectorAll("aside .boton-lateral");
  botonSimplificar = document.querySelector(".boton-resolver");
  botonReiniciar = document.querySelector(".resolvedor__resultado--reiniciar");
}

function configurarEventos() {
  botonesLaterales[0].addEventListener("click", evento.mostrarExplicacion);
  botonesLaterales[1].addEventListener("click", evento.mostrarSimplificar);
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener("keypress", evento.limitarSoloNumeros);
    input.addEventListener("keypress", evento.verificarMenos);
    input.addEventListener("keypress", evento.limitarCantidadDeNumeros);
    input.addEventListener("paste", evento.verificarCopia);
    input.addEventListener("focus", evento.removerError);
  }
  botonSimplificar.addEventListener("click", evento.simplificar);
  botonReiniciar.addEventListener("click", evento.reiniciar);
}

function prepararDocumento() {
  const cajaResultado = document.querySelector(".resolvedor__resultado")
    .children;
  for (let i = 0; i < cajaResultado.length; i++) {
    const elemento = cajaResultado[i];
    elemento.setAttribute("style", "opacity: 0");
  }
  document.querySelector(".mensaje-error").setAttribute("style", "opacity: 0");
  document.querySelector("#explicacion").setAttribute("style", "opacity: 0");
  
}

function animarEntrada() {
  const introduccion = document.querySelector("main #introduccion");
  introduccion.style.transform = "translateY(0)";
  introduccion.style.opacity = "1";
  const resolvedor = document.querySelector("main #resolvedor");
  resolvedor.style.transform = "translateY(0)";
  resolvedor.style.opacity = "1";
}
