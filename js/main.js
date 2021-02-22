//constant
const imgsLookup = [
    {
        imageUrl: 'imgs/one.svg',
        name: 'scissors'
    },
    {
        imageUrl: 'imgs/two.svg',
        name: 'rock'
    },
    {
        imageUrl: 'imgs/three.svg',
        name: 'paper'
    },
    {
        imageUrl: 'imgs/four.svg',
        name: 'scissors'
    },
    {
        imageUrl: 'imgs/one.svg',
        name: 'scissors'
    },
    {
        imageUrl: 'imgs/two.svg',
        name: 'rock'
    },
    {
        imageUrl: 'imgs/three.svg',
        name: 'paper'
    },
    {
        imageUrl: 'imgs/four.svg',
        name: 'scissors'
    },
]

let numberOfHearts;
let result;

// cached elements
const result = document.getElementById('result');
const heartsNumber = document.getElementById('heartsImg');
const imgsContainers = document.querySelector('.container');
const btnRestart = document.querySelector('button');

const imgsPlayCards = document.getElementById('imgs')


