'use strict'

import {getAllHeroes} from './api.js'

const heroes = await getAllHeroes()

const imagesHeroes = function (array){
    const img = document.createElement('img')
    img.src = array.images.lg
    img.id = array.name

    const a = document.createElement('a')
    a.href = "../HTML/informations.html "
    a.classList.add('link')

    a.appendChild(img)
    return a
}
const pesquisar = async () => {
    const galeria = document.getElementById('caixa-main')
    const tagImg = heroes.map(imagesHeroes)
    galeria.replaceChildren(...tagImg)
}

pesquisar()

const keyPress = async(event)=>{
    if(event.key == 'Enter'){
        localStorage.setItem('nomePersonagem', event.target.value)
        window.location.href = '../HTML/informations.html'
    }
}

document.querySelector('.txtBusca').addEventListener('keypress', keyPress)

document.querySelector('.caixa-main').addEventListener('click', (event)=>{
    localStorage.setItem('nomePersonagem', event.target.id)
})

document.querySelector('.button-comb').addEventListener('click', (event)=>{
    window.location.href = '../HTML/combate.html'
})