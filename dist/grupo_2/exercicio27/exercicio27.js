"use strict";
/*
    Objetivo do programa: Número no Intervalo: Verifique se um número inteiro fornecido pelo usuário está entre 1 e 10 (1 e 10 não são contados).
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
console.log('Verificador de Número no Intervalo (1 a 10, exclusivo)');
console.log('--------------------------------------------------');
rl.question('Digite um número inteiro: ', (resposta) => {
    const numero = parseInt(resposta);
    if (isNaN(numero)) {
        console.log('Entrada inválida. Por favor, digite um número inteiro válido.');
    }
    else {
        if (numero > 1 && numero < 10) {
            console.log('O número está entre 1 e 10.');
        }
        else {
            console.log('O número não está entre 1 e 10.');
        }
    }
    rl.close();
});
