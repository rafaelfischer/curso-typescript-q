"use strict";
/*
    Objetivo do programa: Pergunte um número. Diga se este numero faz parte da tabuada do 3, escrevendo na tela.
    Data da criacao: 2025-08-28
    Criado por: @programacaomentoria
    Ultima atualizacao: 2025-09-16
    Alterado por: @rafaelfischer
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Exercicio 3 - Tabuada do 3');
console.log('-----------------------');
rl.question('Digite um numero: ', (answer) => {
    const numero = parseInt(answer);
    if (isNaN(numero)) {
        console.log('Entrada inválida. Por favor, digite um número.');
    }
    else if (numero % 3 === 0) {
        console.log(`O numero ${numero} faz parte da tabuada do 3`);
    }
    else {
        console.log(`O numero ${numero} nao faz parte da tabuada do 3`);
    }
    rl.close();
});
