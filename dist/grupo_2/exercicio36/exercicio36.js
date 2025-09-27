"use strict";
/*
    Objetivo do programa: Pergunte o valor de uma compra. Se for maior que R$ 100, aplique 10% de desconto. Caso contrário, não aplique desconto. Atenção, utilize a estrutura IF.
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
console.log('Cálculo de Desconto de Compra');
console.log('------------------------------');
rl.question('Digite o valor da compra: R$ ', (valorResposta) => {
    const valor = parseFloat(valorResposta);
    if (isNaN(valor)) {
        console.log('Entrada inválida. Por favor, digite um número para o valor da compra.');
        rl.close();
        return;
    }
    const totalDescontoPercentual = 10;
    let valorFinal = valor;
    let valorDesconto = 0;
    if (valor > 100) {
        valorDesconto = valor * (totalDescontoPercentual / 100);
        valorFinal = valor - valorDesconto;
        console.log(`Valor com desconto de ${totalDescontoPercentual}%: R$ ${valorFinal.toFixed(2)} - Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);
    }
    else {
        console.log(`Valor sem desconto: R$ ${valorFinal.toFixed(2)}`);
    }
    rl.close();
});
