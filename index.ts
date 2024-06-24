#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


enum ExercisesTime {
    pushups = " 2 sets of 10 to 20 Pushups in Morning.",
    squats = " 5 sets of 10 Squats in Evening.",
    deadLifts = "2 to 3 times a week.",
    burpees = "3 sets of 15 reps in morning.",
    running = "10 to 15 minutes a day.",
    cycling = "30 to 45 minutes a day."
}
enum ExercisesDetail {
    pushups = "Push-ups are exercises to strengthen your arms and chest muscles.",
    squats = "Squats can build strength in your lower body and core muscles.",
    deadLifts = "Deadlifts help in burning fats, building Muscles and gaining better Posture.",
    burpees = "Burpees is a full body exercise used in strength training and for stronger Heart and Lungs.",
    running = "Running helps to build strong bones, burns Cholestrol and strengthen your Muscles.",
    cycling = "Cycling increases Cardiovuscular fitness."
}
enum Trainers {
    trainer1 = "Sara",
    trainer2 = "Aliza",
    trainer3 = "Kainaat",
    trainer4 = "Maryam",
}
const workout = "\nWORK-OUT :";
const benefits = "\nBENEFITS :";
const timing = "\nTRAINING TIME :";
const name = "\nNAME :";
const trainer = "\nTRAINER :"
const intro = "\n------------------------ WELCOME TO AQSA'S GYM ------------------------\n";
const detailsIntro = "\n----------------------- WORKOUT DETAILS -------------------------"
console.log(chalk.bold.yellowBright(intro));

let users =  await inquirer.prompt([{
    name: "username",
    type: "string",
    message: chalk.blueBright.bold("WHAT IS YOUR NAME?")
}]);

while(true){

    let user = await inquirer.prompt([{
        name: "exercises",
        message: chalk.blueBright.bold("WHAT KIND OF WORKOUT WOULD YOU LIKE BEST?\n"),
        type: "list",
        choices: ["Push-ups", "Squats", "Dead-lifts", "Burpees", "Running", "Cycling"]
    },
    {
        name: "trainer",
        message: chalk.blueBright.bold("WHO WOULD YOU LIKE TO CHOOSE AS A TRAINER?\n"),
        type: "list",
        choices: [Trainers.trainer1, Trainers.trainer2, Trainers.trainer3, Trainers.trainer4]
        
    }
])

    if (user.exercises == "Push-ups") {
        console.log(chalk.greenBright.bold(detailsIntro));
        console.log(chalk.greenBright(`${name} ${users.username}`));
        console.log(chalk.greenBright(`${workout} ${user.exercises}`));
        console.log(chalk.greenBright(`${benefits} ${ExercisesDetail.pushups}`));
        console.log(chalk.greenBright(`${trainer} ${user.trainer}`));
        console.log(chalk.greenBright(`${timing} ${ExercisesTime.pushups}`));
    } 
    else if (user.exercises == "Squats") {
        console.log(chalk.greenBright.bold(detailsIntro));
        console.log(chalk.greenBright(`${name} ${users.username}`));
        console.log(chalk.greenBright(`${workout} ${user.exercises}`));
        console.log(chalk.greenBright(`${benefits} ${ExercisesDetail.squats}`));
        console.log(chalk.greenBright(`${trainer} ${user.trainer}`));
        console.log(chalk.greenBright(`${timing} ${ExercisesTime.squats}`));
    }
    else if (user.exercises == "Dead-lifts") {
        console.log(chalk.greenBright.bold(detailsIntro));
        console.log(chalk.greenBright(`${name} ${users.username}`));
        console.log(chalk.greenBright(`${workout} ${user.exercises}`));
        console.log(chalk.greenBright(`${benefits} ${ExercisesDetail.deadLifts}`));
        console.log(chalk.greenBright(`${trainer} ${user.trainer}`));
        console.log(chalk.greenBright(`${timing} ${ExercisesTime.deadLifts}`));
    }
    else if (user.exercises == "Burpees") {
        console.log(chalk.greenBright.bold(detailsIntro));
        console.log(chalk.greenBright(`${name} ${users.username}`));
        console.log(chalk.greenBright(`${workout} ${user.exercises}`));
        console.log(chalk.greenBright(`${benefits} ${ExercisesDetail.burpees}`));
        console.log(chalk.greenBright(`${trainer} ${user.trainer}`));
        console.log(chalk.greenBright(`${timing} ${ExercisesTime.burpees}`));
    }
    else if (user.exercises == "Running") {
        console.log(chalk.greenBright.bold(detailsIntro));
        console.log(chalk.greenBright(`${name} ${users.username}`));
        console.log(chalk.greenBright(`${workout} ${user.exercises}`));
        console.log(chalk.greenBright(`${benefits} ${ExercisesDetail.running}`));
        console.log(chalk.greenBright(`${trainer} ${user.trainer}`));
        console.log(chalk.greenBright(`${timing} ${ExercisesTime.running}`));
    }
    else if (user.exercises == "Cycling") {
        console.log(chalk.greenBright.bold(detailsIntro));
        console.log(chalk.greenBright(`${name} ${users.username}`));
        console.log(chalk.greenBright(`${workout} ${user.exercises}`));
        console.log(chalk.greenBright(`${benefits} ${ExercisesDetail.cycling}`));
        console.log(chalk.greenBright(`${trainer} ${user.trainer}`));
        console.log(chalk.greenBright(`${timing} ${ExercisesTime.cycling}`));
    }
    
    const runAgain = await inquirer.prompt([{
        name: "ask",
        message: chalk.blueBright.bold("\nWOULD YOU LIKE TO CHOOSE ANOTHER WORKOUT EXERCISE OR EXIT?"),
        type: "confirm",
        default: true,
    }]);
    if(runAgain.ask == false){
        console.log(chalk.yellowBright.bold(`\nTHANK YOU, ${users.username} FOR VISITING !`));
        break
    }
    
}