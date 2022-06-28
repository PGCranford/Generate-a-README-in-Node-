const fs = require('fs');
const inquirer = require('inquirer');


function getLicenseBadge(license) {
  if (license === 'MIT') {
    return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }
  else if (license === 'Apache') {
    return '![Apache License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }

  else if (license === 'BSD') {
    return '![BSD License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'

  }

  else if (license === 'Mozilla') {
    return '![Mozilla License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'

  }


  else if (license === 'none') {
    return ""

  }

}

//
// TODO: Create a function to generate markdown for README
const generateMarkdown = userInput => {

  let theTitle = userInput.inputTitle;


  return `# ${theTitle}  
  ${getLicenseBadge(userInput.license)}

  Table of contents

  1.[Descripition](#-Descripition)

  2.[Installation Instruction](#Installation-Instructions)

  3.[Usage](#Usage)

  4.[Contributors](#Contributors)

  5.[Test Instruction](#Test-Instruction)

  6.[Questions](#Questions)


  ## Descripition 
  ${userInput.description}

  
  ## Installation Instructions 
  ${userInput.installation}


  ## Usage 
  ${userInput.inputUsage}

  ## Contributors
  ${userInput.inputContributors}

  ## Test Instruction 

  
  ### Questions 
  https://github.com/${userInput.contact}  
  ${userInput.email}

  `;
};


module.exports = generateMarkdown;

