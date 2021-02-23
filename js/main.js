//constant
const imagesList = [
    {
        src: 'imgs/one.svg',
        name: 'one'
    },
    {
        src: 'imgs/two.svg',
        name: 'two'
    },
    {
        src: 'imgs/three.svg',
        name: 'three'
    },
    {
        src: 'imgs/four.svg',
        name: 'four'
    }, 
    {
        src: 'imgs/one.svg',
        name: 'one'
    },
    {
        src: 'imgs/one.svg',
        name: 'one'
    },
   {
        src: 'imgs/three.svg',
        name: 'three'
    },
   {
        src: 'imgs/four.svg',
        name: 'four'
    }  
]
const imgSrcs = ['imgs/one.svg','imgs/one.svg','imgs/two.svg','imgs/two.svg','imgs/three.svg','imgs/three.svg','imgs/four.svg','imgs/four.svg'];

let numberOfHearts;


// cached elements
const msg = document.getElementById('result');
const heartsNumber = document.getElementById('heartsImg');
const imgsContainers = document.querySelector('.container');
// const cards = document.querySelectorAll('.cards');
// console.log(cards)
const btnRestart = document.querySelector('button');



init();

function init(){
    console.log('init is working')
    numberOfHearts = 3
    
    render();
}

function render(){
    
    const shuffleCards = shuffle(imgSrcs);
    console.log(shuffleCards)
    console.log(shuffleCards.length)
    for (let i = 0; i < shuffleCards.length; i++){
        const img = document.createElement('img');
        img.setAttribute('src',shuffleCards[i]);
        imgsContainers.appendChild('img');

    }
    console.log('img') 





}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }



