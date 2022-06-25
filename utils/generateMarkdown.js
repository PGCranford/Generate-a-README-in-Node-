// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  if (!license.badges) {
    license.badges = [];
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {
  if (${ MIT }) {
    return ('https://img.shields.io/badge/License-MIT-yellow.svg')
  }
  else if (Apache 2.0) {
    return ('https://img.shields.io/badge/License-Apache_2.0-blue.svg')
  }

  else if (BSD) {
    return ('https://img.shields.io/badge/License-BSD_3--Clause-blue.svg')

  }

  else if (Mozilla Public License 2.0) {
    return ('https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg')

  }


  if none {
    ""

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
  ${data.contributorsInput}

  ## Tests
  ${data.tstsInput}

  ### Contact 
  Please use my Github to contact me 
  "https://github.com/" + ${data.contactInput}
  
  ${renderSection("Usage", data.inputUsage, data.confirmUsage)}

  ${renderSection("license", `data.inputUsage`, data.confirmUsage)}

`;
}

module.exports = generateMarkdown;
