const EmployeesInfo = require ("../lib/taskListItem")

describe ('EmployeeInfo', () => {

  describe('New Engineer entry!', () => {
    it("Its should create an new Engineer with GitHub username", () => {
      const uniqueData  = "luisMtz-0"
      const position = "Engineer"
      const employeeInfo = new EmployeesInfo ([],position, '1', uniqueData, 'luis@gmail.com')

      expect(employeeInfo.uniqueData).toBe(uniqueData)
    })
  })

})