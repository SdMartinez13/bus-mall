'use strict';

//Global Variables

let voteCount = 5;
let allImgs = [];
// let indexArray = [];


//DOM References

let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

//let showResultsBtn = document.getElementById('show-results-btn');
// let resultsList = document.getElementById('results-list');

// Canvas reference



//Constructor

function Image(name, fileExtention = 'jpg'){
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = `assets/${name}.${fileExtention}`;

  allImgs.push(this);

}

new Image('sweep', 'png');
new Image('bag');
new Image('banana');
new Image('bathroom');
new Image('boots');
new Image('breakfast');
new Image('bubblegum');
new Image('chair');
new Image('cthulhu');
new Image('dog-duck');
new Image('dragon');
new Image('pen');
new Image('pet-sweep');
new Image('scissors');
new Image('shark');
new Image('tauntaun');
new Image('unicorn');
new Image('water-can');
new Image('wine-glass');

//Helper Function

//w3resources and class demo - Math.floor(Math.random()*items.length)

function getRandomIndex(){
  return Math.floor(Math.random()* allImgs.length);
}
let indexArray = [];

function renderImgs(){

  while(indexArray.length < 6){
    let randomNum = getRandomIndex();
    if(!indexArray.includes(randomNum)){
      indexArray.push(randomNum);
    }
  }

  let imgOneIndex = indexArray.shift();
  let imgTwoIndex = indexArray.shift();
  let imgThreeIndex = indexArray.shift();


  // let imgOneIndex = getRandomIndex();
  // let imgTwoIndex = getRandomIndex();
  // let imgThreeIndex = getRandomIndex();



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

imgContainer.addEventListener('click', handleClick);
//showResultsBtn.addEventListener('click', handleShowResults);



//Function to render chart

function renderChart() {
  let imgName = [];
  let imgVotes = [];
  let imgViews = [];

  for(let i = 0; i < allImgs.length; i++){
    imgName.push(allImgs[i].name);
    imgVotes.push(allImgs[i].votes);
    imgViews.push(allImgs[i].views);
  }
  let ctx = document.getElementById('my-chart');


  let myChartObj = {
    type: 'bar',
    data: {
      labels: imgName,
      datasets: [{
        label: '# of Votes',
        data: imgVotes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: imgViews,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };


  let myChart = new Chart(ctx, myChartObj);

}

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
    //showResultsBtn.hidden = false;
    //showResultsBtn.addEventListener('click', handleShowResults);
    renderChart();
  }

}



//function handleShowResults(){
//if(voteCount === 0){


// for(let i = 0; i < allImgs.length; i++){
//   let LiElement = document.createElement('li');
//   LiElement.textContent = `${allImgs[i].name} was shown ${allImgs[i].views} times and voted for ${allImgs[i].votes} times.`;
//   resultsList.appendChild(LiElement);
//}
//showResultsBtn.removeEventListener('click', handleShowResults);
//showResultsBtn.hidden = true;

//}


//Event Listeners



