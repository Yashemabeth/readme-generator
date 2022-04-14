// Questions
// What does this application do?
// Ask the user a some questions and it generates a follow up questions. Then produce a readme file.
// How can we ask the user questions?
// By using enquier to create quetions

//  What is the title of your project?
// - What is the description?
// - What is the installation script? (Ask if they have one first???)
// - How do I use the application? (Ask if they have one first???)
// - How do I test the application? (Ask if they have one first???)
// - Choose a license: (present a list)
// - What is your github username?
// - What is your email?
// - How can people contribute to this app?

//const {method, otherMethod} = require('./myModule.js');
//const { generateReadme, writeToFile } = require("./readme-generator");
const inquirer = require("inquirer");
const { generateReadme, readmeInit } = require("./readme-generator");

const questions = [
  {
    name: "title",
    message: "What is the title of your project?",
    type: "input",
  },
  {
    name: "description",
    message: "What is the description?",
    type: "input",
  },
  {
    name: "Installation",
    message: "What is the installation script? (Ask if they have one first???)",
    type: "input",
  },
  {
    name: "Use",
    message: "How do I use the application?",
    type: "input",
  },
  {
    name: "Test",
    message: "How do I test the application?",
    type: "input",
  },
  {
    name: "License",
    message: "Choose a license:",
    type: "input",
  },
  {
    name: "Github",
    message: "What is your github username?",
    type: "input",
  },
  {
    name: "Email",
    message: "What is your email?",
    type: "input",
  },
  {
    name: "Contribution",
    message: "How can people contribute to this app?",
    type: "input",
  },
];



const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    console.log(answers);
     //gewnerate the read me file 
     readmeInit(answers);


  } catch(err) {
    console.log(err)
  } 
};

init();
