"use strict";
/*
    Objetivo do programa: Aceitar Convite: Um convite será aceito se a pessoa for "amigo" OU for "familia" E estiver disponível. Peça o tipo de relação e a disponibilidade ("sim"/"não").
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
console.log('Verificador de Aceitação de Convite');
console.log('----------------------------------');
rl.question('Qual o tipo de relação? (amigo/familia): ', (relacaoResposta) => {
    const relacao = relacaoResposta.toLowerCase();
    rl.question('Está disponível? (sim/não): ', (disponivelResposta) => {
        const disponivel = disponivelResposta.toLowerCase();
        if (!('amigo' === relacao || 'familia' === relacao) || !('sim' === disponivel || 'não' === disponivel)) {
            console.log('Entrada inválida. Por favor, digite "amigo" ou "familia" para relação e "sim" ou "não" para disponibilidade.');
        }
        else {
            const aceito = (relacao === 'amigo') || (relacao === 'familia' && disponivel === 'sim');
            if (aceito) {
                console.log('Convite aceito');
            }
            else {
                console.log('Convite não aceito');
            }
        }
        rl.close();
    });
});
