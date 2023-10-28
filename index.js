// -------------------------- One Refreshing the web Page -----------------------------

// Generate a new random number for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Update the image source
var image1 = document.querySelectorAll("img")[0];

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
image1.setAttribute("src", randomImageSource);

// Generate a new random number for Player 2
var randomeNumber2 = Math.floor(Math.random() * 6) + 1

// Update the image source
var randomImageSource2 = "images/dice" + randomeNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

// determine the winner
if (randomNumber1 > randomeNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomeNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}

// -------------------------- For Each Image Adding Event Listener -----------------------

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

// Add click event listener for Player 1
image1.addEventListener("click", function() {
    // Generate a new random number for Player 1
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    
    // Update the image source
    randomDiceImage = "dice" + randomNumber1 + ".png";
    randomImageSource = "images/" + randomDiceImage;
    image1.setAttribute("src", randomImageSource);
    
    // Check for the winner after the image is clicked
    determineWinner();
});

// Add click event listener for Player 2
image2.addEventListener("click", function() {
    // Generate a new random number for Player 2
    randomeNumber2 = Math.floor(Math.random() * 6) + 1;
    
    // Update the image source
    randomImageSource2 = "images/dice" + randomeNumber2 + ".png";
    image2.setAttribute("src", randomImageSource2);
    
    // Check for the winner after the image is clicked
    determineWinner();
});

// Function to determine the winner
function determineWinner() {
    if (randomNumber1 > randomeNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    }
    else if(randomeNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 wins";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw";
    }
}
