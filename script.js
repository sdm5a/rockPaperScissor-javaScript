let userScrore=0;
let compScrore=0;

let msg=document.querySelector(".move-btn");
let ypara=document.querySelector(".ypara");
let cpara=document.querySelector(".cpara");

let choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        let compRandom=Math.random()*2;
        let compT=choices[Math.round(compRandom)];
        let compChoice=compT.getAttribute("id");
        if((userChoice==="scissor" && compChoice==="paper") || (userChoice==="paper" && compChoice==="rock") ||(userChoice==="rock" && compChoice==="scissor")){
            userScrore++;
            ypara.innerText=userScrore;
            msg.innerText=`You Win!!! ${userChoice} beats ${compChoice}`;
        }else if(userChoice===compChoice){
            msg.innerText=`Draw over => ${userChoice} and ${compChoice}`;
        }else{
            compScrore++;
            cpara.innerText=compScrore;
            msg.innerText=`You Loose!!! ${compChoice} beats ${userChoice}`;
        }

        
    })
})