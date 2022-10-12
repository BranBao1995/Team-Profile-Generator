const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    // check to see if an object can be properly intialized with matching properties.
    it("should create an object with a name, id, email, office number if provided valid arguments", () => {
      const manager = new Manager("Brandon", "1", "abc@gmail.com", "318");

      expect(manager.name).toEqual("Brandon");
      expect(manager.id).toEqual("1");
      expect(manager.email).toEqual("abc@gmail.com");
      expect(manager.officeNumber).toEqual("318");
    });

    // check if all methods provided by "Employee" work as expected.
    it("should return the correct mark up when methods are called", () => {
      const manager = new Manager("Brandon", "1", "abc@gmail.com", "318");
      nameMarkUp = `<h1 class="name">Brandon</h1>`;
      idMarkUp = `<li class="card-list-item">ID: 1</li>`;
      emailMarkUp = `<li class="card-list-item">Email: <a href="mailto: abc@gmail.com">abc@gmail.com</a></li>`;
      roleMarkUp = `<h2 class="position">Manager</h2>`;
      totalMarkUp = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><link rel="stylesheet" href="./css/reset.css" /><link rel="stylesheet" href="./css/style.css" /><title>Team Profile Generator</title></head><body><header class="header"><h1 class="header-text">My Team</h1></header><section class="team"><div class="card"><div class="card-header">${manager.getName()}${manager.getRole()}</div><div class="card-content"><ul class="card-list">${manager.getId()}${manager.getEmail()}<li class="card-list-item">Office: ${
        manager.officeNumber
      }</li></ul></div></div>`;
      expect(manager.getName()).toEqual(nameMarkUp);
      expect(manager.getId()).toEqual(idMarkUp);
      expect(manager.getEmail()).toEqual(emailMarkUp);
      expect(manager.getRole()).toEqual(roleMarkUp);
      expect(manager.getMarkUp()).toEqual(totalMarkUp);
    });

    // Check for error
    it("should throw an error if provided no arguments", () => {
      const callback = () => new Manager();

      expect(callback).toThrow();
    });

    it("should throw an error if 'name' is not a string", () => {
      const callback = () => new Manager(11, "1", "abc@gmail.com", "318");
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(callback).toThrowError(err);
    });

    it("should throw an error if 'id' is not a string", () => {
      const callback = () => new Manager("Brandon", 1, "abc@gmail.com", "318");
      const err = new Error("Expected parameter 'id' to be a non-empty string");

      expect(callback).toThrowError(err);
    });

    it("should throw an error if 'email' is not a string", () => {
      const callback = () => new Manager("Brandon", "1", 1234, "318");
      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );

      expect(callback).toThrowError(err);
    });

    it("should throw an error if 'officeNumber' is not a string", () => {
      const callback = () => new Manager("Brandon", "1", "abc@gmail.com", 318);
      const err = new Error(
        "Expected parameter 'officeNumber' to be a non-empty string"
      );

      expect(callback).toThrowError(err);
    });
  });
});
