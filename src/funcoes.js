"use strict";
// function calculaArea(base: number, altura:number) {
//     return base * altura;
// }
// const calcArea2 = (base:number, altura:number): number => base * altura
// function somar(...numeros: number[]): number {
//     return numeros.reduce((acumulador, numero) => acumulador + numero, 0)
// }
// console.log(somar(1, 2, 3, 4, 5));
function teste(argumento1, argumento2) {
    if (argumento1 > argumento2) {
        console.log(`O primeiro número: ${argumento1} é maior do que o segundo número: ${argumento2}`);
    }
    else {
        console.log(`O segundo número: ${argumento2} é maior do que o primeiro número: ${argumento1}`);
    }
}
teste(15, 11);
