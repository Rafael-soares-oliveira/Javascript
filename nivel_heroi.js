/* 
Desafio Classificador de Nível de Herói
O que deve ser utilizado?
- Variáveis
- Operadores
- Laços de Repetição
- Estruturas de decisões
*/

/*
Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize 
uma estrutura de decisão para apresentar alguma das mensagens abaixo:

- Se XP for menor do que 1.000 = Ferro
- Se XP for entre 1.001 e 2.000 = Bronze
- Se XP for entre 2.001 e 5.000 = Prata
- Se XP for entre 5.001 e 7.000 = Ouro
- Se XP for entre 7.001 e 8.000 = Platina Diamante
- Se XP for entre 8.001 e 9.000 = Ascendente
- Se XP for entre 9.001 e 10.000 = Imortal
- Se XP for maior do que 10.001 = Radiante
*/

/*
Saída
Ao final deve exibir uma mensagem:
"O herói de nome **{nome}** está no nível **{nivel}**"
*/

nivel = ""

const entradaDados = require('readline');

const dadosHeroi = entradaDados.createInterface({
    input: process.stdin,
    output: process.stdout
});

dadosHeroi.question('Digite o nome do herói: ', (nome) => {
    dadosHeroi.question('Digite o XP atual do herói : ', (xp) => {
        if (xp <= 1000){
            nivel = "Ferro"
        }
        else if(xp > 1000 && xp <= 2000){
            nivel = "Bronze"
        }
        else if(xp > 2000 && xp <= 5000){
            nivel = "Prata"
        }
        else if(xp > 5000 && xp <= 7000){
            nivel = "Ouro"
        }
        else if(xp > 7000 && xp <= 8000){
            nivel = "Platina Diamante"
        }
        else if(xp > 8000 && xp <= 9000){
            nivel = "Ascendente"
        }
        else if(xp > 9000 && xp <= 10000){
            nivel = "Imortal"
        }
        else if(xp > 10000){
            nivel = "Radiante"
        }
        console.log(`O herói de nome ${nome} está no nível ${nivel}`)
        dadosHeroi.close()
    })
})
