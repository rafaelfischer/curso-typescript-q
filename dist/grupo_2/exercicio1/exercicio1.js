"use strict";
/*
    Objetivo do programa: Pergunte um número. Diga se este numero é par ou ímpar, escrevendo na tela.
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
console.log('Par ou Impar');
console.log('-----------------------');
rl.question('Digite um numero: ', (answer) => {
    const numero = parseInt(answer);
    if (numero % 2 === 0) {
        console.log(`O numero ${numero} eh par.`);
    }
    else {
        console.log(`O numero ${numero} eh impar.`);
    }
    rl.close();
});
