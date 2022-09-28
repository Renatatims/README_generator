// Function to generate markdown for README
function generateMarkdown(data) {
  const badgeLicense = data.license.split(" ").join("%20");
  const urlLicense = data.license.split(" ").join("-");

  return `# ${data.title}
  
  [![License: ${data.license}](https://img.shields.io/badge/License-${badgeLicense}-blue.svg)](https://opensource.org/licenses/${urlLicense})

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Credits](#credits)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Features
  ${data.features}

  ## License
  [![License: ${data.license}](https://img.shields.io/badge/License-${badgeLicense}-blue.svg)](https://opensource.org/licenses/${urlLicense})
  
  This application is covered by ${data.license} license, available at:
  https://opensource.org/licenses/${urlLicense}

  ## Contributing
  ${data.contributers}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions please contact me at:
   - GitHub account:https://gihub.com/${data.github}
   - e-mail account: ${data.email}

  ## Credits
  ${data.credits}
 
`;
}

module.exports = generateMarkdown;
