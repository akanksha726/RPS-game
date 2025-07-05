let userScore = 0;
let computerScore = 0;

const userScorePara = document.querySelector(`#user-score`);
const computerScorePara = document.querySelector(`#computer-score`);

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector(`#msg`);
const genComputerchoice=()=>{
    const options=['rock','paper','scissors'];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
     const drawGame=()=>{
        console.log(`Game was Draw`);
        msg.innerText=`Game was Draw...play again!`;
               
     };
        const showWinner=(userWin, userChoice , computerChoice)=>{
            if(userWin){
                userScore++;
                userScorePara.innerText=userScore;
            msg.innerText=`you Win!  your ${userChoice} beats ${computerChoice}`;
            
         }
                else{
                    computerScore++;
                    computerScorePara.innerText=computerScore;
                    msg.innerText=`You Lose! your ${userChoice} is beaten by ${computerChoice}`;
                   }
        };
       
const playGame = (userChoice) => {
    const computerChoice=genComputerchoice();
if(userChoice===computerChoice){
    drawGame();
}
   else{
    let userWin=true;
    if(userChoice===`rock`){
        userWin=computerChoice===`paper` ? false : true;
    }  else if(userChoice===`paper`){
        userWin=computerChoice===`scissors` ? false : true;
   } else if(userChoice===`scissors`){
userWin=computerChoice===`rock` ? false : true;
   }
     showWinner(userWin, userChoice,computerChoice);
   }
};
choices.forEach(choice => {
  choice.addEventListener(`click`,()=>{
   const userChoice=choice.getAttribute(`id`);
   playGame(userChoice);

    });
});
   