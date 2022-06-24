const inquirer = require('inquirer');


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.questions([
        {
            type: "input",
            title: "title",
            message: "What is the title of your project?(Required)",
            validate: (titleInput) => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log("Please enter a title for your project");
                    return false;

                }
            }
        },
        {
            type: "input",
            title: "installation",
            message: "Please provide instructions on how to install your project(Required)",
            validate: (installationInput) => {
                if (installationInput) {
                    return true;
                }
                else {
                    console.log("Please enter installation instructions");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            title: "confirmUsage ",
            message: "Would you like to provide uses for your project?",
            default: true
        },
        {
            type: "input",
            title: "usage",
            message: "List the various uses for your project",
            when: ({ confirmUsage }) => confirmUsage
        },

        {
            type: "confirm",
            title: "confirmContributors ",
            message: "Would you like to include other contributors?",
            default: true
        },
        {
            type: "input",
            title: "contributors",
            message: "List out name of contributors",
            when: ({ confirmContributors }) => confirmContributors

        },
        {
            type: "confirm",
            title: "confirmTests ",
            message: "Would you like to include tests of your project?",
            default: true
        },
        {
            type: "input",
            title: "tests",
            message: "Provide tests of your project",
            when: ({ confirmTests }) => confirmTests

        },
        {
            type: "input",
            title: "questions",
            message: "Please provide contact information for user questions(Required)",
            validate: (questionInput) => {
                if (questionInput) {
                    return true;
                }
                else {
                    console.log("Please enter installation instructions");
                    return false;
                }
            }
        },


    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();