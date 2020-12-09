// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
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

   

    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern"
    }
};




const interns = [
    new Intern;("TestManagerName1", 1, "n1@gmail.com","Manager"),
    new Intern;("Jared",100,"test@test.com","Manager"),
    
  ];
  console.log(Intern);
  console.log(interns);
  module.exports = {
    Intern,
    interns
   
  };