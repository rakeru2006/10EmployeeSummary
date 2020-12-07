// TODO: Write code to define and export the Manager class. 
//HINT: This class should inherit from Employee.
class Manager {
    constructor(name, role, id) {
      this.name = name;
      this.role = role;
      this.id = id;
    }
  
    printNameManager() {
      console.log(`The information Maneger is ${this.name},${this.role},${this.id}`);
    }
  
  }
  
    module.exports = Manager;