let userScore = 0;
let compScore = 0;
const choicesel = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const gencompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randomchoice = Math.floor(Math.random() * 3);
    return option[randomchoice];
};

const drawgame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was a draw!";
    msg.style.backgroundColor = "blue";
};

const showwinner = (userWin, userchoiceId, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You win! Your choice ${userchoiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You lose! Computer's choice ${compChoice} beats ${userchoiceId}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoiceId) => {
    console.log("User choice =", userchoiceId);
    const compChoice = gencompChoice();
    console.log("Computer choice =", compChoice);

    if (userchoiceId === compChoice) {
        drawgame();
    } else {
        let userWin = false; 

        if (
            (userchoiceId === "rock" && compChoice === "scissors") ||
            (userchoiceId === "paper" && compChoice === "rock") ||
            (userchoiceId === "scissors" && compChoice === "paper")
        ) {
            userWin = true;
        }

        showwinner(userWin, userchoiceId, compChoice);
    }
};

choicesel.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoiceId = choice.getAttribute("id");
        playgame(userchoiceId);
    });
});
