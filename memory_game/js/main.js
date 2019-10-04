
var cards=["queen", "queen", "king", "king"];

var cardsInPlay=[];

var cardOne = ["queen"];

cardsInPlay.push('cardOne[0]');

console.log("User flipped" + " " + cardOne);

var cardTwo = ["king"];

cardsInPlay.push('cardTwo[2]');

console.log("User flipped" + " " + cardTwo);

if(cardsInPlay.length===2){
	alert("You found a match");
} else if(cardsInPlay[0]===cardsInPlay[2]){
	alert("Sorry, try again");
}

