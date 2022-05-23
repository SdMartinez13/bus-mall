'use strict';

//Global Variables

let voteCount = 25;
let allImgs = [];

//DOM References

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let showResultsBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('results-list');

//Constructor

function Image(name, fileExtention = 'jpg'){
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = `assets/${name}.${fileExtention}`;

  allImgs.push(this);

}

new Image('Sweep', 'png');
new Image('Bag');
new Image('Banana');
new Image('Bathroom');
new Image('Boots');
new Image('Breakfast');
new Image('Bubblegum');
new Image('Chair');
new Image('Cthulhu');
new Image('Dog-duck');
new Image('Dragon');
new Image('Pen');
new Image('Pet-sweep');
new Image('Scissors');
new Image('Shark');
new Image('Tauntaun');
new Image('Unicorn');
new Image('Water-can');
new Image('Wine-glass');

//Helper Function

//w3resources and class demo - Math.floor(Math.random()*items.length)

function getRandomIndex(){
  return Math.floor(Math.random()*allImgs.length);
}

function renderImgs(){

  let imgOneIndex = getRandomIndex();
  let imgTwoIndex = getRandomIndex();
  let imgThreeIndex = getRandomIndex();

  while(imgOneIndex === imgTwoIndex){
    imgTwoIndex = getRandomIndex();
  }

  while(imgOneIndex === imgThreeIndex){
    imgThreeIndex = getRandomIndex();
  }

  while(imgTwoIndex === imgThreeIndex){
    imgThreeIndex = getRandomIndex();
  }

  imgOne.src = allImgs[imgOneIndex].photo;
  imgOne.alt = allImgs[imgOneIndex].name;
  allImgs[imgOneIndex].views++;

  imgTwo.src = allImgs[imgTwoIndex].photo;
  imgTwo.alt = allImgs[imgTwoIndex].name;
  allImgs[imgTwoIndex].views++;

  imgThree.src = allImgs[imgThreeIndex].photo;
  imgThree.alt = allImgs[imgThreeIndex].name;
  allImgs[imgThreeIndex].views++;

}

renderImgs();

//Event Handlers

function handleClick(event){
  voteCount--;


  let imgClicked = event.target.alt;

  for(let i = 0; i < allImgs.length; i++){
    if(imgClicked === allImgs[i].name){
      allImgs[i].votes++;
    }
  }

  renderImgs();

  if(voteCount === 0){
    imgContainer.removeEventListener('click', handleClick);

  }

}

function handleShowResults(){
  if(voteCount === 0){
    for(let i = 0; i < allImgs.length; i++){
      let LiElement = document.createElement('li');
      LiElement.textContent = `${allImgs[i].name} was shown ${allImgs[i].views} times and voted for ${allImgs[i].votes} times.`;
      resultsList.appendChild(LiElement);
    }
  }
}

//Event Listeners

imgContainer.addEventListener('click', handleClick);
showResultsBtn.addEventListener('click', handleShowResults);








