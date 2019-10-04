var cards=[
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay=[];

function checkForMath(){
 if(cardsInPlay[0]===cardsInPlay[1]){
	alert("You found a match");
} else {
	alert("Sorry, try again");
}
};

function flipCard(cardID){
flipCard(0);
flipCard(2);
checkForMath()

cardsInPlay.push(cards[cardId].rank);
console.log("User flipped " + cards[cardId].rank);
console.log(cardImage);
console.log(suit);
}


