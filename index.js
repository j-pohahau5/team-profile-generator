const inquirer = require('inquirer');
const fs = require ('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is employees name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is employees ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is employees email?'
        },
    ])
}