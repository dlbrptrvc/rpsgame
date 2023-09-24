const rock = {value:0,name:'Rock'}
const paper = {value:1,name:'Paper'}
const scissors = {value:2,name:'Scissors'}
const options = [rock, paper, scissors]
let score = [0,0]

function getComputerChoice() {
    return options[Math.floor(Math.random()*3)]
}

function playRound(userChoice) {
    let computerChoice = getComputerChoice()
    userChoice = processUserInput(userChoice)
    if ((userChoice.value+1)%3 == computerChoice.value) {
        score[1]++
        return 'You lose. '+computerChoice.name+' beats '+userChoice.name+'.'
    } else if (userChoice.value == computerChoice.value) {
        score[0]+=0.5 , score[1]+=0.5
        return 'Draw.'
    } else {
        score[0]++
        return 'You win. '+userChoice.name+' beats '+computerChoice.name+'.'
    }
}

function game() {
    alert('Rock,paper,scissors? Best out of 5? Game on!')
    let round = 0
    let userChoice = ''
    while (score[1]<3 && score[0]<3 && round<5) {
        round++
        userChoice = prompt('Round '+round+'.\nyou: '+score[0]+'\nme: '+score[1]+'\nChoose your weapon.')
        if (userChoice == null) {
            round--
            switch (round) {
                case 1:
                    alert('Running away ey? Just so you know the score after 1 round was\nyou: '+score[0]+'\nme: '+score[1])
                    break
                default:
                    alert('Running away ey? Just so you know the score after '+round+
                    ' rounds was You: '+score[0]+', me: '+score[1])
                    round = 0
                    return
            }
        } else if (processUserInput(userChoice)[0]=='I') {
            round--
            alert('Are you sure you know how to play this?')
        }
        else {
            alert(playRound(userChoice))
        }
    }
    if (score[0]>score[1]) {alert('Congratulations. You win. The final score is\nyou: '+score[0]+'\nme:'+score[1]+"\nCare for a rematch?")}
    if (score[0]<score[1]) {alert('Ha, Ha! You lose. The final score is\nyou: '+score[0]+'\nme:'+score[1]+"\nCare for a rematch?")}
    if (score[0]==score[1]) {alert("I guess it's a draw. The final score is\nyou: "+score[0]+"\nme:"+score[1]+"\nCare for a rematch?")}
}

function processUserInput(userChoice) {
    if (userChoice[0] && userChoice.slice(1) && typeof(userChoice)=='string') {
        for (let i=0;i<3;i++) {
            if (options[i].name == (userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase())) {
                return options[i]
             }
        }
    }
    return 'Invalid input. Try rock, paper or scissors'
}