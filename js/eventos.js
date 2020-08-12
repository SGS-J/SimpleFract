"use strict";

class Evento {
  constructor() {
    this.simplificar = () => {
      const inputs = document.querySelectorAll(".resolvedor__resolucion input[type='text']");
      let num1 = inputs[0].value;
      let num2 = inputs[1].value;
      simplificador.actualizarNumeros(num1, num2);
      simplificador.comenzarProceso();
    };
    this.reiniciar = () => simplificador.reiniciar();
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