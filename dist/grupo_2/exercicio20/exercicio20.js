"use strict";
/*
    Objetivo do programa: Acesso ao Sistema: Um sistema requer que a senha tenha no mínimo 6 caracteres. Peça uma senha e informe se ela é "Válida" ou "Inválida".
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
console.log('Verificador de Senha');
console.log('--------------------');
rl.question('Digite uma senha: ', (answer) => {
    const senha = answer;
    if (senha.length >= 6) {
        console.log('Válida');
    }
    else {
        console.log('Inválida');
    }
    rl.close();
});
