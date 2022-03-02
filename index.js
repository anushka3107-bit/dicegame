var randomDiceNumber = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomDiceNumber+ ".png";

var randomImageSource = "/img/" +randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


// dice 1

var randomDiceNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice" + randomDiceNumber2+".png";

var randomImageSource2 = "/img/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[0];

image2.setAttribute("src",randomImageSource2);

// conditions

if(randomDiceNumber > randomDiceNumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}

else if(randomDiceNumber2>randomDiceNumber){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

else{
    document.querySelector("h1").innerHTML = "Draw!";
}