// Michael Osgood / BasicCard.js
var inquirer = require('inquirer');

// Object Constructor Function for our BasicCard
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

module.exports = BasicCard;