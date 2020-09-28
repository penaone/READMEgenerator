const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');



// array of questions for user
const questions = inquirer.prompt([{
      type: 'input',
      name: 'title',
      message: 'What is the title of your Project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your Project title');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your Project. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project description.');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions if needed or None. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter installation instructions or None.');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please provide usage information.');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'contributors',
      message: 'Who if anyone contributed to this Project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please list any contributors.');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'tests',
      message: 'Describe any test required'
    },

    {
      type: "list",
      name: "license",
      message: "Select the License",
      choices: [
        "MIT",
        "APACHE-2.0",
        "ISC",
        "None"
      ]
    },

    {
      type: "input",
      name: "username",
      message: "please enter your github username"
    },

    {
      type: "input",
      name: "email",
      message: "please enter your github affiliated email"
    },


  ]);

// function to write README file
function writeFile(fileName, data) {
  fs.writeFile(fileName, data,'utf8', (err) => {
    if (err) 
      throw err;
    
  });
}

// function to initialize program
function init() {
  questions.then(answers => {
    const response = generateMarkdown(answers);
    writeFile("./README.md", response);
  })

}

// function call to initialize program
init();