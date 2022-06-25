// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  if (!license.badges) {
    license.badges = [];
  }

}

//Which license would you like to include 
url apache 
url b
none


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {
  if apache {
    return link
  }
  if none {

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
