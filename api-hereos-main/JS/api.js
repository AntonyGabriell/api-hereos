const getAllHeroes = async()=>{
    const url = 'https://akabab.github.io/superhero-api/api/all.json'

    const response = await fetch(url)

    const characters = response.json()

    return characters
}

const getHeroe = async(id)=>{
    const url = `https://akabab.github.io/superhero-api/api//id/${id}.json`
    const response = await fetch (url)
    const infoCharacter = await response.json()
    
    return infoCharacter
}

const getBiographyHero = async(id)=>{
    const url = `https://akabab.github.io/superhero-api/api/biography/${id}.json`
    const response = await fetch(url)
    const biography = await response.json()

    return biography
}

const getStats = async(id) => {
    const url = `https://akabab.github.io/superhero-api/api/powerstats/${id}.json`
    const response = await fetch(url)
    const powerstats = await response.json()

    return powerstats
}

export{
    getAllHeroes,
    getHeroe,
    getBiographyHero,
    getStats
}