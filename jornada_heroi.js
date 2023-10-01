/*
Jornada do Herói
Você é um jovem herói que embarca em uma jornada épica para derrotar o temido dragão que aterroriza o reino.
No entanto, você precisa atravessar uma floresta perigosa para chegar à caverna do dragão. Cada passo é crucial,
e sua jornada será determinada pela lógica afiada que você possuir.

Tarefa
Escreva um algoritmo que simule a jornada do herói pela floresta. O herói começa em uma posição inicial
e deve dar uma série de passos para atravessar a floresta até a caverna do dragão.

Entrada
A posição inicial do herói na floresta (um número inteiro). O número total de passos que o herói deve dar
(um número inteiro).

Saída
Imprima a posição final do herói após dar a quantidade de passos especificada.

Exemplos
A tabela abaixo representa exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se
de testar seu programa com esses exemplos e com outros casos possíveis.
Entrada  |  Saída
-------------------
2        |  Posição final do herói: 5
3        |
-------------------
15       |  Posição final do herói: 18
3        |
-------------------
10       |  Posição final do herói: 16
6        |
*/

const posicao = require('readline')

const entradaPosicao = posicao.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaPosicao.question('Digite a posição inicial do herói: ',(posicaoInicial) => {
    entradaPosicao.question('Digite a quantidade de passos que o herói deu: ',(totalPassos) => {
        posicaoFinal = parseInt(posicaoInicial) + parseInt(totalPassos)
        console.log(`Posicao final do heroi: ${posicaoFinal}`)
        entradaPosicao.close()
    })
})