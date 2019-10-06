var cards = ["queen", "queen", "king", "king"];

var cardsInplay = [];

var cardOne = "queen";
cardsInplay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = "king";
cardsInplay.push(cardTwo);
console.log("User flipped " + cardTwo);

var cardThree = "queen";

var cardFour = "king";

if(cardsInplay[0]===cardsInplay[2]){
   alert("You found a match!")
} else{
	alert("Sorry, try again");
}