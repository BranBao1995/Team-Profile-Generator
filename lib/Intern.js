const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
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
    super(name, id, email);
    this.school = school;
  }

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
