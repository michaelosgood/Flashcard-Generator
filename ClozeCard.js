var inquirer = require('inquirer');

// Three Sections
// 1) Full Text
// 2) Cloze Deletion
// 3) Partial Text

function ClozeCard(fullText, cloze, partial){
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = partial;

    this.printInfo = function(){
        console.log("Full Text: " + this.fullText + "\nCloze Deletion: " + this.cloze);
    }
}
// Variables to store answers in an array
var FullTextOfCards = [];
var ClozeDeletionOfCards = [];
var PartialTextOfCards = [];

var count = 0;

var createClozeCard = function() {
    if (count<2) {
        inquirer.prompt([{
            name: "fullText",
            message: "What is the full text of the flash card?"
        },{
            name: "cloze",
            message: "Enter the cloze-deletion portion of the text you want to omit."
        }]).then(function(answers){
            var newCard = new ClozeCard(answers.fullText, answers.cloze);
            newCard.printInfo();
            FullTextOfCards.push(answers.fullText);
            ClozeDeletionOfCards.push(answers.cloze);
            count++;
            createClozeCard();
        })
    }
    else {
        console.log("All Cards Created!");
        // Displays fullText array for flash cards
        console.log("Full Text: " + FullTextOfCards);
        // Displays clozeDeletion array for flash cards
        console.log("Cloze: " +  ClozeDeletionOfCards);
    }
}
createClozeCard();







// EXAMPLE of ClozeCard (uncomment to use)
//var CardExample = new clozeCard("2.99e8 meters/second is the speed of light", 
//"speed of light", "2.99e8 meters/second is the ...");
//console.log(CardExample);

// Allows ClozeCard module to be exported
module.exports = ClozeCard;