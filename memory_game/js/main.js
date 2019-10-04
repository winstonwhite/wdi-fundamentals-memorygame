
var cards=["queen", "queen", "king", "king"]

var cardsInPlay=[];

function checkForMath(){

	if(cardsInPlay.length===2){

    console.log("You found a match!");
  
   } else if (cardsInPlay[0]===cardsInPlay[2]){
    
     console.log("Sorry, try again.");
  }

}

checkForMath()


function flipCard(cardID){

cardsInPlay.push(cards[cardID]);

flipcard(0);
flipcard(2);

console.log(cards[cardID]);



}







