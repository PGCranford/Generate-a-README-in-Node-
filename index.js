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
                name: "inputTitle",
                message: "What is the title of your project?",
                validate: (titleInput) => {
                    if (titleInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter a name for your project.");
                        return false;

                    }
                }
            },
            {
                type: "input",
                name: "description",
                message: "Please provide a description of your project.",
                validate: (descriptionInput) => {
                    if (descriptionInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter a valid description.");
                        return false;
                    }
                }
            },

            {
                type: "input",
                name: "installation",
                message: "Please provide instructions on how to install your project.",
                validate: (installationInput) => {
                    if (installationInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter installation instructions.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "inputUsage",
                message: "Plese list the uses for your project.",
                validate: (usageInput) => {
                    if (usageInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter uses for your project.");
                        return false;

                    }
                },

            },
            {
                type: "input",
                name: "inputContributors",
                message: "Plese list the contributors for your project.",
                validate: (contributorsInput) => {
                    if (contributorsInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter the contirbutors to the project.");
                        return false;
                    }
                },
            },
            {
                type: "input",
                name: "inputTsts",
                message: "Plese list the test for your project.",
                validate: (tstsInput) => {
                    if (tstsInput) {
                        return true;

                    }
                    else {
                        console.log("Please provide the tests done on your project.");
                        return false;

                    }
                },
            },
            {
                type: "input",
                name: "contact",
                message: "Please provide your GitHub username.",
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
                type: "input",
                name: "email",
                message: "Please provide your Email address in order to be contacted.",
                validate: (emailInput) => {
                    if (emailInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your Email adress");
                        return false;
                    }

                }
            },

            {
                type: "list",
                name: "license",
                message: "Which license would you like to include",
                choices: ['MIT', 'Apache', 'BSD', 'Mozilla', 'none'],
                validate: ({ choices }) => choices

            },


        ])


};
// TODO: Create a function to write README file

questions()
    .then(userInput => {
        const createPage = generateMarkdown(userInput);


        fs.writeFile('README.md', createPage, err => {
            if (err) throw new Error(err);
            console.log("README was created!");
        });
    })




