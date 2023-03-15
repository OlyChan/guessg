let chances;
let range;
let win;
let numberGuessed;
let guess;

function reset(){
    let chances = 5;
    let win = 0;
    let numberGuessed = 0;
    let guess = 0;
}

function start(){
     guess = Math.floor( Math.random() * range);
}

function begin(){
    if (chances==5 && win != 1){
  document.getElementById("main").innerHTML = "Goodluck"
    }
    else if(chances==0 && win==1){
        document.getElementById("main").innerHTML = "OOPS, try again"
    }
    else if(chances==2 && win!=1){
         document.getElementById("submain").innerHTML = "You have 2 chances left"
    }
    if(guess==numberGuessed){
      document.getElementById("main").innerHTML = "HURRAY! YOU WON THE GAME"
    }
    else if(guess>numberGuessed){
      document.getElementById("submain").innerHTML = "HEY, YOU GUESSED TOO HIGH"
    }
    else if(guess<numberGuessed){
      document.getElementById("submain").innerHTML = "HEY, YOUR GUESS IS TOO LOW"
    }
    if(numberGuessed>range){
        alert("HEY! THAT'S WAY PAST THE RANGE")
    }
    
}