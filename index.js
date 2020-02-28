require("dotenv").config();
const questions = require("./utils/questions");
const api = require("./utils/api");
const inquirer = require("inquirer");
const fs = require("fs");

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const githubData = await api.getUser(userInfo.githubUsername);
    console.log(githubData);

    myreadme = generateMD(answers);

    fs.writeFile("readme.md", myreadme, function(err) {
      if (err) {
        return console.log(err);
      }
    });
  } catch (err) {
    return;
  }
}

init();
