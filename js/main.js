//constant
const cardLists = [
    {
        src: 'imgs/one.svg',
        name: 'one',
        flip: false,
        facedown:'true'
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
// let cards = shuffle(cardLists);

// const imgSrcs = ['imgs/one.svg','imgs/one.svg','imgs/two.svg','imgs/two.svg','imgs/three.svg','imgs/three.svg','imgs/four.svg','imgs/four.svg'];
let cards;

let numberOfHearts;
let chosenCards;
let count;


// cached elements

const deck = document.getElementById('deck')

const container = document.querySelector('.container');

document.getElementById('cardDivs')
  .addEventListener('click', handleCardClick);


init();

function init(){
    
    console.log('init is working')
    cards = shuffle(cardLists);
    numberOfHearts = 3
    count = 0
    openedCards = []
    chosenCards = []
    
    render();
   
}

function render(){
     
//     for (let i = 0; i < cards.length; i++){
//         // console.log(cards[i].)
//         const imgCard = document.createElement('img');
//         console.log(cards[i].flip)
//         if (cards[i].flip){
//             imgCard.setAttribute('src',cards[i].src);
//             imgCard.setAttribute('class', 'open')
//             imgCard.setAttribute('class', 'disabled')
//         }
//         else{
//             imgCard.setAttribute('src','imgs/back.svg');
//         }
//         imgCard.setAttribute('id',i);
//         cardContainers.appendChild(imgCard);
//     }
//     console.log(cardContainers,'imgcontainer')
     
// }
for (let i = 0; i < cards.length; i++){
    const card = document.createElement('div');
    card.setAttribute('class','card');
    card.dataset.name = cards[i].name;
    card.style.backgroundImage = `url(${cards[i].src})`;
    container.appendChild(card);
}
console.log(container)
}


function handleCardClick(e){
    console.log('handleCardClick its working ')
    console.log(e.target)
    
    let cardClicked = e.target;
    chosenCards = [];
    
    if (count < 2) {
        count++

        cardClicked.classList.add('selected');
        // cardClicked.classList.add('disable');
        // console.log(cardClicked.dataset.name);
        chosenCards.push(cardClicked);
        console.log(chosenCards,'chosencards')

        if (chosenCards[0].dataset.name === chosenCards[1].dataset.name){
                    match();
                }
                else{
                    unmatch();
                }
        
      }
    console.log(chosenCards,'chosencards')
    console.log(chosenCards[0].dataset.name)
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



