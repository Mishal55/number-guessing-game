#! /usr/bin/env node

//Number guesing Game in typescript BY Mishal Nadeem

console.log("guess a number b/n 1 to 10" )

let a : number = Math.floor(Math.random()*10)

import inquirer from "inquirer";

while(true){
    let input = await inquirer.prompt
    
({name:"guess",type:"number",
message:"enter your guess number"})

//code for given number
let ans: number = input.guess

if (a==ans)
{console.log("congratulations your guess number is correct")
break;}

else{console.log("Sorry try agin")}
}