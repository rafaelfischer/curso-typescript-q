"use strict";
/*
    Objetivo do programa: Verificar Vogal: Peça um caractere e verifique se ele é uma vogal (a, e, i, o, u), considerando letras maiúsculas e minúsculas. Use o operador OU.
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
console.log('Verificador de Vogal');
console.log('--------------------');
rl.question('Digite um caractere: ', (resposta) => {
    const caractere = resposta.toLowerCase();
    if (caractere.length !== 1) {
        console.log('Entrada inválida. Por favor, digite apenas um caractere.');
    }
    else {
        const ehVogal = caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u';
        if (ehVogal) {
            console.log('O caractere é uma vogal');
        }
        else {
            console.log('O caractere não é uma vogal');
        }
    }
    rl.close();
});
