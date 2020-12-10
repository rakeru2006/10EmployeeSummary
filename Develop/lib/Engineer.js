// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, GitHubUser) {
        super(name, id, email);
        this.GitHubUser = GitHubUser;
    }
    
    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.GitHubUser;
    }

};
console.log(Engineer);
module.exports = Engineer;