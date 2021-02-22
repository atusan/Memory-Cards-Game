//constant
const imgsLookup = {
    one:{
        src: 'imgs/one.svg',
        name: 'one'
    },
    two:{
        src: 'imgs/two.svg',
        name: 'two'
    },
    three:{
        src: 'imgs/three.svg',
        name: 'three'
    },
    four:{
        src: 'imgs/four.svg',
        name: 'four'
    }  
}

let numberOfHearts;


// cached elements
const msg = document.getElementById('result');
const heartsNumber = document.getElementById('heartsImg');
const imgsContainers = document.querySelector('.container');
const btnRestart = document.querySelector('button');

const imgsPlayCards = document.getElementById('imgs')

// event listeners
// btnRestart.addEventListener('click',restart);
// imgsPlayCards.addEventListener('click', flipCard);

init();

function init(){
    console.log('init is working')
    numberOfHearts = 3
    for (let img in imgsLookup){
        let cardImg = document.createElement('img');
        cardImg.setAttribute('src','imgs/back.svg');
    }



}



