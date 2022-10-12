const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");
const inquirer = require("inquirer");

const chooseRole = ["Engineer", "Intern", "Finish"];

const questions = [
  "What is the team manager's name?",
  "What is the manager's ID?",
  "What is the manager's email?",
  "What is the manager's office number?",
  "What is the engineer's name?",
  "What is the engineer's ID?",
  "What is the engineer's email?",
  "What is the engineer's Github?",
  "What is the Intern's name?",
  "What is the Intern's ID?",
  "What is the Intern's email?",
  "What is the Intern's school?",
  "Do you want to add more employee?",
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {});
}

function appendToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) => {});
}

function addEngineer() {
  inquirer
    .prompt([
      { type: "input", message: questions[4], name: "name" },
      { type: "input", message: questions[5], name: "identification" },
      { type: "input", message: questions[6], name: "email" },
      { type: "input", message: questions[7], name: "github" },
      {
        type: "list",
        message: questions[12],
        choices: chooseRole,
        name: "add",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.identification,
        response.email,
        response.github
      );
      if (response.add === "Engineer") {
        appendToFile("./dist/index.html", engineer.getMarkUp());
        addEngineer();
      } else if (response.add === "Intern") {
        appendToFile("./dist/index.html", engineer.getMarkUp());
        addIntern();
      } else {
        let markUp = `
        ${engineer.getMarkUp()}</section></body></html>`;
        appendToFile("./dist/index.html", markUp);
        console.log("Done!");
      }
    });
}

function addIntern() {
  inquirer
    .prompt([
      { type: "input", message: questions[8], name: "name" },
      { type: "input", message: questions[9], name: "identification" },
      { type: "input", message: questions[10], name: "email" },
      { type: "input", message: questions[11], name: "school" },
      {
        type: "list",
        message: questions[12],
        choices: chooseRole,
        name: "add",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.identification,
        response.email,
        response.school
      );
      if (response.add === "Engineer") {
        appendToFile("./dist/index.html", intern.getMarkUp());
        addEngineer();
      } else if (response.add === "Intern") {
        appendToFile("./dist/index.html", intern.getMarkUp());
        addIntern();
      } else {
        let markUp = `
        ${intern.getMarkUp()}</section></body></html>`;
        appendToFile("./dist/index.html", markUp);
        console.log("Done!");
      }
    });
}

function init() {
  inquirer
    .prompt([
      { type: "input", message: questions[0], name: "name" },
      { type: "input", message: questions[1], name: "identification" },
      { type: "input", message: questions[2], name: "email" },
      { type: "input", message: questions[3], name: "office" },
      {
        type: "list",
        message: questions[12],
        choices: chooseRole,
        name: "add",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.identification,
        response.email,
        response.office
      );
      if (response.add === "Engineer") {
        writeToFile("./dist/index.html", manager.getMarkUp());
        addEngineer();
      } else if (response.add === "Intern") {
        writeToFile("./dist/index.html", manager.getMarkUp());
        addIntern();
      } else {
        let markUp = `
        ${manager.getMarkUp()}</section></body></html>`;
        writeToFile("./dist/index.html", markUp);
        console.log("Done!");
      }
    });
}

init();
