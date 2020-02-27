require("dotenv").config();
const questions = require("./utils/questions");
const api = require("./utils/api");
const inquirer = require("inquirer");
const fs = require("fs");

function writeToFile(fileName, data) {}

async function init() {
  const userInfo = await inquirer.prompt(questions);

  const githubData = await api.getUser(userInfo.githubUsername);
  console.log(githubData);
}

init();
