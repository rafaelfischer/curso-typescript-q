"use strict";
/*
    Objetivo do programa: Pergunte a data de nascimento e verifique se a data atual é a data de aniversário.
                            Se for, printe a mensagem de Feliz Aniversário, senão printe a mensagem hoje e dia X de Y
                            de ZZZZ.
    Data da criacao: 2025-09-23
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
console.log('Verificador de Aniversário');
console.log('--------------------------');
rl.question('Digite o dia do seu nascimento (DD): ', (diaNascimentoStr) => {
    const diaNascimento = parseInt(diaNascimentoStr);
    rl.question('Digite o mes do seu nascimento (MM): ', (mesNascimentoStr) => {
        const mesNascimento = parseInt(mesNascimentoStr);
        const hoje = new Date();
        const diaAtual = hoje.getDate();
        const mesAtual = hoje.getMonth() + 1; // getMonth() retorna 0-11
        const anoAtual = hoje.getFullYear();
        if (isNaN(diaNascimento) || isNaN(mesNascimento) || diaNascimento < 1 || diaNascimento > 31 || mesNascimento < 1 || mesNascimento > 12) {
            console.log('Entrada de data inválida. Por favor, digite um dia e mês válidos.');
        }
        else if (diaNascimento === diaAtual && mesNascimento === mesAtual) {
            console.log('Feliz Aniversário!');
        }
        else {
            const mesNomeAtual = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'][mesAtual - 1];
            console.log(`Hoje eh dia ${diaAtual} de ${mesNomeAtual} de ${anoAtual}`);
        }
        rl.close();
    });
});
