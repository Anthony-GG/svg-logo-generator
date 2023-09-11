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
        var shapeChoice = "circle cx='150px' cy='100px' r='75' width='100%' height='100%'"
        var textHeight = "100px";
        break;
    case "Triangle":
        var shapeChoice = "polygon x='50px' y='50px' points='150, 18 244, 182 56, 182' width='100%' height='100%'"
        var textHeight = "125px";
        break;
    case "Square":
        var shapeChoice = "rect width='150' height='150' x='75px' y='25px'"
        var textHeight = "100px";
        break;
    }


//Content of the svg file with variables added in throughout
var svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <${shapeChoice} fill="${shapeColor}" />
  <text x="150px" y="${textHeight}" text-anchor="middle" dy="0.3em" style="font-size: 50px" fill="${textColor}">${text}</text>
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

