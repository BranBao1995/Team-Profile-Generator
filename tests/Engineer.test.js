const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  // Test for all use cases when initializing a new Engineer object
  describe("Initialization", () => {
    it("should create an object with a name, id, email, github if provided valid arguments", () => {
      const engineer = new Engineer(
        "Brandon",
        "1",
        "abc@gmail.com",
        "BranBao1995"
      );

      // Verify that the new object has the correct properties
      expect(engineer.name).toEqual("Brandon");
      expect(engineer.id).toEqual("1");
      expect(engineer.email).toEqual("abc@gmail.com");
      expect(engineer.github).toEqual("BranBao1995");
    });

    it("should return the correct mark up when the getName() method is called", () => {
      const engineer = new Engineer(
        "Brandon",
        "1",
        "abc@gmail.com",
        "BranBao1995"
      );
      nameMarkUp = `<h1 class="name">Brandon</h1>`;
      idMarkUp = `<li class="card-list-item">ID: 1</li>`;
      emailMarkUp = `<li class="card-list-item">Email: <a href="mailto: abc@gmail.com">abc@gmail.com</a></li>`;
      githubMarkUp = `<li class="card-list-item">Github: <a href="https://github.com/BranBao1995">BranBao1995</a></li>`;
      roleMarkUp = `<h2 class="position">Engineer</h2>`;
      totalMarkUp = `<div class="card"><div class="card-header">${engineer.getName()}${engineer.getRole()}</div><div class="card-content"><ul class="card-list">${engineer.getId()}${engineer.getEmail()}${engineer.getGithub()}</ul></div></div>`;
      expect(engineer.getName()).toEqual(nameMarkUp);
      expect(engineer.getId()).toEqual(idMarkUp);
      expect(engineer.getEmail()).toEqual(emailMarkUp);
      expect(engineer.getGithub()).toEqual(githubMarkUp);
      expect(engineer.getRole()).toEqual(roleMarkUp);
      expect(engineer.getMarkUp()).toEqual(totalMarkUp);
    });

    it("should throw an error if provided no arguments", () => {
      const callback = () => new Engineer();

      expect(callback).toThrow();
    });

    it("should throw an error if 'name' is not a string", () => {
      const callback = () =>
        new Engineer(11, "1", "abc@gmail.com", "BranBao1995");
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(callback).toThrowError(err);
    });

    it("should throw an error if 'id' is not a string", () => {
      const callback = () =>
        new Engineer("Brandon", 1, "abc@gmail.com", "BranBao1995");
      const err = new Error("Expected parameter 'id' to be a non-empty string");

      expect(callback).toThrowError(err);
    });

    it("should throw an error if 'email' is not a string", () => {
      const callback = () => new Engineer("Brandon", "1", 1234, "BranBao1995");
      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );

      expect(callback).toThrowError(err);
    });

    it("should throw an error if 'github' is not a string", () => {
      const callback = () =>
        new Engineer("Brandon", "1", "abc@gmail.com", 1995);
      const err = new Error(
        "Expected parameter 'github' to be a non-empty string"
      );

      expect(callback).toThrowError(err);
    });
  });
});
