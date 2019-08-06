// a game with 4 crystals
// random number result chosen by the computer
//each crystal is worth a random number between 1 - 12


//a new random number will be generated each time there is a win or loss
let randomresult;
let lost = 0;
let win = 0;
let previous = 0;

let startGame = function () {

randomresult = Math.floor(Math.random() * 100) + 19;

("#result").html('Random Result: ' + randomresult);

for (let i = 0; i < 4; i++){
    
    let random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);

    let crystal= ("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.html(random);

    ("crystals").append(crystal);
    
    }
}

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
    } 

    else if(previous === randomresult){
        console.log("You Won!");
        ("#win").html(win);
        //object.addEventListener("reset", myScript);
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