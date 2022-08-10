const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



//Array of questions for user input
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
        choices: ['apache','unlicense','mit','no license please']
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

//Function to write README file
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
