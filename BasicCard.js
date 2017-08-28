var inquirer = require('inquirer');


//should accept two arguements (front and back)

// Object Constructor Function
function BasicCard(front, back) {
    this.front = front;
    this.back = back;

    this.printInfo = function(){
        console.log("Front: " + this.front + "\nBack: " + this.back);
    }
}
// Variables to store answers in an array
var FrontOfCards = [];
var BackOfCards = [];

var count = 0; 

var createBasicCard = function() {
    if (count<2) {
        inquirer.prompt([{
            name: "front",
            message: "What is the front of the flash card?"
        },{
            name: "back",
            message: "What is the back of the flash card?"
        }]).then(function(answers){
            var newBasicCard = new BasicCard(answers.front, answers.back);
            newBasicCard.printInfo();
            FrontOfCards.push(answers.front);
            BackOfCards.push(answers.back);
            count++;
            createBasicCard();
        })
    }
    else {
        console.log("All Flash Cards Created!");
        // Console log FrontOfCards array 
        console.log("Fronts: " + FrontOfCards);
        // Console log BackOfCards array 
        console.log("Backs: " +  BackOfCards);
    }
}
createBasicCard();


//EXAMPLE of BasicCard (uncomment to use)
//var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

//"Who was the first president of the United States?" (uncomment to use)
//console.log(firstPresident.front);

// Console log the front and back of the card (uncomment to use)
//console.log(firstPresident)

// Console log the front of the card (uncomment to use)
//console.log(firstPresident.front);

// Allows BasicCard module to be exported
module.exports = BasicCard;