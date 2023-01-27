const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const generateHTML = require("./utils/generateHTML");

const teamArr = [];
const addManager = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is Manager's name?",
        validate: name => {
            if(name){
                return true;
            } else {
                return false;
            }
        }
      },
      {
        name: "id",
        type: "input",
        message: "What is Manager's ID number?",
        validate: id => {
            if(id){
                return true;
            } else {
                return false;
            }
        }
      },
      {
        name: "email",
        type: "input",
        message: "What is Manager's email?",
        validate: email => {
            if(email){
                return true;
            } else {
                return false;
            }
        }
      },
      {
        name: "officeNumber",
        type: "input",
        message: "What is Manager's office number?",
        validate: officeNumber => {
            if(officeNumber){
                return true;
            } else {
                return false;
            }
        }
      },
    ])
    .then(answers => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      teamArr.push(manager);
      addEmployee();
    });
};

const addEngineer = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is your Engineer's name?",
        validate: name => {
            if(name){
                return true;
            } else {
                return false;
            }
        }
      },
      {
        name: "id",
        type: "input",
        message: "What is your Engineer's ID number?",
        validate: id => {
            if(id){
                return true;
            } else {
                return false;
            }
        }
      },
      {
        name: "email",
        type: "input",
        message: "What is your Engineer's email?",
        validate: email => {
            if(email){
                return true;
            } else {
                return false;
            }
        }
      },
      {
        name: "userName",
        type: "input",
        message: "What is your Engineer's GitHub username",
        validate: userName => {
            if(userName){
                return true;
            } else {
                return false;
            }
        }
      },
    ])
    .then(answers => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.userName);
      teamArr.push(engineer);
      addEmployee();
    });
};

const addIntern = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is your Intern's name?",
        validate: name => {
            if(name){
                return true;
            } else {
                return false;
            }
        }
      },
      {
        name: "id",
        type: "input",
        message: "What is your Intern's ID number?",
        validate: id => {
            if(id){
                return true;
            } else {
                return false;
            }
        }
      },
      {
        name: "email",
        type: "input",
        message: "What is your Intern's email?",
        validate: email => {
            if(email){
                return true;
            } else {
                return false;
            }
        }
      },
      {
        name: "school",
        type: "input",
        message: "What is your Intern's school name?",
        validate: school => {
            if(school){
                return true;
            } else {
                return false;
            }
        }
      },
    ])
    .then(answers => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      teamArr.push(intern);
      addEmployee();
    });
};

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        name: "employee",
        type: "list",
        message:
          "Please confirm the Employee you'd like to insert info for or that you're done.",
        choices: ["Engineer", "Intern", "I am done with my team."],
      },
    ])
    .then((chosen) => {
      switch (chosen.employee) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          startHtml();
      }
    });
  // inquirer.prompt(addManager()).then(function(data) {
  //     teamArr.push(data)
  // });
};
function startHtml() {
  const dom = generateHTML();
  fs.writeFile("index.html", dom, function (err) {
    if (err) throw err;
    console.log("great job!😁");
  });
}
function init() {
  addManager();
}
init();
