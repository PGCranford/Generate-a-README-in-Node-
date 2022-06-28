const fs = require('fs');
const inquirer = require('inquirer');



// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string




// TODO: Create a function that returns the license link

// If there is no license, return an empty string
//function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README



// function renderLicenseSection(data) {
//   if (data.license === 'MIT') {
//     return ('https://img.shields.io/badge/License-MIT-yellow.svg')
//   }
//   else if (data.license === Apache) {
//     return ('https://img.shields.io/badge/License-Apache_2.0-blue.svg')
//   }

//   else if (data.license === BSD) {
//     return ('https://img.shields.io/badge/License-BSD_3--Clause-blue.svg')

//   }

//   else if (data.license === Mozilla) {
//     return ('https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg')

//   }


//   else if (data.license === none) {
//     return []

//   }

// }
// renderLicenseSection()

// function renderSection(('## Tests'), inputTsts, shouldDisplay) {
//   if (!shouldDisplay)
//     return ""
//   return `##' ${sectionName}
//   ${sectionContent}
//    ${renderSection("license", 'data.confirmLicense', data.confirmLicense)};

//   `
// }
// TODO: Create a function to generate markdown for README
const generateMarkdown = userInput => {

  let theTitle = userInput.inputTitle;


  return `# ${theTitle}
  // badgeimage
  Table of contents
  1.[Descripition](#-Descripition)\
  2.[Installation Instruction](#Installation-Instructions)\
  3.[Usage](#Usage)\
  4.[Contributors](#Contributors)\
  5.[Test Instruction](#Test-Instruction)\
  6.[Questions](#Questions)\


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

