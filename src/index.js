//const {method, otherMethod} = require('./myModule.js');
//const { generateReadme, writeToFile } = require("./readme-generator");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description?",
  },
  {
    type: "confirm",
    name: "hasAnInstallation",
    message: "do you have an installation script?",
  },
  {
    type: "input",
    name: "Installation",
    message: "What is the installation script?",
    when: (answers) => {
      return answers.hasAnInstallation;
    },
  },
  {
    type: "input",
    name: "Use",
    message: "How do I use the application?",
  },
  {
    type: "confirm",
    name: "hasATest",
    message: "do you have tests for the application?",
  },
  {
    type: "input",
    name: "tests",
    message: "how do i test the application",
    when: (answers) => {
      return answers.hasATest;
    },
  },
  {
    type: "list",
    name: "License",
    message: "Choose a license?",
    choices: ["MIT", "GPLv2", "Apache"],
  },
  {
    type: "input",
    name: "Github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "Email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "Contribution",
    message: "How can people contribute to this app?",
  },
];

const createMd = (answers) => {
  return `# ${answers.title} ![${
    answers.license
  }](https://img.shields.io/static/v1?label=${
    answers.license
  }&message=<licence>&color=blueviolet)

  ## Table of Contents

  - [Description](#description)
  ${answers.hasAnInstallation ? `- [Installations](#installations)` : ""}
  - [User Story](#user-story)
  ${answers.hasATest ? `- [Tests](#tests)` : ""}
  - [License](#license)
  - [Github](#github)
  - [Email address](#email-address)
  - [Contributors](#contributors)

  ## Description
  ${answers.description} 
  
  ${
    answers.hasAnInstallation
      ? `## Installations
  \`\`\`
  ${answers.installation}
  \`\`\``
      : ""
  }
   ## User Story
   ${answers.user}
  ${
    answers.hasATest
      ? `## Tests
  \`\`\`
  ${answers.tests}
  \`\`\``
      : ""
  }
  ## License
  ${answers.license}
  ## Github 
  [${answers.github}](https://github.com/${answers.github})
  ## Email address
  ${answers.email}
  ## Contributors
  ${answers.contributors}
  `;
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

const init = async () => {
  const answers = await inquirer.prompt(questions);
  console.log(answers);

  // generate the markdown
  const markdown = createMd(answers);

  // write to file
  writeToFile(path.join(__dirname, "../GENERATED_README.md"), markdown);

  console.log("Successfully generated README file");
};

init();
