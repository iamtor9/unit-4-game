// a game with 4 crystals
// random number result chosen by the computer
//each crystal is worth a random number between 1 - 12


//a new random number will be generated each time there is a win or loss
let randomresult;
let lost;
let win;

randomresult = Math.floor(Math.random() * 59) + 30;
    console.log(randomresult);

("#result").html('Random Result: ' + randomresult);

for (let i = 0; i < 4; i++){
    
    let random = Math.floor(Math.random() * 11) + 1;
    console.log(random);

    let crystal= ("div");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });


    ("crystals").append(crystal);
}
// create crystal "on click function"
  (".crystal").onclick('click', function () {

    console.log(this).attr("data-random");
  });

console.log(random_result)
//when the user clicks on any of the four crystals, 
//it will be added tp the previous result
//until it is equal to the total of the random result score
//if crystal count is greater than random result, player loses
//if crystal count is equals random result, player wins