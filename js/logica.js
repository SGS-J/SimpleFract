'use strict';

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
 
class Utiles {
   constructor() {
      this.limitadorANumeros = (e) => {
         let letraValida = (e.charCode >= 48 && e.charCode <= 57) || e.charCode == 45;
         if(!letraValida){
           e.preventDefault();
         }
      }
   }
}

const algoritmoEuclides = new AlgoritmoEuclides();
const utiles = new Utiles();