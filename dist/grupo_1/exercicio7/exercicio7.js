"use strict";
/*
    Objetivo do programa: Calcule a área de um retângulo
    Area = comprimento * altura
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
console.log('Calculo da area de um retangulo');
console.log('-------------------------------');
rl.question('Informe o comprimento: ', (comprimentoInput) => {
    rl.question('Informe a altura: ', (alturaInput) => {
        const comprimento = parseFloat(comprimentoInput);
        const altura = parseFloat(alturaInput);
        const area = comprimento * altura;
        console.log(`A area do retangulo e: ${area.toFixed(2)}`);
        rl.close();
    });
});
