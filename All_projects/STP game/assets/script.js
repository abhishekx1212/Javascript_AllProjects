let userScore = 0;
let compScore = 0;

let Uscore = document.querySelector('#userScore');
let Cscore = document.querySelector('#compScore');

var result = document.querySelector('#result');
const choices = document.querySelectorAll('.choice');

const computerChoice = () => {
    compArray = ['rock', 'paper', 'scissors'];
    random = Math.floor(Math.random() * 3);
    return compArray[random];
}

const showWinner = (winner) => {
    if (winner === true) {
        Uscore.innerHTML = ++userScore;
    } else {
        Cscore.innerHTML = ++compScore;
    }
    FinalWinner()
}

const FinalWinner = ()=>{
    if(userScore == 3 || compScore == 3){
        if(userScore > compScore){
            result.innerHTML = 'You Win! Reset the game'
            userScore = compScore = 0
            Uscore.innerHTML = Cscore.innerHTML = 0;
        }else{
            result.innerHTML = 'Computer Win! Reset the game'
            userScore = compScore = 0
            Cscore.innerHTML = Uscore.innerHTML = 0;
        }
    }
}

const checkWinner = (choiceId) => {
    let useChoice = choiceId;
    // console.log('your choice =', useChoice);
    let compChoice = computerChoice();
    // console.log('comp choice =', compChoice);

    if (useChoice === compChoice) {
        result.innerHTML = 'No points'
    } else {
        result.innerHTML = ''
        let userWin = true;
        if (useChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        } else if (useChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true;
        } else {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let choiceId = choice.getAttribute('id');
        checkWinner(choiceId);
        // console.log('choice click', choiceId)
    })

});