// console.log(window);
const gameRules = ["e", "f" , "w"] ;        
let player1Point = 0;
let player2Point = 0;

const point1 = document.querySelector("#show1");
const point2 = document.querySelector("#show2");

const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");

const playerName = prompt("Welcome to Pokemon Game! Enter your name:");
alert(`Hello, ${playerName}! Let's play Pokemon Game. Press e , f or w buttons on your keyboard`);

function randomELement (){  
    const randomIndex = Math.floor(Math.random() * gameRules.length) 
    return gameRules[randomIndex];
}

function resultOfGame(u,c){     
    console.log(u);
    console.log(c);  

    img1.src =`./pokemon.img/${u}.png`
    img2.src =`./pokemon.img/${c}.png`

    if(u == "w" && c == "f" ){   
        console.log("user wins");
        player1Point +=1
        point1.innerHTML = player1Point 
        result1.innerHTML = "WIN"  
        result2.innerHTML = "LOSE"      

        result1.style.color = "green"
        result2.style.color = "red"

    }else if (u == "f" && c == "e"){  
        console.log("user wins");
        player1Point +=1
        point1.innerHTML = player1Point

          result1.innerHTML = "WIN" 
          result2.innerHTML = "LOSE" 

          result1.style.color = "green"
          result2.style.color = "red"


    }else if (u == "e" && c == "w"){
        console.log("user wins"); 
        player1Point +=1
        point1.innerHTML = player1Point

        result1.innerHTML = "WIN"   
        result2.innerHTML = "LOSE" 

        result1.style.color = "green"
        result2.style.color = "red"

    } else if (c == u){   
        console.log("draw");

        result1.innerHTML = "DRAW"  
        result2.innerHTML = "DRAW"

        result1.style.color = "gray"
        result2.style.color = "gray"

    }else { 
        console.log("comp wins"); 
        player2Point +=1
        point2.innerHTML = player2Point

        result2.innerHTML = "WIN"  
        result1.innerHTML = "LOSE"

        result1.style.color = "red"
        result2.style.color = "green"

    }

}


window.addEventListener("keypress", function(e){    
    // console.log(e.key);  
    let userChoice = e.key ;
    let indexOfKeys = gameRules.indexOf(userChoice);

    // console.log(indexOfKeys);
    if(indexOfKeys != -1 ){
       const compChoice = randomELement();  

        resultOfGame(userChoice,compChoice)

    }else{

        alert("press the correct buttons! e f or w")
    }

})



