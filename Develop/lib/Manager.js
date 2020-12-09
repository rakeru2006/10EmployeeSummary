// TODO: Write code to define and export the Manager class. 
//HINT: This class should inherit from Employee.

//const Employee = require("./Employee");


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
     
    getName() {
      
        return this.name;
       
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    }
  

    getOfficeNumber() {
        return this.officeNumber;
    }
      getRole() {
          return "Manager";
      }
     
       
    
  
     
  }
  
  const managers = [
    new Manager("TestManagerName1", 1, "n1@gmail.com",1,"Manager"),
    new Manager("Jared",100,"test@test.com",100,"Manager"),
    
  ];
  console.log(Manager);
  console.log(managers);
  module.exports = {
    Manager,
    managers
   
  };

  
  
  
