// a game with 4 crystals
// random number result chosen by the computer
//each crystal is worth a random number between 1 - 12
//create array

let crystals = [];

    let button1 = document.getElementsByClassName("button1");
    let button2 = document.getElementsByClassName("button2");
    let button3 = document.getElementsByClassName("button3");
    let button4 = document.getElementsByClassName("button4");

let buttonValue = crystals[0]
    
let butt1v = crystals[0]
let butt2v = crystals[1]
let butt3v = crystals[2]
let butt4v = crystals[3]

//a new random number will be generated each time there is a win or loss
let randomresult;
let lost = 0;
let win = 0;
let previous = 0;
let userScore = 0;

let reset = function () {
//create click me button?

randomresult = Math.floor(Math.random() * 100) + 19;

("#result").html('Random Result: ' + randomresult);

for (let i = 0; i < 4; i++){
    
    let random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);

//create values for crystals with a push



 

    //randomresult.addEventListener("reset", myScript);

// create crystal "on click function"
//when the user clicks on any of the four crystals

    document.getElemendById(onclick)('click',function () {
      
    let num = parseInt(this).attr("data-random");
        previous += num;
        console.log(previous);

    if (previous > randomresult){
        console.log("You Lost!");
        ("#lost").html(lost);
        //object.addEventListener("reset", myScript);
        //or document.getElementById("show-number").innerHTML = "<h2>" + number + "</h2>";

    } 

    else if(previous === randomresult){
        console.log("You Won!");
        ("#win").html(win);
        //object.addEventListener("reset", myScript);
        //or document.getElementById("show-number").innerHTML = "<h2>" + number + "</h2>";

    }

    }

    console.log(previous);

  });

    console.log(this).attr("data-random");
  });

console.log(random_result)
//when the user clicks on any of the four crystals, 
//it will be added tp the previous result
//until it is equal to the total of the random result score
//if crystal count is greater than random result, player loses
//if crystal count is equals random result, player wins