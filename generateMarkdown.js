// // TODO: Create a function that returns a license badge based on which license is passed in

// const { link } = require("fs");

// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   data.license ==="None"
//   ? license = ''
//   : license = 
// }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === 'None') {
  return '' 
} else {
  license === `https://choosealicense.com/${data.license}/`
}
}

// // TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  license==="None"
  ? license = ''
  : license = `This project uses a ${data.license} license.`
  renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} <br>##Description <br>${data.description} <br> ##Table of Contents <br>-[Installation](#installation) <br> -[Usage](#usage) <br> -[Contributors](#contributors) <br>-[Testing](#testing) <br>-[Questions](#questions) <br>##Installation <br>${data.installation} <br>##Usage <br>${data.usage} <br>##Contributors <br>${data.contribution} <br>##Testing <br>${data.testing} <br>##Questions <br>If you have any questions please see my Github, https://github.com/${data.github} or feel free to reach out via email, ${data.email}. 

`;
renderLicenseSection (`${data.license}`)
}

module.exports = generateMarkdown;
