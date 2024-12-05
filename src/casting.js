"use strict";
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed(2); //tratando a variável como número e usando o toFixed(2) para colocar dois números depois da vírgula
    idade.length; //tratando como uma string e tentando descobrir a lenght do valor da variável. Nesse caso retornará erro pois lenght só serve se o valor da variável for realmente uma string.
})(casting || (casting = {}));
let nome = 35;
parseInt("35");
