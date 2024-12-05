namespace casting{
    let idade: any = 25;
    (idade as number).toFixed(2); //tratando a variável como número e usando o toFixed(2) para colocar dois números depois da vírgula
    (idade as string).length; //tratando como uma string e tentando descobrir a lenght do valor da variável. Nesse caso retornará erro pois lenght só serve se o valor da variável for realmente uma string.
}

let nome: string = 35 as unknown as string;
parseInt("35")