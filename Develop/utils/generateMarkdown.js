const fs = require('fs');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'No License Please') {
    return ` ![APM](https://img.shields.io/apm/l/${license}?style=for-the-badge)`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'No License Please') {
    return `[${license}] [https://choosealicense.com/licenses/${license}/]`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No License Please') {
    return ` 
    ## [License](#table-of-contents)

    My app is covered under the following license:
    ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} 

${renderLicenseBadge(data.license)}

  ## Table-Of-Contents

  * Description
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions/Contact

# Description

  ${data.description}

  ${data.why}

  ${data.who}

# Installation
# Usage
${renderLicenseSection(data.license)}
# Contributing
# Tests
# Questions/Contact

## Maker
Made with ❤️ by ${data.name}

`;
}


module.exports = generateMarkdown;
