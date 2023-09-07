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
        choices: [new inquirer.Separator(), "Circle", "Triangle", "Square"],
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

    // a switch statement that determines which shape was selected and adjusts it for the svg text
    switch(shape){
    case "Circle":
        var shapeChoice = "circle cx='0' cy='0' r='40'"
        break;
    case "Triangle":
        var shapeChoice = "polygon x='50%' y='50%' points='50 15, 100 100, 0 100'"
        break;
    case "Square":
        var shapeChoice = "rect x='50%' y='50%'"
        break;
    }


//Content of the svg file with variables added in throughout
var svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" style="background-color:black">
  <${shapeChoice} width='300' height='200' fill="blue" />
  <text x='50%' y='50' dominant-baseline="middle" text-anchor="middle" fill='red'>hi</text>
  </svg>
`;

var svgDemo = `
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100">
    <rect x="0" y="0" width="200" height="100" stroke="red" stroke-width="3px" fill="white"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">TEXT</text>    
  </svg>
`

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
