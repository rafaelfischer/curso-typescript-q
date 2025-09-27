"use strict";
/*
Objetivo do programa: Maior de Dois Números: Dados dois números inteiros, determine qual deles é o maior ou se são iguais.
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
console.log('Comparador de Dois Números');
console.log('--------------------------');
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
    if (num1 > num2) {
        console.log(`${num1} é maior que ${num2}`);
    }
    else if (num2 > num1) {
        console.log(`${num2} é maior que ${num1}`);
    }
    else {
        console.log('Os números são iguais');
    }
    rl.close();
});
main();
