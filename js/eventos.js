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
    this.removerError = () => simplificador.quitarError();
    this.reiniciar = () => simplificador.reiniciar();

    this.mostrarExplicacion = () => documentoActual.mostrarFuncionamiento();
    this.mostrarSimplificar = () => documentoActual.mostrarSimplificador();

    this.limitarCantidadDeNumeros = (e) => utiles.limitadorDeCaracteres(e, 5);
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
      if (copiaActual.length > 6) {
        e.preventDefault();
      } else {
        for (let i = 0; i < copiaAdaptada.length; i++) {
          const valorNegativo = copiaAdaptada.charAt(0) == "-";
          const codigoLetra = copiaAdaptada.charAt(i).charCodeAt(0);
          const letraValida =
            (codigoLetra >= 48 && codigoLetra <= 57) || codigoLetra == 45;

          function signoMenosCorrecto() {
            if (valorNegativo) {
              return i == 0 || copiaAdaptada.charAt(i) != "-";
            } else {
              return !copiaAdaptada.includes("-");
            }
          }

          if (!letraValida || !signoMenosCorrecto()) {
            e.preventDefault();
            break;
          }
        }
      }
    };

    this.limitadorDeCaracteres = (e, limite = 0) => {
      const textoActual = e.target.value;
      if (textoActual.length > limite) {
        e.preventDefault();
      }
    };
  }
}

const utiles = new Utiles();
const evento = new Evento();
