// function to generate markdown for README
function generateMarkdown(data) {
  //badges()
  return `  




   
   # ${data.title}
  

badges();
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)


## Description:
${data.description}


## Installation:
${data.installation}


## Usage:
${data.usage}


## License:
This Repository is covered under the following license: [${data.license}] 

## Contributors:
${data.contributors}



## Tests:
${data.tests}


## Questions
Contact me:
Github: [https://github.com/${data.username}](https://github.com/${data.username})
Email: [${data.email}](${data.email})
`;


// function badges() {
//   if (ISC = data.license) {
//        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
//    } else if (data.license = MIT) {
//        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//    } else if (data.license = Apache-2.0) {
//        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
//    } else {
//        '';
//    }
//   }
}

module.exports = generateMarkdown;