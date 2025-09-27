/*
	Objetivo do programa: Pergunte o número do mês (1 a 12). Diga quantos dias ele tem (ano não bissexto). Atenção, utilize a estrutura CASE.
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Verificador de Dias do Mês');
console.log('--------------------------');

rl.question('Digite o número do mês (1-12): ', (answer: string) => {
	const mes: number = parseInt(answer);
	let dias: number | undefined;

	if (isNaN(mes) || mes < 1 || mes > 12) {
		console.log('Mês inválido! Por favor, digite um número entre 1 e 12.');
	}
	else {
		switch (mes) {
			case 2:
				dias = 28;
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				dias = 30;
				break;
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				dias = 31;
				break;
		}
		console.log(`O mês ${mes} tem ${dias} dias.`);
	}

	rl.close();
});