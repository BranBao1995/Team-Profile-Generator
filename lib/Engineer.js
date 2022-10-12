const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
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

    if (typeof github !== "string" || !github.trim().length) {
      throw new Error("Expected parameter 'github' to be a non-empty string");
    }
    // set object properties
    super(name, id, email); // inherit properties from parant class "Employee"
    this.github = github;
  }

  // object methods that will return some HTML markups
  getGithub() {
    return `<li class="card-list-item">Github: <a href="https://github.com/${this.github}">${this.github}</a></li>`;
  }

  getRole() {
    return `<h2 class="position">Engineer</h2>`;
  }

  getMarkUp() {
    return `<div class="card"><div class="card-header">${this.getName()}${this.getRole()}</div><div class="card-content"><ul class="card-list">${this.getId()}${this.getEmail()}${this.getGithub()}</ul></div></div>`;
  }
}

module.exports = Engineer;
