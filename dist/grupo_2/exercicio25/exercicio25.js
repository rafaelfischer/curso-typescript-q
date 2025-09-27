"use strict";
/*
    Objetivo do programa: Temperatura Ideal para Atividade: Para praticar um esporte ao ar livre, a temperatura deve estar entre 10°C E 30°C (inclusive). Peça a temperatura e informe se é "Ideal para o esporte" ou "Não ideal".
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
console.log('Verificador de Temperatura para Esporte');
console.log('--------------------------------------');
rl.question('Digite a temperatura em °C: ', (resposta) => {
    const temperatura = parseFloat(resposta);
    if (isNaN(temperatura)) {
        console.log('Entrada inválida. Por favor, digite um número para a temperatura.');
    }
    else {
        if (temperatura >= 10 && temperatura <= 30) {
            console.log('Ideal para o esporte');
        }
        else {
            console.log('Não ideal');
        }
    }
    rl.close();
});
