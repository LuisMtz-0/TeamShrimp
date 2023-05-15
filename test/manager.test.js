const EmployeesInfo = require ("../lib/taskListItem")

describe('EmployeeInfo', () => {

  describe('Instantiate', () => {
    it('should be an instance of ForumItem class', () => {
      const employeeInfo = new EmployeesInfo();

      expect(employeeInfo).toBeInstanceOf(EmployeesInfo);
    });
  });

  describe('New Manager entry!', () => {
    
    it("Its should create an new Manager with office number", () => {
      const uniqueData  = '2'
      const position = 'Manager'
      const employeeInfo = new EmployeesInfo([],position, '1', uniqueData, 'luis@gmail.com')

      expect(employeeInfo.uniqueData).toBe(uniqueData)
    })
  })

})