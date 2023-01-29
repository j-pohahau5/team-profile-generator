// importing the class of Employee
const Employee = require("./employee");

// creating the class of Intern and making it a child of Employee class
class Intern extends Employee {
  // creating a constructor for Intern
  constructor(name, id, email, school) {
    // grabbing the constructor parameters from Employee
    super(name, id, email);
    // giving this.school the parameter value of school
    this.school = school;
  }
  // getSchool function to return the this.school value
  getSchool() {
    return this.school;
  }
  // getRole function to return the role of the Intern
  getRole() {
    return "Intern";
  }
}

// exporting the class of Intern
module.exports = Intern;
