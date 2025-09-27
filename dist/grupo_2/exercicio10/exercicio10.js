"use strict";
/*
Objetivo do programa: Pergunte três números. Diga qual é o maior entre eles. Atenção, utilize a estrutura IF.
Data da criacao: 2025-09-25
Criado por: @rafaelfischer
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Encontrar o Maior Número');
console.log('------------------------');
const getNumber = (prompt) => {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            const num = parseFloat(answer);
            if (isNaN(num)) {
                console.log('Entrada inválida. Por favor, digite um número válido.');
                resolve(getNumber(prompt)); // Ask again if input is invalid
            }
            else {
                resolve(num);
            }
        });
    });
};
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const num1 = yield getNumber('Digite o primeiro número: ');
    const num2 = yield getNumber('Digite o segundo número: ');
    const num3 = yield getNumber('Digite o terceiro número: ');
    let maior;
    if (num1 >= num2 && num1 >= num3) {
        maior = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        maior = num2;
    }
    else {
        maior = num3;
    }
    console.log(`O maior número é: ${maior}`);
    rl.close();
});
main();
