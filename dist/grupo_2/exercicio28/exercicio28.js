"use strict";
/*
    Objetivo do programa: Exclusão de Desconto: Um desconto de 15% é aplicado, EXCETO se o produto for da categoria "Eletrônicos" E o valor for inferior a R$500. Peça a categoria e o valor, e diga se o desconto se aplica. (Use NÃO ou negue a condição do E)
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
console.log('Verificador de Desconto');
console.log('-------------------------');
rl.question('Digite a categoria do produto: ', (categoriaResposta) => {
    rl.question('Digite o valor do produto: ', (valorResposta) => {
        const valor = parseFloat(valorResposta);
        if (isNaN(valor) || valor < 0) {
            console.log('Entrada inválida para o valor. Por favor, digite um número positivo.');
        }
        else {
            const aplicaDesconto = !(categoriaResposta.toLowerCase() === 'eletronicos' && valor < 500);
            if (aplicaDesconto) {
                console.log('O desconto de 15% será aplicado.');
            }
            else {
                console.log('O desconto não será aplicado.');
            }
        }
        rl.close();
    });
});
