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
    return "The MIT License is an extremely popular open source software license used on the likes of Ruby on Rails, jQuery, and Node.js. As an open source license, the MIT License dictates what you must, can, and can’t do when you use, modify, and/or redistribute the licensed code"
  }
  else if (license === 'Apache') {
    return "The Apache License is a free and open source software license written by the Apache Software Foundation (ASF) that is currently in its third iteration. It allows software and projects to be freely used, modified, or redistributed under the terms of the license for personal, commercial, or company purposes without concern for royalties. Apache encourages users to voluntarily improve the design of software applications through open source code."
  }

  else if (license === 'BSD') {
    return "BSD licenses are a family of permissive free software licenses, imposing minimal restrictions on the use and distribution of covered software. This is in contrast to copyleft licenses, which have share-alike requirements. The original BSD license was used for its namesake, the Berkeley Software Distribution (BSD), a Unix-like operating system. The original version has since been revised, and its descendants are referred to as modified BSD licenses."

  }

  else if (license === 'Mozilla') {
    return "As a weak copyleft license, the Mozilla Public License 2.0 allows OSS authors to both protect their contributions to a piece of OSS and have the opportunity for their work to be incorporated into well-known and successful pieces of proprietary software."

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

  2.[LicenseInformation](#LicensceInformation)

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

