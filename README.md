# team-profile-generator

## Description 

I created this project in order to properly generate team webpage  with cards of each team member employee data. reason i built this project so that i can have the user dynamically create a team and see each members info so the employer can directly get to where they want or do something like email their employee by clicking their email address.


## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Tests](#testw)

## Installation

Steps:
1. open terminal and direct your self to my project
2. do a "npm i" in your command line in order to install my project.
3. once it is installed do a "node index.js" to start prompt


## Usage 

Steps:
1. once you have run "node index.js" you will be prompted with question in your terminal
2. once your are prompted with a choice select either Engineer or Intern or I am done with my team. Please select Engineer or Intern if you would like to continue. If you done with building your team select I am done with my team.
3. once you selected I am done with my team, you should see a generated index.html with the inputs of your answers


## Credits

https://www.w3schools.com/
https://developer.mozilla.org/en-US/
https://getbootstrap.com/
https://choosealicense.com/licenses/mit/


## License

MIT License

Copyright (c) [2023] [Jonathan Pohahau]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
## Badges

![badge](https://img.shields.io/badge/license-MIT-orange)
![badge](https://img.shields.io/badge/language-JavaScript-green)
![badge](https://img.shields.io/badge/language-Nodejs-brightgreen)
![badge](https://img.shields.io/badge/language-TTD-blueviolet)
![badge](https://img.shields.io/badge/language-inquirer-blue)


## Tests

  
├── __lib__/
│   ├── employee.js
│   ├── engineer.js
│   ├── intern.js
│   └── manager.js                   // classes
├── __test__/             //jest tests
│   ├── employee.test.js
│   ├── engineer.test.js
│   ├── intern.test.js
│   └── manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet    
├── __utils__/                   // template helper code 
│   ├── generateHTML.js
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json      