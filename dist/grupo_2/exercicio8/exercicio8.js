"use strict";
/*
    Objetivo do programa: Pergunte a nota de um aluno (de 0 a 10). Diga se o aluno está reprovado (nota < 5), em recuperação (nota entre 5 e 6.9) ou aprovado (nota ≥ 7)
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
console.log('Verificador de Nota do Aluno');
console.log('----------------------------');
rl.question('Digite a nota do aluno (0 a 10): ', (answer) => {
    const nota = parseFloat(answer);
    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log('Entrada inválida. Por favor, digite uma nota entre 0 e 10.');
    }
    else if (nota < 5) {
        console.log('Aluno reprovado');
    }
    else if (nota < 7) { // Nota entre 5 e 6.9
        console.log('Aluno em recuperação');
    }
    else {
        console.log('Aluno aprovado');
    }
    rl.close();
});
