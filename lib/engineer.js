// importing the class of Employee
const Employee = require("./employee");

// creating the class of Engineer and making it a child of Employee class
class Engineer extends Employee {
  // creating a constructor for Engineer
  constructor(name, id, email, userName) {
    // grabbing the constructor parameters from Employee
    super(name, id, email);
    // giving this.userName the parameter value of userName
    this.userName = userName;
  }
  // getUserName function to return the this.userName value
  getUserName() {
    return this.userName;
  }
  // getRole function to return the role of the Engineer
  getRole() {
    return "Engineer";
  }
}

// exporting the class of Engineer
module.exports = Engineer;
