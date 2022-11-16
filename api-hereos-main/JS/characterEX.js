'use strict'

//Retornando todas as informações do personagem
const getCharacter = async(id) =>  {
    const url = `https://akabab.github.io/superhero-api/api//id/${id}.json`
    const response = await fetch (url)
    const infoCharacter = await response.json()

    return infoCharacter
}


//Retornando a biografia do personagem
const getInfo = async(id) => {
    const url = `https://akabab.github.io/superhero-api/api/biography/${id}.json`
    const response = await fetch(url);
    const biography = await response.json();

    return biography;
}

export {
    getInfo,
    getCharacter
}

