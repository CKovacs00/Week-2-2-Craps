//function for countdownTimer version 1 for week 1-2
function Start(){
    console.log("Start() function started");
    //variable curr function set for time = 10
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
    //9
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 1000)
    //8
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 2000)
    //7
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 3000)
    //6
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 4000)
    //5
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 5000)
    //4
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 6000)
    //3
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 7000)
    //2
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 8000)
    //1
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 9000)
    //Blastoff
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = "Blastoff!!";
        console.log(currTime);
    }, 10000)
}

function PlayCraps(){
    console.log("PlayCraps() started");
    //generate variables
    var die1;
    var die2;
    var sum;

    //roll the dice
die1 = Math.floor(Math.random() * 6) + 1;
console.log(die1);
die2 = Math.floor(Math.random() * 6) + 1;
console.log(die2);
    //determine the sum of the dice and save to sum
sum = die1 +die2;
console.log("sum is equal to " +  sum);

    //follow craps rules
    //first lose
    if(sum == 7 || sum == 11){
        document.getElementById("crapsStatus").innerHTML = "Craps! You Lose!"
    } else if(die1 == die2 && die1%2 == 0){
        document.getElementById("crapsStatus").innerHTML = "You win!"
    } else {
        document.getElementById("crapsStatus").innerHTML = "You didn't win or lose. Play again?"
    }

    }
    //tell the result in CrapsStatus
