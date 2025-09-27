"use strict";
/*
    Objetivo do programa: Pergunte um número. Diga se esse número é positivo, negativo ou zero.
    Data da criacao: 2025-09-25
    Criado por: @rafaelfischer
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
console.log('Verificador de Número (Positivo, Negativo ou Zero)');
console.log('--------------------------------------------------');
rl.question('Digite um número: ', (answer) => {
    const numero = parseFloat(answer);
    if (isNaN(numero)) {
        console.log('Entrada inválida. Por favor, digite um número.');
    }
    else if (numero > 0) {
        console.log('O número é positivo');
    }
    else if (numero < 0) {
        console.log('O número é negativo');
    }
    else {
        console.log('O número é zero');
    }
    rl.close();
});
