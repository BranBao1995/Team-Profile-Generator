const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return `
    <li class="card-list-item">
        Github: <a href="https://github.com/${this.github}">${this.github}</a>
    </li>
    `;
  }

  getRole() {
    return `
    <h2 class="position">Engineer</h2>
    `;
  }
}

module.exports = Engineer;
