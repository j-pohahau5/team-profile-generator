//  to get the instance of inquirer
const inquirer = require("inquirer");
// using fs to later write out the data to a file
const fs = require("fs");

// grabbing the class of Manager
const Manager = require("./lib/manager");
// grabbing the class of Engineer
const Engineer = require("./lib/engineer");
// grabbing the class of Intern
const Intern = require("./lib/intern");

// using this function to generate the html using the data
const generateHTML = require("./utils/generateHTML");

// empty array to push the prompt data into about the employees
const teamArr = [];
// a function to add the manager
const addManager = () => {
  // prompt for only the manager
  return (
    inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "What is Manager's name?",
          // used validate to make sure the correct answers were applied
          validate: (name) => {
            if (name) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          name: "id",
          type: "input",
          message: "What is Manager's ID number?",
          validate: (id) => {
            if (id) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          name: "email",
          type: "input",
          message: "What is Manager's email?",
          validate: (email) => {
            if (email) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          name: "officeNumber",
          type: "input",
          message: "What is Manager's office number?",
          validate: (officeNumber) => {
            if (officeNumber) {
              return true;
            } else {
              return false;
            }
          },
        },
      ])
      // function to push the data in to manager then in to teamArr the calling on addEmployee function
      .then((answers) => {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        teamArr.push(manager);
        addEmployee();
      })
  );
};

// function that is intended to prompt the user for Engineer employee info.
const addEngineer = () => {
  return (
    inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "What is your Engineer's name?",
          // used validate to make sure the correct answers were applied
          validate: (name) => {
            if (name) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          name: "id",
          type: "input",
          message: "What is your Engineer's ID number?",
          validate: (id) => {
            if (id) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          name: "email",
          type: "input",
          message: "What is your Engineer's email?",
          validate: (email) => {
            if (email) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          name: "userName",
          type: "input",
          message: "What is your Engineer's GitHub username",
          validate: (userName) => {
            if (userName) {
              return true;
            } else {
              return false;
            }
          },
        },
      ])
      // function to push the engineer data into teamArr
      .then((answers) => {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.userName
        );
        teamArr.push(engineer);
        addEmployee();
      })
  );
};

// function that is intended to prompt the user for Engineer employee info.
const addIntern = () => {
  return (
    inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "What is your Intern's name?",
          // function that is intended to prompt the user for Intern employee info.
          validate: (name) => {
            if (name) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          name: "id",
          type: "input",
          message: "What is your Intern's ID number?",
          validate: (id) => {
            if (id) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          name: "email",
          type: "input",
          message: "What is your Intern's email?",
          validate: (email) => {
            if (email) {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          name: "school",
          type: "input",
          message: "What is your Intern's school name?",
          validate: (school) => {
            if (school) {
              return true;
            } else {
              return false;
            }
          },
        },
      ])
      // function to push the intern data into teamArr
      .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        teamArr.push(intern);
        addEmployee();
      })
  );
};

// function to give the user a choice to select Engineer, Intern,
const addEmployee = () => {
  return (
    inquirer
      .prompt([
        {
          name: "employee",
          type: "list",
          message:
            "Please confirm the Employee you'd like to insert info for or that you're done.",
          choices: ["Engineer", "Intern", "I am done with my team."],
        },
      ])
      // a switch case for the based selection to after it is chosen to call another function based on the intent
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
      })
  );
};

// function to call and import generateHTML and then create a file and write to it with the data.
function startHtml() {
  const dom = generateHTML(teamArr);
  fs.writeFile("index.html", dom, function (err) {
    if (err) throw err;
    console.log("great job!😁");
  });
}

// initialize the application in order to start the prompt
function init() {
  addManager();
}

// calling the init function to start the questions.
init();
