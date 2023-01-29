// importing the class of Employee
const Employee = require("./employee");

// creating the class of Manager and making it a child of Employee class
class Manager extends Employee {
  // creating a constructor for Manager
  constructor(name, id, email, officeNumber) {
    /// grabbing the constructor parameters from Employee
    super(name, id, email);
    // giving this.officeNumber the parameter value of officeNumber
    this.officeNumber = officeNumber;
  }
  // getRole function to return the role of the Manager
  getRole() {
    return "Manager";
  }
}

// exporting the class of Manager
module.exports = Manager;
