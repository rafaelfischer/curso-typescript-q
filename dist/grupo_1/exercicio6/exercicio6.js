"use strict";
/*
    Objetivo do programa: Calcule a área de um círculo com base no raio informado.
    Como calcular: A = PI . R ao quadrado
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
const PI = 3.14159;
console.log('Exercicio 6 - Calculo da area de um circulo');
console.log('------------------------------------------');
rl.question('Informe o valor do raio: ', (raioInput) => {
    const raio = parseFloat(raioInput);
    const area = PI * (raio * raio);
    console.log(`A area do circulo de raio ${raio.toFixed(2)} e: ${area.toFixed(2)}`);
    rl.close();
});
