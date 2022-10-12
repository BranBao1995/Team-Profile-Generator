class Employee {
  constructor(name, id, email) {
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

    // set object properties
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // object methods that will return some HTML markups

  getName() {
    return `<h1 class="name">${this.name}</h1>`;
  }

  getId() {
    return `<li class="card-list-item">ID: ${this.id}</li>`;
  }

  getEmail() {
    return `<li class="card-list-item">Email: <a href="mailto: ${this.email}">${this.email}</a></li>`;
  }

  getRole() {
    return `<h2 class="position">Employee</h2>`;
  }
}

module.exports = Employee;
