require("dotenv").config();
const questions = require("./utils/questions");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generatemarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

async function init() {
  const answers = await inquirer.prompt(questions);
  const githubData = await api.getUser(JSON.stringify(api.githubUsername));

  myreadme = generateMarkdown(answers, githubData);

  fs.writeFile("testing.md", myreadme, function(err) {
    if (err) {
      return console.log(err);
    }
  });
}

init();
