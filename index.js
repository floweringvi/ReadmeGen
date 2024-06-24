// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
 const generateMarkdown =require('./generateMarkdown.js')
// TODO: Create an array of questions for user input

const questions = [
    
    
        {
            type: "input",
            message: "What's the name of your project?",
            name: "title"
        },
        {
            type:"input",
            message: "What is your project about?", 
            name: "description"
        }, 
        {
            type: "input",
            message: "How do you install your program?", 
            name:"installation"
        },
        {
            type:"input",
            message:"How do you use your program?",
            name:"usage"
        },
        {
            type:"input",
            message:"Did you have any contributors?",
            name:"contribution"
        },
        {
            type:"input",
            message:"How should one test your program?",
            name:"testing"
        },
        {
            type: "list",
            message:"What kind of license is being used?",
            name:"license",
            choices: ["None","MIT","apache-2.0","gpl-3.0", "ISC"]
        },
        {
            type:"input",
            message:"What's your Github username?",
            name:"github"
        },
        {
            type:"input",
            message:"What's your email address?",
            name:"email"
        }
    
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile (fileName, JSON.stringify(data), (err) =>
    err ? console.error(err) : console.log("Here's your Readme!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        writeToFile("README.md", generateMarkdown(answers))
    })


}

// Function call to initialize app
init();
