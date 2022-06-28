// const fs = require('fs');
// const inquirer = require('inquirer');

// function renderLicenseSection(data) {
//     if (data.license === MIT) {
//         return ('https://img.shields.io/badge/License-MIT-yellow.svg')
//     }
//     else if (data.license === Apache) {
//         return ('https://img.shields.io/badge/License-Apache_2.0-blue.svg')
//     }

//     else if (data.license === BSD) {
//         return ('https://img.shields.io/badge/License-BSD_3--Clause-blue.svg')

//     }

//     else if (data.license === Mozilla) {
//         return ('https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg')

//     }


//     else if (data.license === none) {
//         return []

//     }

// }

// // module.exports = generateBadge;

// function renderSection(sectionName, sectionContent, shouldDisplay) {
//     if (!shouldDisplay)
//       return ""
//     return `##' ${sectionName}
//     ${sectionContent}
//      ${renderSection("license", 'data.confirmLicense', data.confirmLicense)}