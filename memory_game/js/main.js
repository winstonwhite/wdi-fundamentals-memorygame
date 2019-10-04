
var cards=["queen", "queen", "king", "king"]

var cardsInPlay=[];

var cardOne=[0];

cardsInPlay.push("queen");

console.log("User flipped queen");

var cardTwo=[4];

cardsInPlay.push("king");

console.log("User flipped king");

if(cardsInPlay.length===2){

    alert("You found a match!");
  
 } else if (cardsInPlay[0]===cardsInPlay[2]){
    
     alert("Sorry, try again.");
}










