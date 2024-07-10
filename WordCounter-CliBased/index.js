#! /usr/bin/env node
import inquirer from "inquirer";
let a = await inquirer.prompt([
    {
        name: "Question",
        type: "input",
        message: "Enter the Paragraph",
        validate: (input) => {
            const stringInput = String(input);
            if (stringInput === " " || stringInput === "") {
                return ("Paragraph cannot be empty");
            }
            return true;
        },
    }
]);
console.log("Counting the paragraph or string you entered");
console.log("Separately counting your words and total characters in your paragraph");
console.log("----------------------------------------------------------------------");
let count1 = 1, count2 = 0;
;
for (let i = 0; i < a.Question.length; i++) {
    if (a.Question[i] === " ")
        count1++;
    if (i === a.Question.length - 1 || i === 0) {
        if (a.Question[i] === " ")
            count1--;
    }
}
console.log("The total number of words in your paragraph is: ", count1);
for (let i = 0; i < a.Question.length; i++) {
    if (a.Question[i] !== " ") {
        count2++;
    }
}
console.log("The Total Characters in your Paragraph is: ", count2);
