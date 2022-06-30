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
function getBadgeDescription(license) {
  if (license === 'MIT') {
    return "![MIT License]('The MIT License is an extremely popular open source software license used on the likes of Ruby on Rails, jQuery, and Node.js. As an open source license, the MIT License dictates what you must, can, and can’t do when you use, modify, and/or redistribute the licensed code)"
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

  1.[Descripition](#Descripition)

  2.[License Information](#Licensce Information)

  3.[Installation Instruction](#Installation-Instructions)

 4.[Usage](#Usage)

  5.[Contributors](#Contributors)

  6.[Test Instruction](#Test-Instruction)

  7.[Questions](#Questions)


  ## Descripition 
  ${userInput.description}

  ## License Information 
  ${getBadgeDescription(userInput.license)}

  
  ## Installation Instructions 
  ${userInput.installation}


  ## Usage 
  ${userInput.inputUsage}

  ## Contributors
  ${userInput.inputContributors}

  ## Test Instruction 
  ${userInput.inputTsts}

  
  ### Questions 
  https://github.com/${userInput.contact}  
  ${userInput.email}

  `;
};


module.exports = generateMarkdown;

