// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please describe your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please describe the steps and tools for the installation of your application',
        name: 'install'
    },

    {
        type: 'input',
        message: 'Please describe the usage of your application',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please describe the Features in your application',
        name: 'features'
    },
    {
        type: 'list',
        message: 'Please select a License',
        choices: ['Apache 2.0', 'BSL 1.0', 'EPL 2.0', 'MIT', 'MPL 2.0'],
        name: 'license'
    },

    {
        type: 'input',
        message: 'Please enter contributers and how to contribute with your project',
        name: 'contributers'
    },

    {
        type: 'input',
        message: 'Please describe the steps on how your application can be tested',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Please enter your Github username',
        name: 'github'
    },

    {
        type: 'input',
        message: 'Please enter your e-mail address',
        name: 'email'
    },

    {
        type: 'input',
        message: 'Credits',
        name: 'credits'
    },

    {
        type: 'input',
        message: 'Please enter a name to save this file',
        name: 'fileName'
    },
];

// User Input Function - return answers

function userInput() {
    return inquirer.prompt(questions);
}

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) => {
        err ? console.log(err) : console.log(`Your README file, ${fileName}.md, was successfully generated!`);
    })
};

// Function to initialize the application
async function init() {
    let userAnswers = await userInput();
    writeToFile((userAnswers.fileName), (generateMarkdown(userAnswers)));
}

// Call init to initialize application
init();
