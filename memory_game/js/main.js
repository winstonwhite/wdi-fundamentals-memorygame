var cards = ["queen", "queen", "king", "king"];

var cardsInplay = [];

function checkForMath(){
if(cardsInplay[0]===cardsInplay[1]){
   alert("You found a match!")
} else{
	alert("Sorry, try again");
}
}

function flipCard(carId){
cardsInplay.push(cards[carId])
console.log("User flipped " + cards[0]);
checkForMath()

}
flipCard(cards[0]);
flipCard(cards[2]);