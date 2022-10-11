class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return `
    <h1 class="name">${this.name}</h1>
    `;
  }

  getId() {
    return `
    <li class="card-list-item">ID: ${this.id}</li>
    `;
  }

  getEmail() {
    return `
    <li class="card-list-item">
        Email: <a href="mailto: ${this.email}">${this.email}</a>
    </li>
    `;
  }

  getRole() {
    return `
    <h2 class="position">Employee</h2>
    `;
  }
}

module.exports = Employee;
