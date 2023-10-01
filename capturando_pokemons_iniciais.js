/*
Descrição
No mundo dos jogos Pokémon, os treinadores começam sua jornada escolhendo um dos três Pokémons iniciais: 
Bulbasaur, Charmander e Mewtwo. Cada treinador escolhe um dos quatro pokemons. Seu desafio é criar uma 
solução que permita ao jogador escolher um dos Pokémons iniciais e exibir uma mensagem de boas-vindas e o 
Pokémon escolhido.

Entrada
Você receberá um número inteiro que representa a escolha do treinador: 1 para Bulbasaur, 2 para Charmander, 
4 Pikachu e 5 para Mewtwo.

Saída
A saída deve ser uma mensagem de boas-vindas que inclua o nome do Pokémon escolhido.
*/


function choosePokemon(){

    console.log('\n','Escolha seu Pokemon inicial', '\n', '1 - Bulbasaur', '\n', '2 - Charmander', '\n', '4 - Pikachu', '\n', '5 - Mewtwo')
    
    const readline = require('readline');
    const firstPokemon = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    firstPokemon.question('Pokemon: ', (numberPokemon) => {

        if (numberPokemon == 1) {
            pokemon = 'Bulbasaur'
            console.log('Pokemon escolhido:', pokemon)
            firstPokemon.close()
        }
        else if (numberPokemon == 2) {
            pokemon = 'Charmander'
            console.log('Pokemon escolhido:', pokemon)
            firstPokemon.close()
        }
        else if (numberPokemon == 4) {
            pokemon = 'Pikachu'
            console.log('Pokemon escolhido:', pokemon)
            firstPokemon.close()
        }
        else if (numberPokemon == 5) {
            pokemon = 'Mewtwo'
            console.log('Pokemon escolhido:', pokemon)
            firstPokemon.close()
        }
        else {
            console.log('Pokemon não disponível')
            firstPokemon.close()
            choosePokemon()
        }
    })
}

choosePokemon()