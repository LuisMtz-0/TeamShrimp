const Header = require('./header.js');
const EmployeeList = require('./taskList.js');
const EmployeesInfo = require('./taskListItem.js');

function createDocument(title, employees = []) {
  const header = new Header().render();
  const employeesInfo = employees.map(
    (t) => new EmployeesInfo([t.name], t.position, t.Id, t.uniqueData, t.email)
  );
  const employeeList = new EmployeeList(employeesInfo).render();

  return`<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>${title}</title>
  </head>
  ${employeeList}
  <script src="../index.js"></script>
  </html>`

  ;
}

module.exports = { createDocument };
