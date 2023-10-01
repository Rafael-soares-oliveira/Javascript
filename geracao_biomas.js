/*
Descrição
Você é um mestre construtor em um mundo de blocos e tem a tarefa de gerar biomas em diferentes regiões 
do mundo. Cada bioma tem características únicas, como tipos de solo, vegetação e clima.

Tarefa: Sua tarefa é coletar minérios enquanto ataca uma rocha com sua picareta. Use loops e lógica de 
programação para representar cada golpe na rocha e determinar qual minério foi obtido.

Entrada
O programa irá solicitar que você digite um número inteiro positivo representando a quantidade de golpes 
que você deseja dar com a picareta.

Saída
Para cada golpe que você der, o programa exibirá uma mensagem indicando o resultado do golpe. Será mostrado 
o número do golpe e o minério obtido, que pode ser 1: Carvao, 2: Ferro, 3: Diamante e 4: Pedra.
*/

const readline = require('readline');
const inputGolpes = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inputGolpes.question('Quantidade de golpes: ', (quantidadeGolpes) => {

    let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"]

    for (let i = 0; i < quantidadeGolpes; i++) {
        let minaIndex = (i % minerais.length)
        console.log((i+1) + ": " +  minerais[minaIndex])
        //console.log(minerais[minaIndex])
    }
    inputGolpes.close()
})