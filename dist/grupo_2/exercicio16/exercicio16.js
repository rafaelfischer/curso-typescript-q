"use strict";
/*
    Objetivo do programa: Faixa Etária Simples: Peça a idade de uma pessoa e classifique-a como "Criança" (até 12 anos), "Adolescente" (13 a 17 anos) ou "Adulto" (18 anos ou mais).
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
console.log('Classificador de Faixa Etária Simples');
console.log('-------------------------------------');
rl.question('Digite a idade: ', (answer) => {
    const idade = parseInt(answer);
    if (isNaN(idade) || idade < 0) {
        console.log('Entrada inválida. Por favor, digite uma idade válida.');
    }
    else if (idade <= 12) {
        console.log('Criança');
    }
    else if (idade <= 17) {
        console.log('Adolescente');
    }
    else {
        console.log('Adulto');
    }
    rl.close();
});
