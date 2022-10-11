const emptyPage = document.querySelector(".container");
const startPage = document.querySelector(".startPage");
const gamePage = document.querySelector(".gamePage");

const startBtn = document.querySelector(".startBtn");
const paragrafDiv = document.querySelector(".paragrafDiv");
var insText = "Welcome to the classic game that is well known all over the world. You have one simple task, save the man from getting hanged. In order to do so, youll have to guess what the hidden word is. Simply put the letter in the inputfield that you believe should be in the hidden word. If your guess is incorrect, then the man will get closer to get hanged. You have 5 attempts before its to late from saving him. If you succeed, the man will live another day."

let fromI = 0;


/**********JUST INSERTS THE INSTRUCTION PARAGRAF**********/
function writingtext(){
  if(fromI<insText.length){
    paragrafDiv.innerHTML += insText.charAt(fromI);
    fromI++;
    setTimeout(writingtext, 5);
  }
}
writingtext();

/*****************LIST OF WORDS THAT WE'RE GOING TO USE FOR THE GAME*************/

const listOfWords = [
  "Sallad",
  "Kiwi",
  "Juice",
  "Hundra",
  "Vatten",
  "Spaghetti",
  "Promenera"
  ];

  /**********************SLUMPMÄSSIGT TAR VI UT ETT ORD FRÅN LISTAN****************/
var choosenWord = listOfWords[Math.floor(Math.random()*listOfWords.length)];



startBtn.addEventListener("click",function(){
  startPage.style.display ="none";
  gamePage.style.display ="block";
})