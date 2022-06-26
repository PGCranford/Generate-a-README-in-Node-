const fs = require('fs');
const inquirer = require('inquirer');
// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string


// function renderLicenseBadge(license) {
//   return inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "license",
//         message: "Which license would you like to include",
//         choices: ['MIT', 'Apache', 'BSD', 'Mozilla', 'none'],
//       },

//     ])

//     .then((answer) => {
//       answer = (answer.license)
//     });

// }

// TODO: Create a function that returns the license link

// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {
  if (data.confirmLicense.MIT) {
    return ('https://img.shields.io/badge/License-MIT-yellow.svg')
  }
  else if (data.license.Apache) {
    return ('https://img.shields.io/badge/License-Apache_2.0-blue.svg')
  }

  else if (data.license.BSD) {
    return ('https://img.shields.io/badge/License-BSD_3--Clause-blue.svg')

  }

  else if (data.license.Mozilla) {
    return ('https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg')

  }


  else if (data.license.none) {
    return []

  }
}

function renderSection(sectionName, sectionContent, shouldDisplay) {
  if (!shouldDisplay)
    return ""
  return `## ${sectionName}
  ${sectionContent}

  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  // badgeimage
  Table of contents 
  1. [Installation](#Installation)

  ## Installation
  ${data.installation}


  ## Usage 
  ${data.inputUsage}

  ## Contributors
  ${data.inputContributors}

  ## Tests
  ${data.tstsInput}

  
  ${renderSection("Usage", 'data.inputUsage', data.inputContributors)}
  
  ${renderSection("license", 'data.confirmLicense', data.confirmLicense)}
  
  ### Contact 
  Please use my Github to contact me 
  https://github.com/${data.contact}
`;
}

module.exports = generateMarkdown;
