var programming_Languages =[
    "python",
    "javascript",
    "mongodb",
    "json",
    "java",
    "html",
    "css",
    "c",
    "csharp",
    "golang",
    "kotlin",
    "php",
    "sql",
    "ruby"
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed =[];
let wordStatus = null;

function randomWord(){
    answer = programming_Languages[Math.floor(Math.random() * programming_Languages.length)];
    //alert(answer)
}

function generateButtons(){
    let buttonHTML = 'abcdefghijklmnopqrstuv'.split('').map(letter => 
        `<button class="btn btn-lg btn-primary m-2"
        id='`+ letter + `'
        onClick = "handleGuess('` + letter + `')">
        `  + letter +  `
        </button>`
        ).join('');
        document.getElementById('keyboard').innerHTML = buttonHTML;
}

function handleGuess(chosenLetter){
guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
document.getElementById(chosenLetter).setAttribute('disabled', true);
//alert(answer);
if(answer.indexOf(chosenLetter) >= 0)
{
    guessedWord();
    checkIfGameWon();
}else if(answer.indexOf(chosenLetter) === -1){
    mistakes++;
    updateMistakes()
    checkIfGameLost();
    updateHangmanPicture();
}
}

function checkIfGameWon(){
    if(wordStatus === answer){
    document.getElementById('keyboard').innerHTML = 'You Won';
    }
}

function checkIfGameLost(){
    if(mistakes === maxWrong){
    document.getElementById('wordSpotlight').innerHTML =  "The Answer was:" + answer; 
    document.getElementById('keyboard').innerHTML = 'You Lost';
    }
}

function updateMistakes()
{
    document.getElementById('mistakes').innerHTML = mistakes;
}
function guessedWord(){
    wordStatus  = answer.split('').map(letter => (guessed.indexOf(letter) >=0 ? letter : " __ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateHangmanPicture(){
    document.getElementById('hangmanpic').src = './images/' + mistakes + '.jpg';
}
function reset()
{
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanpic').src = './images/0.jpg';
    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}

document.getElementById("maxWrong").innerHTML=maxWrong;

randomWord();
generateButtons();
guessedWord();
