"use strict";
/*
  Objetivo do programa: Perguntar o nome de quem está usando o programa e sua idade. Faça duas perguntas.
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
rl.question('Digite seu nome: ', (nome) => {
    rl.question('Digite sua idade: ', (idade) => {
        console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
        rl.close();
    });
});
