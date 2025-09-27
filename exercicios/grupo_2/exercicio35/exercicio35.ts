/*
	Objetivo do programa: Decisão de Compra Online: Um usuário decide comprar um item online se o preço for menor que R$100 OU se o frete for grátis E o estoque for maior que zero. Peça o preço, se o frete é grátis ("sim"/"não") e a quantidade em estoque, e informe se o usuário irá "Comprar" ou "Não comprar".
	Data da criacao: 2025-09-25
	Criado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Decisão de Compra Online');
console.log('--------------------------');

rl.question('Digite o preço do item: R$ ', (precoResposta: string) => {
	const preco: number = parseFloat(precoResposta);

	rl.question('O frete é grátis? (sim/não): ', (freteGratisResposta: string) => {
		const freteGratis: string = freteGratisResposta.toLowerCase();

		rl.question('Digite a quantidade em estoque: ', (estoqueResposta: string) => {
			const estoque: number = parseInt(estoqueResposta);

			if (isNaN(preco) || (freteGratis !== 'sim' && freteGratis !== 'não') || isNaN(estoque)) {
				console.log('Entradas inválidas. Por favor, verifique os valores digitados.');
				rl.close();
				return;
			}

			const deveComprar: boolean = preco < 100 || (freteGratis === 'sim' && estoque > 0);
			console.log(deveComprar ? 'Comprar' : 'Não comprar');
			rl.close();
		});
	});
});