var cards = ["queen", "queen", "king", "king"];

var cardsInplay = [];

var cardOne = cards[0];
cardsInplay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInplay.push(cardTwo);
console.log("User flipped " + cardTwo);

var cardThree = "queen";

var cardFour = "king";

if(cardsInplay[0]===cardsInplay[2]){
   alert("You found a match!")
} else{
	alert("Sorry, try again");
}