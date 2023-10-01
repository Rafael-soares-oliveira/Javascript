/*
Descrição

Você é um herói em um mundo mágico repleto de monstros e desafios. Sua missão agora é enfrentar inimigos e 
ganhar pontos de experiência (XP) para se tornar mais forte. A cada vitória, você ganha XP e se aproxima de 
se tornar um lendário campeão.

Tarefa: Escreva um programa simples que simule o ganho de XP após derrotar um monstro. O programa deve calcular 
e exibir a quantidade de XP ganhos com base no nível do monstro e na dificuldade da batalha.

Calculo do XP: Para calcular a quantidade de XP ganhos, o programa precisa considerar o nível do monstro e a 
dificuldade da batalha. A fórmula num1 * num2 * 100 é usada para calcular essa quantidade com base nos valores 
fornecidos.

Explicação:

num1: Este é o nível do monstro. Quanto maior o nível do monstro, mais XP você ganhará ao derrotá-lo. Portanto, 
multiplicar o nível do monstro por um valor maior ajudará a refletir o aumento da recompensa de XP para monstros 
mais poderosos.

num2: Este é o valor da dificuldade da batalha, variando de 1 a 100. Quanto maior a dificuldade da batalha, mais 
XP você deve ganhar para enfrentar um desafio maior. Multiplicar pela dificuldade ajuda a ajustar a recompensa de 
XP com base na intensidade da batalha.

100: Este é o multiplicador constante que determina a escala geral de recompensa de XP. Multiplicar pelo nível do 
monstro e pela dificuldade aumenta a recompensa em 100 vezes o valor do nível e da dificuldade.
Entrada

O nível do monstro (um número inteiro).

A dificuldade da batalha, representada por um valor de 1 a 100 (um número inteiro).
Saída

Imprima a quantidade de XP ganhos após a batalha.
*/

function randomIntFromInterval(min, max) { // Função para gerar números aleatórios
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const difEnemy = randomIntFromInterval(25, 50) // Números aleatórios referente a dificuldade do monstro, varia entre 25 e 50
const difBoss = randomIntFromInterval(75, 100) // Números aleatórios referente a dificuldade do boss, varia entre 75 e 100

const enemies = { // Armazena as informações referentes aos inimigos
    'enemy1':{
        'nivel': 1,
        'difficulty': difEnemy
    },
    'enemy2':{
        'nivel': 5,
        'difficulty': difEnemy
    },
    'enemy3': {
        'nivel': 15,
        'difficulty': difEnemy
    },
    'enemy4': {
        'nivel': 20,
        'difficulty': difEnemy
    },
    'boss1': {
        'nivel': 25,
        'difficulty': difBoss
    }
}

const inputEnemies = require('readline');
const defeatEnemy = inputEnemies.createInterface({
    input: process.stdin,
    output: process.stdout
});

defeatEnemy.question('Inimigo derrotado: ', (enemy) => {
    xp = enemies[enemy]['nivel'] * enemies[enemy]['difficulty'] * 100
    console.log('Xp ganho:', xp)
    defeatEnemy.close()
})
