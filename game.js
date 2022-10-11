const emptyPage = document.querySelector(".container");
const startPage = document.querySelector(".startPage");
const gamePage = document.querySelector(".gamePage");

const startBtn = document.querySelector(".startBtn");
const paragrafDiv = document.querySelector(".paragrafDiv");
var insText = "Welcome to the classic game that is well known all over the world. You have one simple task, save the man from getting hanged. In order to do so, youll have to guess what the hidden word is. Simply put the letter in the inputfield that you believe should be in the hidden word. If your guess is incorrect, then the man will get closer to get hanged. You have 5 attempts before its to late from saving him. If you succeed, the man will live another day."

let fromI = 0;


/**********JUST INSERTS THE INSTRUCTION PARAGRAF**********/
function writingtext(location, text){
  if(fromI<insText.length){
    paragrafDiv.innerHTML += insText.charAt(fromI);
    fromI++;
    setTimeout(writingtext, 5);
  }
}
writingtext();

/*****************LIST OF WORDS THAT WE'RE GOING TO USE FOR THE GAME*************/

const listOfWords = [
  "sallad",
  "kiwi",
  "juice",
  "hundra",
  "vatten",
  "spaghetti",
  "promenera"
  ];

  /**********************SLUMPMÄSSIGT TAR VI UT ETT ORD FRÅN LISTAN****************/
var choosenWord = listOfWords[Math.floor(Math.random()*listOfWords.length)];

const correctLetters = [];
const incorrectLetters =[];

/**************** GENOM ETT KLICK TAR VI BORT STARTPAGEN OCH VIDARE TILL GAMEPAGEN***************/
startBtn.addEventListener("click",function(){
  startPage.style.display ="none";
  gamePage.style.display ="block";
});




const submitBtn = document.querySelector("#Submit");
const inputLetter = document.querySelector("#inputLetter");
const wordDisplayer = document.querySelector("#wordDisplayer")


var lettersOfWord = choosenWord.split("");
// break down the word in letters
//loop to see if the letter is in the array of letters
function splitWord(){
  wordDisplayer.innerHTML += lettersOfWord;
  wordDisplayer.style.display="none";
}
splitWord();


function checkIfCorrect(){
  for(const letter of lettersOfWord)
  {
  
    if(inputLetter.value ===letter){
      console.log("true");
      letter.style.display="block";
      return
    }
    
  }
  console.log("false");

}
submitBtn.addEventListener("click", function(){
  checkIfCorrect();
});

