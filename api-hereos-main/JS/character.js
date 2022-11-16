'use strict'

import {getInfo,getCharacter} from "./characterEX.js"

// let information = await getInfo()
const containerCharacter = async (variavel) => {
    const container = document.querySelector('#selection')
    const div = document.createElement('div')

    div.classList.add('contents')
    div.nome = variavel.nome
    div.innerHTML =`
    <div class= 'content-hero'>
    <h1 class="name-hero"> ${variavel.name}</h1>
    <img src="${variavel.images.sm}" class="hero-img"></img>
    </div>
    `
    container.appendChild(div)

    localStorage.setItem('caracter', container)
}
const character = await getCharacter(1)
containerCharacter(character)

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
const character2 = await getInfo(1)
biographyCharacter(character2)