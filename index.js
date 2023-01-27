const inquirer = require('inquirer');
const fs = require ('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamArr = [];
const addEmployee = () => {
    inquirer.prompt([
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
    .then(function({name, id, email, officeNumber}){
        let manager = new Manager(name, id, email, officeNumber);
        teamArr.push(manager);

    }) 
    .then(
     inquirer.prompt([
        {
          name: "confirmEmployee",
          type: "list",
          message: "Please confirm the Employee you'd like to insert info for or that you're done.",
          choices: [
              "Engineer",
              "Intern",
              "I am done with my team.",
          ],
        },
      ])
      .then(function (){
          if("Engineer"){
              inquirer.prompt([
                  {
                      name: "ename",
                      type: "input",
                      message: "What is your Engineer's name?",
                  },
                  {
                      name: "eid",
                      type: "input",
                      message: "What is your Engineer's ID number?",
                  },
                  {
                      name: "eemail",
                      type: "input",
                      message: "What is your Engineer's email?",
                  },
                  {
                      name:"userName",
                      type: "input",
                      message: "What is your Engineer's GitHub username"
                  },
              ])
              console.log("Engineer")
          } else if ("Intern") {
              inquirer.prompt([
                  {
                      name: "iname",
                      type: "input",
                      message: "What is your Intern's name?",
                  },
                  {
                      name: "iid",
                      type: "input",
                      message: "What is your Intern's ID number?",
                  },
                  {
                      name: "iemail",
                      type: "input",
                      message: "What is your Intern's email?",
                  },
                  {
                      name:"school",
                      type: "input",
                      message: "What is your Intern's school name?",
                  },
              ])
              console.log("Intern")
          } 
      })
    )
      
}

function init() {
    addEmployee()
}
init()