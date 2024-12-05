"use strict";
// class Pessoa {
//     nome: string;
//     idade: number;
//     constructor(nome: string, idade: number) {
//     this.nome = nome;
//     this.idade = idade;
//     }
//     cumprimentar(): string {
//     return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
//     }
// }
// const pessoa1 = new Pessoa('Joao', 32)
// console.log(pessoa1.cumprimentar())
// const pessoa = new Pessoa("André", 30);
// console.log(pessoa.cumprimentar());
class ContaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
}
// const conta = new ContaBancaria(1000);
// conta.depositar(500);
// console.log(conta.consultarSaldo()); // 1500
// class Animal {
//     constructor(public nome: string) {}
//     emitirSom(): void {
//     console.log("Som genérico de animal");
//     }
// }
// class Cachorro extends Animal {
//     emitirSom(): void {
//     console.log("Latido");
//     }
// }
// const animal = new Animal("Animal Genérico");
// animal.emitirSom(); // "Som genérico de animal"
// const cachorro = new Cachorro("Rex");
// cachorro.emitirSom(); // "Latido"
class Veiculo {
    mover() {
        console.log("O veículo está se movendo");
    }
}
class Carro extends Veiculo {
    mover() {
        console.log("O carro está dirigindo");
    }
}
const veiculo = new Carro();
veiculo.mover(); // "O carro está dirigindo"
