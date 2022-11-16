'use strict'

import { getAllHeroes } from "./api.js"
import {getInfo,getCharacter} from "./characterEX.js"

// let information = await getInfo()

const container = (atributes)=>{
    const container = document.getElementById('selection')
    const div = document.createElement('div')
    div.classList.add('contents')

    const h1 = document.createElement('h1')
    h1.classList.add('name-hero')
    h1.textContent = atributes.name

    const img = document.createElement('img')
    img.classList.add('hero-img')
    img.src = atributes.img

    div.appendChild(h1)
    div.appendChild(img)
    container.appendChild(div)
}

const idCharacter = localStorage.getItem('idCharacter')
console.log(idCharacter)

const buscarNameCharacter = function (array, id) {
    let name
        if (array.id == id) {
            name = baseP.name
        }

    return name
}

console.log(buscarNameCharacter(idCharacter, await getAllHeroes()))

const biographyCharacter = async (atributes) => {
    const container = document.querySelector('#selection2')
    const div = document.createElement('div')

    div.classList.add('information')
    div.atributes = atributes.nome
    div.innerHTML =`
    <div class="information-hero">
    <h1>Full Name:</h1>
        <span class = 'atributes-character'> ${atributes.fullName}</span>
    <h1>Alter Egos:</h1>
        <span class = 'atributes-character'> ${atributes.alterEgos}</span>
    <h1>Aliases:</h1>
    <span class = 'atributes-character'> ${atributes.aliases}</span>
    <h1>Place of birth:</h1>
    <span class = 'atributes-character'> ${atributes.placeOfBirth}</span>
    <h1>First appearance:</h1>
        <span class = 'atributes-character'> ${atributes.firstAppearance}</span>
    <h1>Publisher:</h1>
        <span class = 'atributes-character'> ${atributes.publisher}</span>
    <h1>Alignment:</h1>
    <span class = 'atributes-character'> ${atributes.alignment}</span>
</div> 
    `
    container.appendChild(div)

    localStorage.setItem('caracter', container)
}