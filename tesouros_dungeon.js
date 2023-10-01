/*
Descrição
Sua missão é vasculhar as salas da masmorra em busca de recompensas lendárias e desafios perigosos. 
Cada sala pode conter monstros formidáveis, tesouros preciosos ou ambos. Use suas habilidades estratégicas 
para enfrentar as ameaças e coletar os tesouros!

Tarefa: Escreva um programa que simule sua jornada heróica pela masmorra. O programa deve percorrer 
cada sala e verificar se há tesouros ou monstros. Se você encontrar um tesouro, colecionará a recompensa.
Se encontrar um monstro, terá que derrotá-lo para continuar.

Atenção
Em nossa resolução utilizamos a função.includes() do JavaScript para verificar se um número (representando 
a sala atual) está presente nos arrays salasComTesouro e salasComMonstro.
Entrada

O número total de salas no dungeon (um número inteiro).

Saída
Sempre que encontrar um tesouro, imprima " Tesouro na sala X!".
Sempre que encontrar um monstro, imprima "Monstro na sala X!".
*/

const readline = require('readline')

const inputSalas = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

inputSalas.setPrompt('Sala atual: ') // Também é possível utilizar inputSalas.question('texto',totalSalas) =>{ }
inputSalas.prompt()
inputSalas.on('line', (totalSalas) => {

    const salasComTesouro = [2, 4, 7] // Salas que possuem 
    const salasComMonstro = [3, 6, 8]

    for (let sala = 1; sala <= totalSalas; sala++) {
        const temTesouro = salasComTesouro.includes(sala)
        const temMonstro = salasComMonstro.includes(sala)

        if (temTesouro) {
            console.log("Tesouro na sala " + sala + "!")
        } else if (temMonstro) {
            console.log("Monstro na sala " + sala + "!")
        }
    }
    inputSalas.close()
})