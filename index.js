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
        message: 'Licence: ',
        name: 'licence',
        choices: ["MIT Licence", "GNU GPLv3"]
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
    fs.writeFile("README.md", response, error => {
        error ? console.log(error) : console.log("README File Created!");
    })
  }
  );