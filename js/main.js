//constant
const cardLists = [
    {
        src: 'imgs/one.svg',
        name: 'one',
        flip: false,
        facedown:'hidden'
    },
    {
        src: 'imgs/two.svg',
        name: 'two',
        flip: false,
        facedown:true
    },
    {
        src: 'imgs/three.svg',
        name: 'three',
        flip: false,
        facedown:true
    },
    {
        src: 'imgs/four.svg',
        name: 'four',
        flip: false,
        facedown:true
    }, 
    {
        src: 'imgs/one.svg',
        name: 'one',
        flip: false,
        facedown:true
    },
    {
        src: 'imgs/one.svg',
        name: 'one',
        flip: false,
        facedown:true
    },
   {
        src: 'imgs/three.svg',
        name: 'three',
        flip: false,
        facedown:true
    },
   {
        src: 'imgs/four.svg',
        name: 'four',
        flip: false,
        facedown:true
    }  
]

// const imgSrcs = ['imgs/one.svg','imgs/one.svg','imgs/two.svg','imgs/two.svg','imgs/three.svg','imgs/three.svg','imgs/four.svg','imgs/four.svg'];

let numberOfHearts;
let chosenCards;


// cached elements
const msg = document.getElementById('result');
const heartsNumber = document.getElementById('heartsImg');
const cardContainers = document.querySelector('.container');

const btnRestart = document.querySelector('button');

document.getElementById('cards')
  .addEventListener('click', handleCardClick);


init();

function init(){
    console.log('init is working')
    numberOfHearts = 3
    openedCards = []
    chosenCards = []
    
    render();
   
}

function render(){
    
    const cards = shuffle(cardLists);
    for (let i = 0; i < cards.length; i++){
        // console.log(cards[i].)
        const imgCard = document.createElement('img');
        console.log(cards[i].flip)
        if (cards[i].flip){
            imgCard.setAttribute('src',cards[i].src);
            imgCard.setAttribute('class', 'open')
            imgCard.setAttribute('class', 'disabled')
    
        }
        else{
            imgCard.setAttribute('src','imgs/back.svg');
        }
        imgCard.setAttribute('id',i);
        cardContainers.appendChild(imgCard);
    }
    console.log(cardContainers,'imgcontainer')
     
}
function handleCardClick(e){
    console.log('handleCardClick its working ')
    console.log(e.target.id)
    let id = e.target.id;

    // if(!cardLists[e.target.id].flip){
    //     cardLists[e.target.id].flip=true;
        
    // }
    
    console.log(cardLists[e.target.id].flip)
    
    


}
//shuflle function to randomize the array
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



