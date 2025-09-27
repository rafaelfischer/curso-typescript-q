"use strict";
/*
    Objetivo do programa: Preço de Passagem Aérea: O preço da passagem aérea depende da classe (econômica, executiva) E se há promoção.
                            - Econômica: R$ 500 (normal), R$ 300 (promoção)
                            - Executiva: R$ 1500 (normal), R$ 1000 (promoção)
                            Peça a classe e se há promoção (""sim""/""não"") e informe o preço.
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
console.log('Calculadora de Preço de Passagem Aérea');
console.log('--------------------------------------');
rl.question('Digite a classe (economica/executiva): ', (classeResposta) => {
    const classe = classeResposta.toLowerCase();
    rl.question('Há promoção? (sim/nao): ', (promocaoResposta) => {
        const promocao = promocaoResposta.toLowerCase();
        let preco = 0;
        if (classe === 'economica') {
            preco = (promocao === 'sim') ? 300 : 500;
        }
        else if (classe === 'executiva') {
            preco = (promocao === 'sim') ? 1000 : 1500;
        }
        else {
            console.log('Classe inválida. Por favor, digite "economica" ou "executiva".');
            rl.close();
            return;
        }
        console.log(`O preço da passagem é R$ ${preco.toFixed(2)}`);
        rl.close();
    });
});
