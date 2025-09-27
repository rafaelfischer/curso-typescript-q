"use strict";
/*
    Objetivo do programa: Decisão de Compra Online: Um usuário decide comprar um item online se o preço for menor que R$100 OU se o frete for grátis E o estoque for maior que zero. Peça o preço, se o frete é grátis ("sim"/"não") e a quantidade em estoque, e informe se o usuário irá "Comprar" ou "Não comprar".
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
console.log('Decisão de Compra Online');
console.log('--------------------------');
rl.question('Digite o preço do item: R$ ', (precoResposta) => {
    const preco = parseFloat(precoResposta);
    rl.question('O frete é grátis? (sim/não): ', (freteGratisResposta) => {
        const freteGratis = freteGratisResposta.toLowerCase();
        rl.question('Digite a quantidade em estoque: ', (estoqueResposta) => {
            const estoque = parseInt(estoqueResposta);
            if (isNaN(preco) || (freteGratis !== 'sim' && freteGratis !== 'não') || isNaN(estoque)) {
                console.log('Entradas inválidas. Por favor, verifique os valores digitados.');
                rl.close();
                return;
            }
            const deveComprar = preco < 100 || (freteGratis === 'sim' && estoque > 0);
            console.log(deveComprar ? 'Comprar' : 'Não comprar');
            rl.close();
        });
    });
});
