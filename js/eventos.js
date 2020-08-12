"use strict";

class Evento {
  constructor() {
    this.simplificar = () => {
      const inputs = document.querySelectorAll(
        ".resolvedor__resolucion input[type='text']"
      );
      let num1 = inputs[0].value;
      let num2 = inputs[1].value;
      simplificador.actualizarNumeros(num1, num2);
      simplificador.comenzarProceso();
    };
    this.reiniciar = () => simplificador.reiniciar();
    this.limitarSoloNumeros = (e) => utiles.limitadorANumeros(e);
    this.verificarMenos = (e) => utiles.limitadorSignoMenos(e);
    this.verificarCopia = (e) => utiles.verificadorDeCopia(e);
  }
}

class Utiles {
  constructor() {
    this.limitadorANumeros = (e) => {
      const letraValida =
        (e.charCode >= 48 && e.charCode <= 57) || e.charCode == 45;
      if (!letraValida) {
        e.preventDefault();
      }
    };
    this.limitadorSignoMenos = (e) => {
      const numerosEscritos = e.target.value;
      if (e.charCode == 45) {
        if (numerosEscritos.charAt(0) == "-" || numerosEscritos.length > 0) {
          e.preventDefault();
        }
      }
    };
    this.verificadorDeCopia = (e) => {
      const copiaActual = e.clipboardData.getData("text");
      for (let i = 0; i < copiaActual.length; i++) {
        const valorNegativo = copiaActual.charAt(0) == "-";
        const codigoLetra = copiaActual.charAt(i).charCodeAt(0);
        const letraValida =
          (codigoLetra >= 48 && codigoLetra <= 57) || codigoLetra == 45;

        function signoMenosCorrecto() {
          if (valorNegativo) {
            return i == 0 || copiaActual.charAt(i) != "-";
          } else {
            return !copiaActual.includes("-");
          }
        }

        if (!letraValida || !signoMenosCorrecto()) {
          e.preventDefault();
          break;
        }
      }
    };
  }
}

const utiles = new Utiles();
const evento = new Evento();
