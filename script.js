let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userSc = document.querySelector('#user-score')
const compSc = document.querySelector('#comp-score')

const drawGame = () => {
    msg.innerText = 'Game is Draw!👀';
    msg.style.backgroundColor = 'blueviolet'
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        msg.innerText = `You Win! Yor ${userChoice} beated Computer's ${compChoice} 🎉`;
        msg.style.backgroundColor = 'green'
        userScore++
        userSc.innerText = userScore;
    } else {
        msg.innerText = `You Lose! Computer's ${compChoice} beated Your ${userChoice} 😔`;
        msg.style.backgroundColor = 'red'
        compScore++
        compSc.innerText = compScore;
    }
}

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin;
        if (userChoice === 'rock') {
            userWin = compChoice !== 'paper';
        } else if (userChoice === 'paper') {
            userWin = compChoice !== 'scissors';
        } else if (userChoice === 'scissors') {
            userWin = compChoice !== 'rock';
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
