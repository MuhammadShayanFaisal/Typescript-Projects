#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber=Math.floor(Math.random()*10+1);
const answers=await inquirer.prompt([
    {
        name:"userGuessednumber",
        type:"number",
        message:"Please guess the number range from (1-10)"
    },
])
if(answers.userGuessednumber===randomnumber)
    console.log("Congratulations!, You guessed right number")
else if(answers.userGuessednumber>randomnumber)
    console.log("Wrong Guess,\nHint:Guessed number is so high");
else
    console.log("Wrong Guess,\nHint:Guessed number is so low");