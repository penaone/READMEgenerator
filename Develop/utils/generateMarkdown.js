// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `
If (${data.license}=ISC) {
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC);  
} else if (${data.license}=MIT) {
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT);
} else if (${data.license}=Apache-2.0) {
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0);
} else {
  '';
}


# ${data.title}


## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage-information)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)


## Description:
${data.description}


## Installation:
${data.installation}


## Usage-Information:
${data.usage}


## License:
This Repository is covered under the following license: [${data.license}] 

## Contributors:
${data.contributors}



## Tests:
${data.test}


## Questions
Contact me:
Github: [https://github.com/${data.username}](https://github.com/${data.username})
Email: [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;