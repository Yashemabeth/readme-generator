console.log ("Hi");
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

// add the rest of the questions

// declare questions 
const questions = [];

const generateTitle = (answers) => {
 return '# TITLE ![MIT](https://img.shields.io/static/v1?label={}&message=<licence>&color=blueviolet)'
}

const generateTableOfContents = (answers) => {
    return `## Table of Contents

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Tests](#tests)
    - [Contributing](#contributing)
    - [License](#license)`;
  };

  const generateDescripton = (answers) => {
      return `##Description

      ADD TEXT HERE`
  };

  const generateInstallation = (answers) => {
      return `## Installation

      Run the following script to install the packages required for the application:
      
      ```
      ADD TEXT HERE`
      ```
  };

  cnst generateUsage =o (answers) => {
    return `## Usage
    
    To use the application run the following script:
    
    ```
    ADD TEXT HERE`
    ```
  };
  
  const generateTests = (answers) => {
    return `## Tests
    
    To use the application run the following script:
    
    ```
    ADD TEXT HERE`
    ```
  };
  
  const generateContributing = (answers) => {
    return `## Contributing
    
    ADD TEXT HERE`;
  };
  
  const generateLicense = (answers) => {
    return `## License
    
    ADD TEXT HERE`;
  };
  
  const generateReadme = (answers) => {
    return `${generateTitle(answers)}
  
    ${generateTableOfContents(answers)}
    
    ${generateDescription(answers)}
    
    ${generateInstallation(answers)}
    
    ${generateUsage(answers)}
    
    ${generateTests(answers)}
    
    ${generateContributing(answers)}
    
    ${generateLicense(answers)}
    `;
  };
  

const init = async () => {
// prompt the questions using inquirer
// generate title using answers 
};

init {};