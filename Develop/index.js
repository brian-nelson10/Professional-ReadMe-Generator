// TODO: Include packages needed for this application
//GIVEN a command-line application that accepts user input
//WHEN I am prompted for information about my application repository
//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//WHEN I enter my project title
//THEN this is displayed as the title of the README
//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
//WHEN I enter my GitHub username
//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
//WHEN I enter my email address
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
//WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//const generateMarkdown = require('Develop/utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = () => {
    console.log(`
    =================
    README GENERATOR!
    =================
     `);
    return inquirer.prompt([ 
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: titleInput => {
          if (titleInput) {
            return true;
        } else {
            console.log('Please enter your project title!');
            return false;
        }
      }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of what your project does:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project?',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please enter a reason!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'who',
        message: 'Give a description of who will use your project:',
        validate: whoInput => {
            if (whoInput) {
                return true;
            } else {
                console.log('Please enter who!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter the applications installation instructions:',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter user information:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter user information!')
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Would you like to allow other developers to contribute to your project?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please enter contribution guidelines:',
        when: ({confirmContribute}) => {
            if (confirmContribute) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('Please enter the contribution guidelines!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter the test instructions:',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter the test instructions!')
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license for your project! (Check one)',
        choices: ['agpl-3.0','gpl-3.0','mpl-2.0','apache-2.0','mit','bsl-1.0','No License Please']
    },
    {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username.',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!!');
                    return false;
                }
            }
    },
    {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project.',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter the GitHub link to your project!!');
                }
            }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email address.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter a valid email address!!');
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter your Name:)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!!');
            }
        }
    }
  ]);
};

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve,reject) => {
        fs.writeFile('../dist/README-new.md', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Your New Professional ReadMe File Was Created!'
            });
        }); 
    });
};



// Function call to initialize app
questions()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
});






// TODO: Create a function to initialize app
//const init = () => {
//    return inquirer.prompt(questions)
//    .then(answers => {
//      return answers,
//      console.log(answers);
//    })
//    }
//const init = () => {
//    return inquirer.prompt(questions)
//    .then(answers => {
//        return answers;
//    })
    
//}
