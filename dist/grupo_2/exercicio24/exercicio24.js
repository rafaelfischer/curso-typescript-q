"use strict";
/*
    Objetivo do programa: Ano Bissexto: Um ano é bissexto se for divisível por 400 OU se for divisível por 4 E não for divisível por 100. Peça um ano e verifique se ele é bissexto.
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
console.log('Verificador de Ano Bissexto');
console.log('---------------------------');
rl.question('Digite um ano: ', (resposta) => {
    const ano = parseInt(resposta);
    if (isNaN(ano) || ano < 0) {
        console.log('Entrada inválida. Por favor, digite um ano válido.');
    }
    else {
        const ehBissexto = (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0);
        if (ehBissexto) {
            console.log(`${ano} é um ano bissexto.`);
        }
        else {
            console.log(`${ano} não é um ano bissexto.`);
        }
    }
    rl.close();
});
