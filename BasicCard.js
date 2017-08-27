var inquirer = require('inquirer');
//module.exports = BasicCard;

//should accept two arguements (front and back)

// Object Constructor Function
function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

var firstPresident = new BasicCard("Who was the first president of the U.S.?", "George Washington");

//console.log(newCard);
console.log(firstPresident.front);