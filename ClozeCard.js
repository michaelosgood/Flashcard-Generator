// Michael Osgood / ClozeCard.js
var inquirer = require('inquirer');

function ClozeCard(fullText, cloze) {
    if (this instanceof ClozeCard) {
        this.fullText = fullText;
        this.cloze = cloze;
        this.createPartial = function() {
            if (fullText.includes(cloze)) {
                this.partial = fullText.replace(cloze, "...");
            }
            else {
                console.log("Error: " + cloze + " doesn't appear in " + fullText);
            }
        }
        this.createPartial()
    }
    else {
        return new ClozeCard(fullText, cloze);
    }
}

var count = 0;

var createClozeCard = function() {
    if (count<2) {
        inquirer.prompt([{
            name: "fullText",
            message: "What is the full text of the flash card?"
        },{
            name: "cloze",
            message: "Enter the portion of the text you want to omit."
        }]).then(function(answers){
            var newCard = new ClozeCard(answers.fullText, answers.cloze);
            count++;
            console.log(newCard);
            createClozeCard();
        })
    }
    else {
        console.log("All Flash Cards Created!");      
    }
}

createClozeCard();

module.exports = ClozeCard;