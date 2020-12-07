// TODO: Write code to define and export the Employee class
/*The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * email
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee' */


class Employee {
    constructor(name, id, email) {


      this.name = name;
      this.id = id;
      this.email = email;

 /* getName()
  getId()
  getEmail()
  getRole() // Returns 'Employee'*/
    }
  }
  
  const employees = [
    new Employee("TestName1", 14, "n1@gmail.com"),
    new Employee("TestName2", 20, "n2@gmail.com"),

  ];
  
  module.exports = {
    Employee,
    employees
  };