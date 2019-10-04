
var cards=[
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
   rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png",
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png",
},
];

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

console.log("cards[cardID].rank");
console.log("cardImage");
console.log("suit");

flipcard(0);
flipcard(2);

cardsInPlay.push(cards[cardID].rank);

}







