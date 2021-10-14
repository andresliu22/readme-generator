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
        choices: ["MIT", "GPL"]
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

    const readme = 
`
# README Generator

## Description
${response.description}
## Table of Contents

### Installation
${response.installation}
### Usage
${response.usage}
### License
Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the ${response.license} license.
### Contributing
${response.contributing}
### Tests
${response.tests}
### Questions
* [Link to Github] https://github.com/${response.github}
* If you have any questions, send me an email to ${response.email}. I will try answer your questions as soon as possible.
`
    fs.writeFile("README.md", readme, error => {
        error ? console.log(error) : console.log("README File Created!");
    })
  }
  );