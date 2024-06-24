// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const genrateMarkdown = require ('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    inquirer 
    .prompt([
        {
            type: "Input",
            message: "What's the name of your project?",
            name: "project-title"
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
            name:"contributions"
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
            choices: ["None","Apache License 2.0", "GNU General Public License v3.0","MIT License", "BSD 2-Clause'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Ecplipse Public License 2.0", "GNU Affero General Public License v2.0","GNU Affero Genral Public License v3.0", "Mozzila Public License 2.0", "The Unilicense"]
        }
    ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
