// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = userInput => {

    return inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "What is the name of your project?(Required)",
                validate: (titleInput) => {
                    if (titleInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter a name for your project");
                        return false;

                    }
                }
            },


            {
                type: "input",
                name: "installation",
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
                name: "confirmUsage",
                message: "Would you like to provide uses for your project?",
                default: true
            },
            {
                type: "input",
                name: "inputUsage",
                message: "Plese list the uses for your project",
                validate: (usageInput) => {
                    if (usageInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter uses for your project");
                        return false;

                    }
                },
                when: ({ confirmUsage }) => confirmUsage
            },

            {
                type: "confirm",
                name: "confirmContributors",
                message: "Would you like to include other contributors?",
                default: true
            },
            {
                type: "input",
                name: "inputContributors",
                message: "Plese list the contributors for your project",
                validate: (contributorsInput) => {
                    if (contributorsInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter the contirbutors to the project.");
                        return false;
                    }
                },
                when: ({ confirmContributors }) => confirmContributors


            },
            {
                type: "confirm",
                name: "confirmTsts",
                message: "Would you like to include tests of your project?",
                default: true
            },
            {
                type: "input",
                name: "tstsInput",
                message: "Plese list the test for your project",
                validate: (tstsInput) => {
                    if (tstsInput) {
                        return true;
                    }
                    else {
                        console.log("Please provide the tests done on your project.");
                        return false;

                    }
                },
                when: ({ confirmTsts }) => confirmTsts


            },
            {
                type: "input",
                name: "contact",
                message: "Please provide your GitHub username for user questions(Required)",
                validate: (contactInput) => {
                    if (contactInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your Github Repo");
                        return false;
                    }
                }
            },
            {
                type: "confirm",
                name: "confirmLicense",
                message: "Would you like to include an Open Source License?",
                default: true
            },
            {
                type: "list",
                name: "license",
                message: "Which license would you like to include",
                choices: ['MIT', 'Apache', 'BSD', 'Mozilla', 'none'],
                when: ({ confirmLicense }) => confirmLicense

            },


        ])


    // .then((answer) => {
    //     answer = (answer.license)
    // });

};



// TODO: Create a function to write README file

// Function call to initialize app
questions()
    .then(userInput => {
        const createPage = generateMarkdown(userInput);




        fs.writeFile('README.md', createPage, err => {
            if (err) throw new Error(err);
            console.log("README was created!");
        });
    })



