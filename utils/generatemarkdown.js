function generateMarkdown(answers) {
  return `
# ${answers.name}

## Description:

${answers.description}

## Technologies Used:

${answers.technologies}

## Dependencies:

${answers.install}

## Usage:

${answers.usage}

## Status of Project:

${answers.status}

## License:

${answers.license}

## Contribution Parameters:

${answers.contribution}

## Tests:

${answers.tests}

  `;
}

module.exports = generateMarkdown;
