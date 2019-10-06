var cards=["queen", "queen", "king", "king"];

var cardsInPlay = [];

function checkForMath(){
if(cardsInPlay[0]===cardsInPlay[2]){
   console.log("You found a match!");
} else{
   console.log("Sorry, try again");
}
}
function flipCard(cardId){
cardsInPlay.push(cards[0]);
console.log("User flipped " + cards[0]);
}
checkForMath()
flipCard(cards[0]);
flipCard(cards[2]);
