const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return `
    <li class="card-list-item">
        School: ${this.school}
    </li>
    `;
  }

  getRole() {
    return `
    <h2 class="position">Intern</h2>
    `;
  }
}

module.exports = Intern;
