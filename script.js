const rock = {value:0,name:'Rock'}
const paper = {value:1,name:'Paper'}
const scissors = {value:2,name:'Scissors'}
const options = [rock, paper, scissors]
let score = [0,0]

let scoreBoard = document.querySelector('#scoreBoard')
let optionBtns = document.querySelectorAll('[id^="option"]')
optionBtns.forEach( (opt) => opt.addEventListener('click',() => showScore(playRound(options[+(opt.id.split('_')[1])]))))

function showScore(roundResult) {
    scoreBoard.innerHTML = roundResult+"<br>SCORE<br>You:"+score[0]+"<br>MCP:"+score[1]+"<br>"
    if (score[0]==5) {
        scoreBoard.innerHTML += "You win!"
        score = [0,0]
    }
    if (score[1]==5) {
        scoreBoard.innerHTML += "MCP wins!"
        score = [0,0]
    }   
}

function getComputerChoice() {
    return options[Math.floor(Math.random()*3)]
}

function playRound(userChoice) {
    // console.log(userChoice)
    let computerChoice = getComputerChoice()
    if ((userChoice.value+1)%3 == computerChoice.value) {
        score[1]++
        return 'You lose. '+computerChoice.name+' beats '+userChoice.name+'.'
    } else if (userChoice.value == computerChoice.value) {
        return 'Draw.'
    } else {
        score[0]++
        return 'You win. '+userChoice.name+' beats '+computerChoice.name+'.'
    }
}