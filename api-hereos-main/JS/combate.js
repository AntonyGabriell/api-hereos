'use strict'

const getCharacter = async(id) =>  {
    const url = `https://akabab.github.io/superhero-api/api//id/${id}.json`
    const response = await fetch (url)
    const infoCharacter = await response.json()

    return infoCharacter
}


//Retornando a biografia do personagem
const getStats = async(id) => {
    const url = `https://akabab.github.io/superhero-api/api/powerstats/${id}.json`
    const response = await fetch(url);
    const powerstats = await response.json();

    return powerstats;
}

export {
    getStats,
    getCharacter
}