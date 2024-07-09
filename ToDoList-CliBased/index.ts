#! /usr/bin/env node
import inquirer from"inquirer"
let todos=[];
let condition =true;
while(condition){
    let todoQuestions=await inquirer.prompt(
        [
        {
                name:"firstquestion",
                type:"input",
                message:"What do you want to add in your todos?",
                validate: (input) => {
                    const stringInput = String(input);
                    if (stringInput===""|| stringInput===" ") {
                        return ("ToDo cannot be empty");
                    }
                    return true;
                },
            },
            {
                name:"update",
                type:"confirm",
                message:"Would you like to update anything in your todo",
                default:"false"
            },
        ]
     );
     if(todoQuestions.update!==true){
        todos.push(todoQuestions.firstquestion);
        console.log(todoQuestions.firstquestion);
     }
     else{
        let a=await inquirer.prompt(
            [
                {
                    name:"updatetodo",
                    type:"input",
                    message:"Update your todo",
                }
            ]
        );
        console.log("Updating your todo....");
        todos.push(a.updatetodo);
        console.log(a.updatetodo);
     }
     console.log(todos);
     let b=await inquirer.prompt(
        [
            {
                name:"delete",
                type:"confirm",
                message:"Would you like to delete your todo's",
                default:"false"
            },
        ]
     );
     if(b.delete===true){
        todos.pop();
     }
    
     console.log(todos);
     let c=await inquirer.prompt(
        [
            {
                name:"secondquestion",
                type:"confirm",
                message:"Would you like to add more in your todo's",
                default:"true"
            },
        ]
     )
     condition=c.secondquestion;
};



