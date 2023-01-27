const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const generateHTML = require("./utils/generateHTML")

const teamArr = [];
const addManager = () => {
    return inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "What is Manager's name?",
      },
      {
        name: "id",
        type: "input",
        message: "What is Manager's ID number?",
      },
      {
        name: "email",
        type: "input",
        message: "What is Manager's email?",
      },
      {
        name: "officeNumber",
        type: "input",
        message: "What is Manager's office number?",
      },
    ])
    .then(function ({ name, id, email, officeNumber }) {
      let manager = new Manager(name, id, email, officeNumber);
      teamArr.push(manager);
      addEmployee();
    })
}

const addEngineer = () => {
    return inquirer.prompt([
        {
          name: "name",
          type: "input",
          message: "What is your Engineer's name?",
        },
        {
          name: "id",
          type: "input",
          message: "What is your Engineer's ID number?",
        },
        {
          name: "email",
          type: "input",
          message: "What is your Engineer's email?",
        },
        {
          name: "userName",
          type: "input",
          message: "What is your Engineer's GitHub username",
        },
      ])
      .then(function ({ name, id, email, userName}) {
          let engineer = new Engineer(name, id, email, userName);
          teamArr.push(engineer);
          addEmployee();
        })
}

const addIntern = () => {
    return inquirer.prompt([
        {
          name: "name",
          type: "input",
          message: "What is your Intern's name?",
        },
        {
          name: "id",
          type: "input",
          message: "What is your Intern's ID number?",
        },
        {
          name: "email",
          type: "input",
          message: "What is your Intern's email?",
        },
        {
          name: "school",
          type: "input",
          message: "What is your Intern's school name?",
        },
      ])
      .then(function ({name, id, email, school}) {
          let intern = new Intern(name, id, email, school);
          teamArr.push(intern);
          addEmployee();
        })
}
const addEmployee = () => {
      return inquirer.prompt([
          {
            name: "employee",
            type: "list",
            message:
              "Please confirm the Employee you'd like to insert info for or that you're done.",
            choices: ["Engineer", "Intern", "I am done with my team."],
          },
        ])
        .then(chosen => {
            switch(chosen.employee) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    startHtml();
            }
        })
        // inquirer.prompt(addManager()).then(function(data) {
        //     teamArr.push(data)
        // });

};
function startHtml() {

}
function init() {
  addManager();
}
init();
