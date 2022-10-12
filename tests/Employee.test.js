const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    // check to see if an object can be properly intialized with matching properties.
    it("should create an object with a name, id, email if provided valid arguments", () => {
      const employee = new Employee("Brandon", "1", "abc@gmail.com");

      expect(employee.name).toEqual("Brandon");
      expect(employee.id).toEqual("1");
      expect(employee.email).toEqual("abc@gmail.com");
    });

    // check if all methods provided by "Employee" work as expected.
    it("should return the correct mark up when methods are called", () => {
      const employee = new Employee("Brandon", "1", "abc@gmail.com");
      nameMarkUp = `<h1 class="name">Brandon</h1>`;
      idMarkUp = `<li class="card-list-item">ID: 1</li>`;
      emailMarkUp = `<li class="card-list-item">Email: <a href="mailto: abc@gmail.com">abc@gmail.com</a></li>`;
      roleMarkUp = `<h2 class="position">Employee</h2>`;
      expect(employee.getName()).toEqual(nameMarkUp);
      expect(employee.getId()).toEqual(idMarkUp);
      expect(employee.getEmail()).toEqual(emailMarkUp);
      expect(employee.getRole()).toEqual(roleMarkUp);
    });

    // Check for error
    it("should throw an error if provided no arguments", () => {
      const callback = () => new Employee();

      expect(callback).toThrow();
    });

    // Check for when arguments are not a string.
    it("should throw an error if 'name' is not a string", () => {
      const callback = () => new Employee(11, "1", "abc@gmail.com");
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(callback).toThrowError(err);
    });

    it("should throw an error if 'id' is not a string", () => {
      const callback = () => new Employee("Brandon", 1, "abc@gmail.com");
      const err = new Error("Expected parameter 'id' to be a non-empty string");

      expect(callback).toThrowError(err);
    });

    it("should throw an error if 'email' is not a string", () => {
      const callback = () => new Employee("Brandon", "1", 1234);
      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );

      expect(callback).toThrowError(err);
    });
  });
});
