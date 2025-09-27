/*
	Objetivo do programa: Você está montando um cadastro para uma empresa de vendas na internet, e precisa fornecer este 'formulário de dados de clientes'.
							Não se preocupe neste momento se irá ou não guardar este dado em algum lugar.
							Pergunte e obtenha os seguintes dados e depois exiba todos na tela:
								- Nome Completo
								- Data de Nascimento
								- Cidade/Pais de Origem(Nascimento)
								- Endereco completo de onde mora
								- Pais onde reside
								- Data do Cadastro
								- Escolaridade: (Ensino Básico/Ensino Fundamental/Ensino Superior)
	Data da criacao: 2025-08-28
	Criado por: @programacaomentoria
	Ultima atualizacao: 2025-09-16
	Alterado por: @rafaelfischer
*/

import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Cadastro de Clientes');
console.log('-------------------');

let NomeCompleto: string, DataNascimento: string, CidadePaisOrigem: string, EnderecoCompleto: string, PaisResidencia: string, DataCadastro: string, Escolaridade: string;

rl.question('Nome Completo: ', (infoUser: string) => {
	NomeCompleto = infoUser;
	rl.question('Data de Nascimento: ', (infoUser: string) => {
		DataNascimento = infoUser;
		rl.question('Cidade/Pais de Origem (Nascimento): ', (infoUser: string) => {
			CidadePaisOrigem = infoUser;
			rl.question('Endereco completo de onde mora: ', (infoUser: string) => {
				EnderecoCompleto = infoUser;
				rl.question('Pais onde reside: ', (infoUser: string) => {
					PaisResidencia = infoUser;
					rl.question('Data do Cadastro: ', (infoUser: string) => {
						DataCadastro = infoUser;
						rl.question('Escolaridade (Ensino Básico/Ensino Fundamental/Ensino Superior): ', (infoUser: string) => {
							Escolaridade = infoUser;

							console.log('');
							console.log('============================');
							console.log('Dados do Cliente Cadastrado:');
							console.log('============================');
							console.log(`Nome Completo: ${NomeCompleto}`);
							console.log(`Data de Nascimento: ${DataNascimento}`);
							console.log(`Cidade/Pais de Origem: ${CidadePaisOrigem}`);
							console.log(`Endereco Completo: ${EnderecoCompleto}`);
							console.log(`Pais de Residencia: ${PaisResidencia}`);
							console.log(`Data de Cadastro: ${DataCadastro}`);
							console.log(`Escolaridade: ${Escolaridade}`);
							rl.close();
						});
					});
				});
			});
		});
	});
});