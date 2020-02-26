require("dotenv").config();
console.log(process.env);

const questions = [
  {
    name: "githubUsername",
    type: "input",
    message: "What is your Github username?"
  },
  {
    name: "name",
    type: "input",
    message: "What is the name of your project?"
  },
  {
    name: "description",
    type: "input",
    message: "Please provide a short description of your project."
  },
  {
    name: "install",
    type: "input",
    message: "What command does the user need to run to install dependencies?"
  },
  {
    name: "usage",
    type: "input",
    message: "What is this project used for?"
  },
  {
    name: "license",
    type: "list",
    message: "What kind of license would you like?",
    choices: ["a", "b", "c", "d"]
  },
  {
    name: "contribution",
    type: "input",
    message: "What are the contribution parameters for your project?"
  },
  {
    name: "tests",
    type: "input",
    message: "How would a user run tests on your project?"
  }
];

function writeToFile(fileName, data) {}

function init() {}

init();
