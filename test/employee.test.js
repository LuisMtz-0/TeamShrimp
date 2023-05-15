const Employee = require ("../lib/employee")
const EmployeesInfo = require ("../lib/taskListItem")

describe('EmployeeInfo', () => {

  describe('New Employee entry!', () => {
    it("Its should create an new employee", () => {
      const email  = "luismtzvallejo15@gmail.com"
      const position = 'Manager'
      const employeeInfo = new EmployeesInfo([],position, '1', '2', email)

      expect(employeeInfo.email).toBe(email)
    })
  })

})