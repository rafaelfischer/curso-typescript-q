"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Objetivo do programa: Login com Credenciais: Crie um algoritmo que verifique se um nome de usuário (ex: "admin") E uma senha (ex: "1234") estão corretos para conceder acesso.
    Data da criacao: 2025-09-25
    Criado por: @rafaelfischer
*/
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
const adminUsuario = 'admin';
const adminSenha = '1234';
console.log('Sistema de Login');
console.log('----------------');
rl.question('Digite o usuário: ', (usuarioAnswer) => {
    rl.question('Digite a senha: ', (senhaAnswer) => {
        if (usuarioAnswer === adminUsuario && senhaAnswer === adminSenha) {
            console.log('Acesso concedido!');
        }
        else {
            console.log('Acesso negado!');
        }
        rl.close();
    });
});
