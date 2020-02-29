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
    name: "technologies",
    type: "input",
    message: "List all technologies used (ie. Bootstrap, jQuery, etc.)"
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
    name: "status",
    type: "list",
    message: "What is this project's status?",
    choices: ["Completed", "Active", "Inactive"]
  },
  {
    name: "license",
    type: "list",
    message: "What kind of license would you like?",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense"
    ]
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

module.exports = questions;
