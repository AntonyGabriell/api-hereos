'use strict'

import {getAllHeroes} from './api.js'

const heroes = await getAllHeroes()

const imagesHeroes = function (array){
    
    const divImgs = document.createElement('div')
    divImgs.classList.add('div-imgs')

    const img = document.createElement('img')
    img.src = array.images.lg
    img.id = array.id
    img.classList.add('heroes-img')

    const a = document.createElement('a')
    a.href = "../HTML/informations.html"

    a.appendChild(img)
    divImgs.appendChild(a)
    return divImgs
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

const redirectPage = async(event)=>{
    localStorage.setItem('idCharacter', event.target.id)
}

document.querySelector('.txtBusca').addEventListener('keypress', keyPress)

document.querySelector('.caixa-main').addEventListener('click', redirectPage)