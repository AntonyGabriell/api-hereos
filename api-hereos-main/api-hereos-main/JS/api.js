const getAllHeroes = async()=>{
    const url = 'https://akabab.github.io/superhero-api/api/all.json'

    const response = await fetch(url)

    const characters = response.json()

    return characters
}

export{
    getAllHeroes
}