'use strict'

import {getAllHeroes, getHeroe, getBiographyHero} from "./api.js"

let nameHeroe = localStorage.getItem('nomePersonagem')
let allHeroes = await getAllHeroes()

const searchId = (nome, array)=>{
    let id

    array.forEach(baseA=>{
        if(baseA.name.toLowerCase() == nome.toLowerCase()){
            id =baseA.id
        }
    })

    return id
}

let id = searchId(nameHeroe, allHeroes)

const containerHero = async (variavel)=>{
    const container = document.getElementById('selection')

    const div = document.createElement('div')
    div.classList.add('contents')

    const divContent = document.createElement('div')
    divContent.classList.add('content-hero')

    const h1 = document.createElement('h1')
    h1.textContent = variavel.name
    h1.classList.add('name-hero')

    const img = document.createElement('img')
    img.src = variavel.images.lg
    img.classList.add('hero-img')

    divContent.appendChild(h1)
    divContent.appendChild(img)
    div.appendChild(divContent)

    container.appendChild(div)
}

containerHero(await getHeroe(id))

const biographyCharacter = async (atributes) => {
    const container = document.querySelector('#selection2')
    const div = document.createElement('div')
    const divInfo = document.createElement('div')
    divInfo.classList.add('information-hero')

    const spn1 = document.createElement('span')
    spn1.textContent = `Full name: ${atributes.fullName}`
    const spn2 = document.createElement('span')
    spn2.textContent = `Aliases: ${atributes.aliases}`
    const spn3 = document.createElement('span')
    spn3.textContent = `Place of Birth: ${atributes.placeOfBirth}`
    const spn4 = document.createElement('span')
    spn4.textContent = `Alter Egos: ${atributes.alterEgos}`
    const spn5 = document.createElement('span')
    spn5.textContent = `First appearance: ${atributes.firstAppearance}`
    const spn6 = document.createElement('span')
    spn6.textContent = `Publisher: ${atributes.publisher}`
    const spn7 = document.createElement('span')
    spn7.textContent = `Alignment: ${atributes.alignment}`

    div.classList.add('information')
    divInfo.appendChild(spn1)
    divInfo.appendChild(spn2)
    divInfo.appendChild(spn3)
    divInfo.appendChild(spn4)
    divInfo.appendChild(spn5)
    divInfo.appendChild(spn6)
    divInfo.appendChild(spn7)

    div.appendChild(divInfo)

    container.appendChild(div)
}

biographyCharacter(await getBiographyHero(id))