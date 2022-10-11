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

  getMarkUp() {
    return `
    <div class="card">
        <div class="card-header">
          ${this.getName()}
          ${this.getRole()}
        </div>
        <div class="card-content">
          <ul class="card-list">
            ${this.getId()}
            ${this.getEmail()}
            ${this.getSchool()}
          </ul>
        </div>
      </div>
    `;
  }
}

module.exports = Intern;
