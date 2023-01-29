// class of employee giving it parameters to create the functions in to its child classes
class Employee {
  // using constructor to pass in name id and email
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // getName function to return this.name value
  getName() {
    return this.name;
  }
  // getID function to return this.id value
  getID() {
    return this.id;
  }
  // getEmail function to return this.email value
  getEmail() {
    return this.email;
  }
  // getRole function to return string value
  getRole() {
    return "Employee";
  }
}

// exporting Employee class
module.exports = Employee;
