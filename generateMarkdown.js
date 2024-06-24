// // TODO: Create a function that returns a license badge based on which license is passed in

// const { link } = require("fs");

// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   data.license ==="None"
//   ? license = ''
//   : license = 
// }
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//  data.license==="None"
//  ? license = ''
//  : license = 
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##Description
  ${data.description}
  ##Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributors](#contributors)
  -[Testing](#testing)
  -[Questions](#questions)
  ##Installation
  ${data.installation}
  ##Usage
  ${data.usage}
  ##Contributors 
  ${data.contribution}
  ##Testing
  ${data.testing}
  // renderLicenseSection(${data.license});
  ##Questions
  If you have any questions please see my Github, https://github.com/${data.username} or feel free to reach out
  via email, ${data.email}.

`;
}

module.exports = generateMarkdown;
