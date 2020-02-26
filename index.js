require("dotenv").config();
const questions = require("./utils/questions");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt(questions);

function writeToFile(fileName, data) {}

function init() {}

init();
