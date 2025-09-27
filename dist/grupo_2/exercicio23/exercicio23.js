"use strict";
/*
    Objetivo do programa: Condição de Crédito: Um cliente pode obter crédito se tiver renda mensal acima de R$2000,00 OU se tiver um bom histórico de crédito (digite "bom" ou "ruim"). Informe se o crédito é "Aprovado" ou "Negado".
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
console.log('Verificador de Condição de Crédito');
console.log('----------------------------------');
rl.question('Digite sua renda mensal: R$ ', (respostaRenda) => {
    const renda = parseFloat(respostaRenda);
    if (isNaN(renda) || renda < 0) {
        console.log('Entrada inválida para renda. Por favor, digite um valor numérico válido.');
        rl.close();
        return;
    }
    rl.question('Digite seu histórico de crédito (Bom / Ruim): ', (respostaHistorico) => {
        const historico = respostaHistorico.toLowerCase();
        if (!['bom', 'ruim'].includes(historico)) {
            console.log('Entrada inválida para histórico de crédito. Por favor, digite \'Bom\' ou \'Ruim\'.');
        }
        else {
            const creditoAprovado = renda > 2000 || historico === 'bom';
            console.log(`Crédito ${creditoAprovado ? 'Aprovado' : 'Negado'}`);
        }
        rl.close();
    });
});
