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

    //a switch statement that determines which shape was selected and adjusts it for the svg text
    switch(shape){
    case "Circle":
        shapeChoice = "circle"
        break;
    case "Triangle":
        shapeChoice = "triangle"
        break;
    case "Rectangle":
        shapeChoice = "rect"
        break;
    }


//Content of the svg file with variables added in throughout
var svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <rect x="50" y="50" width="100" height="100" fill="blue" />
  </svg>
`;

//Function that actually writes the information to a file
    fs.writeFile('./logo.svg', svgContent, err => {
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
