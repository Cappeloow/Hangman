const emptyPage = document.querySelector(".container");
const startPage = document.querySelector(".startPage");
const gamePage = document.querySelector(".gamePage");
const pictureContainer = document.querySelector(".containerOfPicture");
const hangmanImg = document.getElementById('hangmanImg');
const startBtn = document.querySelector(".startBtn");
const paragrafDiv = document.querySelector(".paragrafDiv");
const wordDisplayer = document.querySelector("#wordDisplayer");
const maxStrikes = 5;

var insText = "Welcome to the classic game that is well known all over the world. You have one simple task, save the man from getting hanged. In order to do so, youll have to guess what the hidden word is. Simply put the letter in the inputfield that you believe should be in the hidden word. If your guess is incorrect, then the man will get closer to get hanged. You have 5 attempts before its to late from saving him. If you succeed, the man will live another day."

let fromI = 0;
let currentStrikes = 0;
let chosenWordCharList = [];
let displayedChosenWordCharList = [];

displayPicture();

/**********Display Picture**********/

function displayPicture(){
  if (currentStrikes == 0){
    hangmanImg.src = 'img/0.png';
  }
  else if (currentStrikes == 1){
    hangmanImg.src = 'img/1.png';
  }
  else if (currentStrikes == 2){
    hangmanImg.src = 'img/2.png';
  }
  else if (currentStrikes == 3){
    hangmanImg.src = 'img/3.png';
  }
  else if (currentStrikes == 4){
    hangmanImg.src = 'img/4.png';
  }
  else if (currentStrikes == 5){
    hangmanImg.src = 'img/5.png';
  }
}

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
  "rat",
  "fox",
  "owl",
  "bee",
  "pig",
  "bat",
  "cow",
  "ant",
  "elk",
  "mole",
  "hare",
  "toad",
  "duck",
  "frog",
  "bear",
  "wolf",
  "deer",
  "seal",
  "worm",
  "crab",
  "snail",
  "crow",
  "hawk",
  "swan",
  "goose",
  "skunk",
  "zebra",
  "koala",
  "llama",
  "otter",
  "panda",
];


  /**********************SLUMPMÄSSIGT TAR VI UT ETT ORD FRÅN LISTAN****************/
var choosenWord = listOfWords[Math.floor(Math.random()*listOfWords.length)];



for(const letter of choosenWord){
  chosenWordCharList.push(letter);
  displayedChosenWordCharList.push("-");
}
document.querySelector("#Submit");
for(const letter of displayedChosenWordCharList){
  wordDisplayer.innerHTML += `${letter} `
}

const correctLetters = [];
const incorrectLetters =[];

/**************** GENOM ETT KLICK TAR VI BORT STARTPAGEN OCH VIDARE TILL GAMEPAGEN***************/
startBtn.addEventListener("click",function(){
  startPage.style.display ="none";
  gamePage.style.display ="block";
});




const submitBtn = document.querySelector("#Submit");
const inputLetter = document.querySelector("#inputLetter");



var lettersOfWord = choosenWord.split("");
// break down the word in letters
//loop to see if the letter is in the array of letters
function displayWord(){
}
displayWord();

function checkIfCorrect(){
  
  for(const i in chosenWordCharList)
  {

    if(inputLetter.value.toLowerCase() ===chosenWordCharList[i]){
      displayedChosenWordCharList[i] = chosenWordCharList[i] 
      let displayedWord = "";
      for(const letter of displayedChosenWordCharList){
       
        displayedWord += `${letter} `;
      }
      wordDisplayer.innerHTML = displayedWord;
      correctLetters.push(chosenWordCharList[i]);
      const displayedWordChecker = displayedChosenWordCharList.join("")
      const ChosenWordChecker = chosenWordCharList.join("") 
      if (ChosenWordChecker === displayedWordChecker){
        let paragraphSuccess = document.createElement("p");
        paragraphSuccess.innerText = "YOU MADE IT!";
        paragraphSuccess.id ="pSuccess";
        gamePage.append(paragraphSuccess);
        setTimeout(() => {
          window.location.href ="index.html";
      }, 2000);
      }

      inputLetter.value ="";
      return
    }    
  }
  incorrectLetters.push(inputLetter.value);
  currentStrikes++
  displayPicture();

  if (maxStrikes <= currentStrikes){
    let paragraphSuccess = document.createElement("p");
    paragraphSuccess.innerText = "YOU LOSE!";
    paragraphSuccess.id ="pSuccess";
    gamePage.append(paragraphSuccess);
    setTimeout(() => {
      window.location.href ="index.html";
  }, 2000);

  }


  inputLetter.value ="";
}
submitBtn.addEventListener("click", checkIfCorrect);

