
//Random and query selector for dice 1
var random1 = Math.floor(Math.random() * 6) + 1;

var diceLink1 = "images/dice" + random1 +".png";

document.querySelectorAll('img')[0].setAttribute('src',diceLink1);

//Random and Query selector for dice 2
var random2 = Math.floor(Math.random() * 6) + 1;

var diceLink2 = "images/dice" + random2 + ".png";

document.querySelectorAll('img')[1].setAttribute('src', diceLink2);


//Condition for the display of winner 

if (random1 > random2){

    document.querySelector('h1').innerHTML="Player 1 Won";
}

else if( random2 > random1){

    document.querySelector('h1').innerHTML='Player 2 Won';
}

else{
    document.querySelector('h1').innerHTML='Draw';
}
