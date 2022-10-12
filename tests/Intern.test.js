const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    // check to see if an object can be properly intialized with matching properties.
    it("should create an object with a name, id, email, school if provided valid arguments", () => {
      const intern = new Intern("Brandon", "1", "abc@gmail.com", "UofT");
      expect(intern.name).toEqual("Brandon");
      expect(intern.id).toEqual("1");
      expect(intern.email).toEqual("abc@gmail.com");
      expect(intern.school).toEqual("UofT");
    });

    // check if all methods provided by "Employee" work as expected.
    it("should return the correct mark up when methods are called", () => {
      const intern = new Intern("Brandon", "1", "abc@gmail.com", "UofT");
      nameMarkUp = `<h1 class="name">Brandon</h1>`;
      idMarkUp = `<li class="card-list-item">ID: 1</li>`;
      emailMarkUp = `<li class="card-list-item">Email: <a href="mailto: abc@gmail.com">abc@gmail.com</a></li>`;
      schoolMarkUp = `<li class="card-list-item">School: UofT</li>`;
      roleMarkUp = `<h2 class="position">Intern</h2>`;
      totalMarkUp = `<div class="card"><div class="card-header">${intern.getName()}${intern.getRole()}</div><div class="card-content"><ul class="card-list">${intern.getId()}${intern.getEmail()}${intern.getSchool()}</ul></div></div>`;
      expect(intern.getName()).toEqual(nameMarkUp);
      expect(intern.getId()).toEqual(idMarkUp);
      expect(intern.getEmail()).toEqual(emailMarkUp);
      expect(intern.getSchool()).toEqual(schoolMarkUp);
      expect(intern.getRole()).toEqual(roleMarkUp);
      expect(intern.getMarkUp()).toEqual(totalMarkUp);
    });

    // Check for error
    it("should throw an error if provided no arguments", () => {
      const callback = () => new Intern();

      expect(callback).toThrow();
    });

    it("should throw an error if 'name' is not a string", () => {
      const callback = () => new Intern(11, "1", "abc@gmail.com", "UofT");
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(callback).toThrowError(err);
    });

    it("should throw an error if 'id' is not a string", () => {
      const callback = () => new Intern("Brandon", 1, "abc@gmail.com", "UofT");
      const err = new Error("Expected parameter 'id' to be a non-empty string");

      expect(callback).toThrowError(err);
    });

    it("should throw an error if 'email' is not a string", () => {
      const callback = () => new Intern("Brandon", "1", 1234, "UofT");
      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );

      expect(callback).toThrowError(err);
    });

    it("should throw an error if 'school' is not a string", () => {
      const callback = () => new Intern("Brandon", "1", "abc@gmail.com", 1234);
      const err = new Error(
        "Expected parameter 'school' to be a non-empty string"
      );

      expect(callback).toThrowError(err);
    });
  });
});
