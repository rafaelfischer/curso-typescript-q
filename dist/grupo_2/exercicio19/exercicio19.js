"use strict";
/*
    Objetivo do programa: Conceito por Nota: Com base na nota de um aluno (0 a 100), atribua um conceito:
        90-100: A
        80-89: B
        70-79: C
        60-69: D
        Abaixo de 60: F
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
function atribuirConceito(nota) {
    if (nota >= 90 && nota <= 100) {
        return 'A';
    }
    else if (nota >= 80 && nota <= 89) {
        return 'B';
    }
    else if (nota >= 70 && nota <= 79) {
        return 'C';
    }
    else if (nota >= 60 && nota <= 69) {
        return 'D';
    }
    else if (nota >= 0 && nota < 60) {
        return 'F';
    }
    else {
        return 'Nota inválida';
    }
}
console.log('Atribuidor de Conceito por Nota');
console.log('-------------------------------');
rl.question('Escolha um valor entre 0 e 100: ', (answer) => {
    const nota = parseInt(answer);
    if (isNaN(nota)) {
        console.log('Entrada inválida. Por favor, digite um número.');
    }
    else {
        console.log(`Conceito para nota ${nota}: ${atribuirConceito(nota)}`);
    }
    rl.close();
});
