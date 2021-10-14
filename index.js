const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Project title: ',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Description: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation instructions: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage information: ',
        name: 'usage',
        },
    {
        type: 'input',
        message: 'Contribution guidelines: ',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Test instructions: ',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'License: ',
        name: 'license',
        choices: ["MIT License", "GNU GPLv3"]
    },
    {
        type: 'input',
        message: 'Github username: ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Email address: ',
        name: 'email',
    },
  ])
  .then((response) => {
    console.log(response);

    const readme = `
        # README Generator
        
        ## Description
        ${response.description}
        ## Table of Contents

        ### Installation
        ${response.installation}
        ### Usage
        ${response.usage}
        ### License
        ${response.license}
        ### Contributing
        ${response.contributing}
        ### Tests
        ${response.tests}
        ### Questions
        [Link to Github] https://github.com/${response.github}
        If you have any questions, you can send me a mail to ${response.email}.
    `
    fs.writeFile("README.md", readme, error => {
        error ? console.log(error) : console.log("README File Created!");
    })
  }
  );