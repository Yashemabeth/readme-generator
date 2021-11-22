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

const inquirer = require ('inquirer');

const questions = [
    {
      name: "Title",
      message: "What is the title of your project?", 
      type: "input",
    },
    {
      name: "Table of contents",
      message: "What is the included im the table of contents?", 
      type: "input",
    },
    {
        name: "Description",
        message: "What is the description?", 
        type: "input",
      }, {
        name: "Installation",
        message: "What is the installation script? (Ask if they have one first???)", 
        type: "input",
      }, {
        name: "Use",
        message: "How do I use the application?", 
        type: "input",
      }, {
        name: "Test",
        message: "How do I test the application?", 
        type: "input",
      }, {
        name: "Licence",
        message: "Choose a license:", 
        type: "input",
      }, {
        name: "Github",
        message: "What is your github username?", 
        type: "input",
      }, {
        name: "Email",
        message: "What is your email?", 
        type: "input",
      }, {
        name: "Contribution",
        message: "How can people contribute to this app?", 
        type: "input",
      }
  ]
  enquirer
    .prompt(questions)
    .then(function (answer) {
      // instead of console logging put answers into readme generator function
      console.log(answer);
    });
  