//constant
const cardLists = [
    {
        src: 'imgs/one.svg',
        name: 'one',
        back:'imgs/back.svg'
    },
    {
        src: 'imgs/two.svg',
        name: 'two',
        back:'imgs/back.svg'
    },
    {
        src: 'imgs/three.svg',
        name: 'three',
        back:'imgs/back.svg'
    },
    {
        src: 'imgs/four.svg',
        name: 'four',
        back:'imgs/back.svg'
    }, 
    {
        src: 'imgs/one.svg',
        name: 'one',
        back:'imgs/back.svg'
    },
    {
        src: 'imgs/two.svg',
        name: 'two',
        back:'imgs/back.svg'
    },
   {
        src: 'imgs/three.svg',
        name: 'three',
        back:'imgs/back.svg'
    },
   {
        src: 'imgs/four.svg',
        name: 'four',
        back:'imgs/back.svg'
    }  
]
// let cards = shuffle(cardLists);

// const imgSrcs = ['imgs/one.svg','imgs/one.svg','imgs/two.svg','imgs/two.svg','imgs/three.svg','imgs/three.svg','imgs/four.svg','imgs/four.svg'];
let cards;

let numberOfHearts;
let chosenCards;
let count;
let delay;


// cached elements

const deck = document.getElementById('deck')

const container = document.querySelector('.container');

// const selectedEls = document.querySelectorAll('.selected');

document.getElementById('cardDivs')
  .addEventListener('click', handleCardClick);


init();

function init(){
    
    console.log('init is working')
    cards = shuffle(cardLists);
    numberOfHearts = 3
    count = 0
    delay= 500
    chosenCards = []
    
    render();
   
}

function render(){

// for (let i = 0; i < cards.length; i++){
//     const card = document.createElement('div');
//     card.setAttribute('class','card');
//     card.dataset.name = cards[i].name;
//     card.style.backgroundImage = `url(${cards[i].src})`;
//     container.appendChild(card);
// }
for (let i = 0; i < cards.length; i++){
        const card = document.createElement('div');
        card.setAttribute('class','card');
        card.dataset.name = cards[i].name;

        const front = document.createElement('div')
        front.setAttribute('class' , 'front');
        front.style.backgroundImage = `url(${cards[i].back})`;

        const back = document.createElement('div')
        back.setAttribute('class' , 'back');
        back.style.backgroundImage = `url(${cards[i].src})`;
       
        container.appendChild(card)
        card.appendChild(front)
        card.appendChild(back)
  }
}


function handleCardClick(e){
    // console.log('handleCardClick its working ')
    // console.log(e.target)
    
    let cardClicked = e.target;

    if (cardClicked.nodeName === 'SECTION') {
        return}
    
    // add two clicked cards in an array to check if they are match or not
    if (count < 2) {
        count++
        
        cardClicked.classList.add('selected');
        
        chosenCards.push(cardClicked);
    }
        // comparing two item 
        console.log(chosenCards.length,'chosenCards length')
        if (count === 2 ){
            console.log(chosenCards[0].parentNode.dataset.name,'chosencards number 1')
            console.log(chosenCards[1].parentNode.dataset.name,'chosencards number 2')
            if (chosenCards[0].parentNode.dataset.name === chosenCards[1].parentNode.dataset.name){
                    // match();
                    setTimeout(match, delay)
                }
                else{
                    // unmatch();
                    setTimeout(unmatch, delay)
                }
        }
        
    
    }
function match(){
    const selectedEls = document.querySelectorAll('.selected');
    console.log(selectedEls,'els with selected')
    selectedEls.forEach((item) => {
        // if (item.classList.unmatch){
        //     item.classList.remove('unmatch');
        // }
        item.classList.add('match')
        console.log(item)
    })
    console.log(selectedEls,'with match')
    setTimeout(clearChosenCards, delay)
    // clearChosenCards();
    

}

function unmatch(){
    const selectedEls = document.querySelectorAll('.selected');
    selectedEls.forEach((item) => {
        item.classList.add('unmatch')
        console.log(item)
        setTimeout(clearChosenCards, delay)
        // clearChosenCards();
    })
    console.log(selectedEls,'with unmatch')
    
}

function clearChosenCards(){
    const selectedEls = document.querySelectorAll('.selected');
    for (let i=0 ; i<2 ;i++){
        chosenCards.pop(i);
    }
    count = 0;
    selectedEls.forEach((item) => {
        item.classList.remove('selected');
        item.classList.remove('unmatch');
        // console.log(item)
    })
 

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



