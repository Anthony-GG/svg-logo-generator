//Imports required packages
import fs from 'fs';
import inquirer from 'inquirer';

//Purpose: To ask the user questions and accept inputs to generate a logo.svg file using the information they provide
//Parameters: Inputs from the user
//Returns: logo.svg
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        message: 'Characters for logo (up to three characters):',
        name: 'text',
      },
      {
        type: 'input',
        message: 'Text color (keyword or hexadecimal format):',
        name: 'textColor',
      },
      {
        type: 'list',
        message: 'Select the desired shape for the logo:',
        choices: [new inquirer.Separator(), "Circle", "Square", "Triangle"],
        name: 'shape',
      },
      {
        type: 'input',
        message: 'Shape color (keyword or hexadecimal format):',
        name: 'shapeColor',
      },
  ])
  .then((answers) => {
    // Initilizes variables corresponding to each of the input responses for readability sake
    var text = answers.text;
    var textColor = answers.textColor;
    var shape = answers.shape;
    var shapeColor = answers.shapeColor;

    //a switch statement that determines which license was selected and adds a corresponding to badge link to the variable licenseBadge
    switch(license){
    case "MIT":
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        break;
    case "GNU GPLv3":
        licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        break;
    case "Apache":
        licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        break;
    }


//Content of the readme file with variables added in throughout
var readmeContent = `
# ${title}

${licenseBadge}
    
## Description
    
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contrubuting](#contributing)
- [Testing](#testing)
- [License](#license)
- [Contact Me](#questions)

## Installation

${install}

## Usage

${usage}

## Contributing

${contribute}

## Testing

${test}

## License

The license used in this project was the ${license} license! Please reference the LICENSE file inside of the repository.

## Questions?

You can find me here on GitHub at https://www.github.com/${github} <br><br>
Otherwise, feel free to reach me at ${email}
---
`;

//Function that actually writes the information to a file
    fs.writeFile('./README.md', readmeContent, err => {
        if (err) {
        console.error(err);
        }
        // file written successfully
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
