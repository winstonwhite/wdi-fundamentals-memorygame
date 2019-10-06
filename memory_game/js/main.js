var cards=["queen", "queen", "king", "king"];

var cardsInPlay = [];

function checkForMath(){
if(cardsInPlay[0]===cardsInPlay[1]){
   console.log("You found a match!");
} else{
	console.log("Sorry, try again");
}
}
function flipCard(cardId){
cardsInPlay.push(cards[cardId]);
console.log("User flipped " + cards[cardId]);
checkForMath()

}
flipCard(cards[0]);
flipCard(cards[2]);