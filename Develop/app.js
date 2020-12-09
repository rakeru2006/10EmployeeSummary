const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([

        {
          //  GIVEN a command-line application that accepts user input
          name: 'nameTeam',
          type: 'input',
          message: 'What is the name of the Team?',
          default : 'TEC-MONTERREY',
        },
       
        {
          name: 'namePerson1',
          type: 'input',
          message: 'What is the name of person1',
          default : 'Jared',
        },
        {
          name: 'jobTitleP',
          type: 'input',
          message: 'What is the job title of person1',
          default : 'Manager, Engineer, Intern,',

        },
        {
          name: 'title',
          type: 'rawlist',
          message: 'Select Title',
          choices:[ 'Manager','Engineer','Intern',]
          
        },
        {
          name: 'id',
          type: 'input',
          message: 'What is the ID person1',
          default : 'ID12345',
        },
        {
          name: 'email',
          type: 'input',
          message: 'What is the Email person1',
          default : 'jared@fakemail.com',
        },
        {
          name: 'officeNumber',
          type: 'input',
          message: 'What is the Office number  person1',
          default : '555-555-555',
        },
          {
            name: 'menu',
            type: 'checkbox',
            message: 'Select menu of data to show:',
            choices:['ID:1',
                    'Email:jared@fakemail.com',
                    'Office number:1',
                  ]
          },

    ]);
  };
  
  const generateHTML = (answers) =>
  `<!DOCTYPE html>
  <html lang="en">
  <title>Organigrama</title>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Reedme</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4"> Team Name  ${answers.nameTeam}</h1>
      <p class="lead">Description.</p>
      <h3>Name: ${answers.namePerson1} <span class="badge badge-secondary">Job Position : ${answers.title}</span></h3>
      <ul class="list-group">
        <li class="list-group-item"> <b>Id:</b>  :${answers.id}</li>
        <li class="list-group-item"><b>Email:</b>  ${answers.email}</li>
        <li class="list-group-item"><b>Office number:</b>  ${answers.officeNumber}</li>
        <li class="list-group-item"><b>Menu :</b> ${answers.menu}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
  
  // Bonus using async/await and try/catch
  const init = async () => {
    console.log('Please answer the questions' );
    try {
      const answers = await promptUser();
  
      const html = generateHTML(answers);
  
      await writeFileAsync('index.html', html);
  
      console.log('Successfully wrote to index.html');
    } catch (err) {
      console.log(err);
    }
  };
  
  init();
     


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
