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
        choices: ["MIT", "GPL", "Apache"]
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

    let license = ``;
    switch (response.license) {
        case "MIT":
            license = 
`
MIT License

Copyright (c) 2021 Andres Liu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`
    }

    fs.writeFile("LICENSE.md", license, error => {
        error ? console.log(error) : console.log("LICENSE File Created!");
    })

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