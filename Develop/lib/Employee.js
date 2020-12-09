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
    }

    getName() {
      
        return this.name;
       
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
        
    }
    
};

//module.exports = Employee;



  
  const employees = [
    new Employee("TestName1", 14, "n1@gmail.com"),
    
    new Employee("TestName2", 20, "n2@gmail.com"),
    new Employee("Alice",100,"test@test.com"),
    
  ];
  //console.log(Employee);
  //console.log(employees);
  module.exports = {
    Employee,
    employees
   
  };


  // TODO: Write code to define and export the Manager class. 
//HINT: This class should inherit from Employee.



class Manager {
  constructor(name, id, email, officeNumber,role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
      this.role = role;
  }
   

    getRole() {
        return "Manager";
    }
   
     
  

    getOfficeNumber() {
        return this.officeNumber;
    }
}

const managers = [
  new Manager("TestManagerName1", 1, "n1@gmail.com",1,"Manager"),
  new Manager("Jared",100,"test@test.com",100,"Manager"),
  
];
console.log(Manager);
console.log(managers));
module.exports = {
  Manager,
  managers
 
};


