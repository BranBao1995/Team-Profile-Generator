const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
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

    if (typeof officeNumber !== "string" || !officeNumber.trim().length) {
      throw new Error(
        "Expected parameter 'officeNumber' to be a non-empty string"
      );
    }
    // set object properties
    super(name, id, email); // inherit properties from parant class "Employee"
    this.officeNumber = officeNumber;
  }

  // object methods that will return some HTML markups
  getRole() {
    return `<h2 class="position">Manager</h2>`;
  }

  getMarkUp() {
    return `<!DOCTYPE html>\
<html lang="en"><head>\
<meta charset="UTF-8" />\
<meta http-equiv="X-UA-Compatible" content="IE=edge" />\
<meta name="viewport" content="width=device-width, initial-scale=1.0" />\
<link rel="stylesheet" href="./css/reset.css" />\
<link rel="stylesheet" href="./css/style.css" />\
<title>Team Profile Generator</title>\
</head>\
<body>\
<header class="header">\
<h1 class="header-text">My Team</h1>\
</header>\
<section class="team">\
<div class="card">\
<div class="card-header">\
${this.getName()}\
${this.getRole()}\
</div>\
<div class="card-content">\
<ul class="card-list">\
${this.getId()}\
${this.getEmail()}\
<li class="card-list-item">\
Office: ${this.officeNumber}\
</li>\
</ul>\
</div>\
</div>\
`;
  }
}

module.exports = Manager;
