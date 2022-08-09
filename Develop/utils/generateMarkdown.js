const fs = require('fs');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license please') {
    return ` ![${license} badge](https://img.shields.io/badge/License-${license}-brightgreen)`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license please') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license please') {
    return ` 
My app is covered under the following license

${renderLicenseLink(license)}

    `;
  } else {
    return ' ';
  }
}

function renderContributeSection(confirmContribute, data) {
  if (!confirmContribute) {
    return `
  I have decided not to accept any contributions from third parties at this time, please contact me below for further advisement, Thank you!
    `;
  } else {
    return `
  ${data}
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

  ## Table-Of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions/Contact](#questions/contact)

# Description

#### What ${data.title} Does

  ${data.description}

#### Why I Made ${data.title}

  ${data.why}

#### Target Audience for ${data.title} 

  ${data.who}

# Installation

  ${data.install}

# Usage

${data.usage}

# License

${renderLicenseSection(data.license)}

# Contributing

${renderContributeSection(data.confirmContribute, data.contribute)}

# Tests

${data.tests}

# Questions/Contact

Please feel free to ask me any questions or contact me through either of these links below:

[${data.github}](https://github.com/${data.github})

[${data.email}](mailto:${data.email})

<br>

## Maker
Made with ❤️ by ${data.name}

`;
}


module.exports = generateMarkdown;



//fix input for license
//make license hyperlink
//make video
//make readme
