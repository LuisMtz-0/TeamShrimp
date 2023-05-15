const EmployeesInfo = require ("../lib/taskListItem")

describe('EmployeeInfo', () => {

  describe('New Intern entry!', () => {
    it("Its should create a new intern with school Name", () => {
      const uniqueData = "UT Austin"
      const position = 'Intern'
      const employeeInfo = new EmployeesInfo([],position, '1', uniqueData, 'luis@gmail.com')

      expect(employeeInfo.uniqueData).toBe(uniqueData)
    })
  })

})