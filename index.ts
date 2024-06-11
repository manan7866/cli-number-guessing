#! /usr/bin/env node


import inquirer from "inquirer";

//

const randomNumber = Math.floor(Math.random() *6);


const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number Between 0 to 6 : ",
    }
]);

console.log(answers)

if(answers.userGuessedNumber === randomNumber){
    console.log("congratulations you guessed right number.")
}else {
    console.log("sorry you guessed wrong number")
}