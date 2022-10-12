const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // check if the arguments being passed in are non-empty strings
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }

    if (typeof id !== "string" || !id.trim().length) {
      throw new Error("Expected parameter 'id' to be a non-empty string");
    }

    if (typeof email !== "string" || !email.trim().length) {
      throw new Error("Expected parameter 'email' to be a non-empty string");
    }

    if (typeof school !== "string" || !school.trim().length) {
      throw new Error("Expected parameter 'school' to be a non-empty string");
    }
    // set object properties
    super(name, id, email); // inherit properties from parant class "Employee"
    this.school = school;
  }

  // object methods that will return some HTML markups
  getSchool() {
    return `<li class="card-list-item">School: ${this.school}</li>`;
  }

  getRole() {
    return `<h2 class="position">Intern</h2>`;
  }

  getMarkUp() {
    return `<div class="card"><div class="card-header">${this.getName()}${this.getRole()}</div><div class="card-content"><ul class="card-list">${this.getId()}${this.getEmail()}${this.getSchool()}</ul></div></div>`;
  }
}

module.exports = Intern;
