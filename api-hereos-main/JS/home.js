'use strict'

import {getAllHeroes} from './api.js'

const heroes = await getAllHeroes()

const imagesHeroes = function (array){
    
    const divImgs = document.createElement('div')
    divImgs.classList.add('div-imgs')
    const img = document.createElement('img')
    img.src = array.images.lg

    const a = document.createElement('a')
    a.href = "#"

    divImgs.appendChild(a)
    divImgs.appendChild(img)
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

document.querySelector('.txtBusca').addEventListener('keypress', keyPress)