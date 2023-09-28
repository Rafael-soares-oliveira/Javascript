/*
Calculadora de partidas rankeadas

O que deve ser utilizado
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
*/

/*
Objetivo
Crie uma função que recebe com parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso 
retorne para uma variável, o saldo de rankeadas deve ser feito através do cálculo (vitórias - derrotas)

- Se vitórias for menor do que 10 = Ferro
- Se vitórias for entre 11 e 20 = Bronze
- Se vitórias for entre 21 e 50 = Prata
- Se vitórias for entre 51 e 80 = Ouro
- Se vitórias for entre 81 e 90 = Diamante
- Se vitórias for entre 91 e 100 = Lendário
- Se vitórias for maior ou igual a 101 = Imortal
*/

/*
Saída
Ao final deve se exibir uma mensagem:
- "O Herói tem de saldo de **{winningBalance}** está no nível de **{nivel}**"
*/


nivel = ""

function main(nivel){

    const inputCombat = require('readline');
    const dataCombat = inputCombat.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    dataCombat.question('Digite o número de vitórias: ', (victory) => {
        dataCombat.question('Digite o número de derrotas: ', (defeat) => {
            let winningBalance = victory - defeat
            if (winningBalance <= 10){
                nivel = "Ferro"
            }
            else if(winningBalance > 10 && winningBalance <= 20){
                nivel = "Bronze"
            }
            else if(winningBalance > 20 && winningBalance <= 50){
                nivel = "Prata"
            }
            else if(winningBalance > 50 && winningBalance <= 80){
                nivel = "Ouro"
            }
            else if(winningBalance > 80 && winningBalance <= 90){
                nivel = "Diamante"
            }
            else if(winningBalance > 90 && winningBalance <= 100){
                nivel = "Lendário"
            }
            else if(winningBalance > 100){
                nivel = "Imortal"
            }
        
            console.log(`O herói tem saldo de ${winningBalance} e está no nível ${nivel}`)
            dataCombat.close()
        })
    })
}

main()