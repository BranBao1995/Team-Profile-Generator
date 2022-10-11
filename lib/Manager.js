const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return `
    <h2 class="position">Manager</h2>
    `;
  }
}

module.exports = Manager;
