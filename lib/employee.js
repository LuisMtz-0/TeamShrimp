const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

class Employee {
  constructor(name, email, position) {
    this.title = '';
    // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    this.employees = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: 'Please enter Company Name...',
        },
        {
          type: "list",
          name: 'position',
          message:'Enter employee position...',
          choices: ['Manager', "Engineer", "Intern"]
        },
      ])
      .then(({ title, position }) => {
        this.title = `${title}`;
        let positionA = `${position}`
        if (positionA == 'Manager') {
          return this.addManager()
        } else if (positionA == 'Engineer'){
          return this.addEngineer()
        }else if (positionA == 'Intern'){
          return this.addIntern()
        }
      })
      .then(() => {
        // sort by priority so that priority tasks come before non-priority tasks
        this.employees.sort((a, b) =>
          a.priority === b.priority ? 0 : a.priority && !b.priority ? -1 : 1
        );
        return writeFile(
          join(__dirname, '..', 'dist', 'tasks.html'),
          createDocument(this.title, this.employees),
        );
      })
      .then(() => console.log('Created tasks.html', this.employees))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

  addEngineer() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter Employee name'
        },
        {
          type: 'input',
          name: 'Id',
          message: 'Enter Employee Id'
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter Email',
        },
        {
          type: 'input',
          name: 'uniqueData',
          message: 'Enter GitHub user name'
        },
        {
          type: 'confirm',
          name: 'addAnotherEmployee',
          message: 'Would you like to add another Employee?',
        },
      ]).then(({ name, Id, email, uniqueData, position = 'Engineer', addAnotherEmployee}) => {
       this.employees.push({ name, Id, email, uniqueData, position});
        if (addAnotherEmployee) {
          return this.run();
        }
      });
  }

  addManager() {
    return inquirer
      .prompt([
        { 
          type: "input",
          name: "name",
          message: "Enter Name"
        },
        {
          type: 'input',
          name: 'Id',
          message: 'Enter Employee ID'
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter Email',
        },
        {
          type: 'input',
          name: 'uniqueData',
          message: 'Enter office number...',
        },
        {
          type: 'confirm',
          name: 'addAnotherEmployee',
          message: 'Would you like to add another Employee?',
        },
      ]).then(({ name, Id, email, uniqueData, position = 'Manager', addAnotherEmployee}) => {
       this.employees.push({ name, Id, email, uniqueData, position});
        if (addAnotherEmployee) {
          return this.run();
        }
      });
}

addIntern() {
  return inquirer
    .prompt([
      { 
        type: "input",
        name: "name",
        message: "Enter Name"
      },
      {
        type: 'input',
        name: 'Id',
        message: 'Enter Employee ID'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter Email',
      },
      {
        type: 'input',
        name: 'uniqueData',
        message: 'Enter school Name...',
      },
      {
        type: 'confirm',
        name: 'addAnotherEmployee',
        message: 'Would you like to add another Employee?',
      },
    ]).then(({ name, Id, email, uniqueData, position = 'Intern', addAnotherEmployee}) => {
     this.employees.push({ name, Id, email, uniqueData, position});
      if (addAnotherEmployee) {
        return this.run();
      }
    });
}
}

module.exports = Employee;