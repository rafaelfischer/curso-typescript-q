"use strict";
/*
Objetivo do programa: Média de Aprovação: Um aluno é aprovado se sua média final for igual ou superior a 7. Peça a nota do aluno e informe se ele foi "Aprovado" ou "Reprovado".
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
console.log('Verificador de Média de Aprovação');
console.log('---------------------------------');
rl.question('Digite a nota do aluno: ', (answer) => {
    const nota = parseFloat(answer);
    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log('Entrada inválida. Por favor, digite uma nota entre 0 e 10.');
    }
    else if (nota >= 7.0) {
        console.log('Aprovado');
    }
    else {
        console.log('Reprovado');
    }
    rl.close();
});
