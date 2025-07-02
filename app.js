let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice")
let msg=document.querySelector("#msg");
let userscorepar=document.querySelector("#user-score");
let compscorepar=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3); 
    return options[randIdx];
};

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepar.innerText=userscore;
        msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepar.innerText=compscore;
        msg.innerText=`You lose.${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const drawGame=()=>{
    msg.innerText="Game was draw try again.";
    msg.style.backgroundColor="#081b31";
}

const playGame=(userchoice)=>{
    console.log("User choice =",userchoice);
    const compchoice=genCompChoice();
    console.log("Computer =",compchoice);
    
    if(userchoice===compchoice){
        drawGame();
    }else{
        userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"? false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});