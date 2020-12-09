
///

//const Manager = require("./lib/Manager");
//const Engineer = require("./lib/Engineer");
//const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require('util');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
///


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
          name: 'namePerson',
          type: 'input',
          message: 'What is the name of Manager',
          default : 'Jared',
        },
        {
          name: 'jobTitleP',
          type: 'input',
          message: 'What is the job title of Manager',
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
          message: 'What is the ID Manager',
          default : 'ID12345',
        },
        {
          name: 'email',
          type: 'input',
          message: 'What is the Email Manager',
          default : 'jared@fakemail.com',
        },
        {
          name: 'officeNumber',
          type: 'input',
          message: 'What is the Office number  Manager',
          default : '555-555-555',
        },

        {
          name: 'namePersonEngineer',
          type: 'input',
          message: 'What is the name of Engineer',
          default : 'Alec',
        },
        {
          name: 'jobTitleEngineer',
          type: 'input',
          message: 'What is the job title ',
          default : ' Engineer',

        },
        
        {
          name: 'idEngineer',
          type: 'input',
          message: 'What is the ID Engineer',
          default : '2',
        },
        {
          name: 'emailEngineer',
          type: 'input',
          message: 'What is the Email Engineer',
          default : 'aleck@fakemail.com',
        },
        {
          name: 'GithubEngineer',
          type: 'input',
          message: 'What is the Github of Engineer',
          default : 'github aleck',
        },

        {
          name: 'namePersonIntern',
          type: 'input',
          message: 'What is the name of Intern',
          default : 'Name Intern',
        },
        {
          name: 'jobTitleIntern',
          type: 'input',
          message: 'What is the job title of Intern',
          default : 'Intern',

        },
        {
          name: 'title',
          type: 'rawlist',
          message: 'Select Title',
          choices:[ 'Intern1','Intern2','Intern3',]
          
        },
        {
          name: 'idIntern',
          type: 'input',
          message: 'What is the ID Intern',
          default : 'IDIntern5',
        },
        {
          name: 'emailIntern',
          type: 'input',
          message: 'What is the Email Intern',
          default : 'Intern@fakemail.com',
        },
        {
          name: 'school',
          type: 'input',
          message: 'What is school  Intern',
          default : 'University Tec Monterrey',
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
  
        /*We add a newline character to the command line argument
      .then(answers =>{
          console.log('Answer:  ',answers)
       
      })
     
   

  

      // We add a newline character to the command line argument
      fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
      );
      
   */
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


      Parrafo


    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">${answers.nameTeam}</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${answers.nameTeam}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${answers.nameTeam}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: 12345</li>
            <li class="list-group-item">Email: <a href="${answers.nameTeam}">email</a></li>
            <li class="list-group-item">Office number: ${answers.nameTeam}</li>
        </ul>
    </div>
</div>
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">Engineer${answers.nameTeam} </h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer${answers.nameTeam}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${answers.nameTeam}/li>
            <li class="list-group-item">Email: <a href="${answers.nameTeam}">engineer${answers.nameTeam}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.${answers.nameTeam}" target="_blank" rel="noopener noreferrer">${answers.nameTeam}</a></li>
        </ul>
    </div>
</div>
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">Intern${answers.nameTeam}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern${answers.nameTeam}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${answers.nameTeam}</li>
            <li class="list-group-item">Email: <a href="${answers.nameTeam}">${answers.nameTeam}</a></li>
            <li class="list-group-item">School: ${answers.nameTeam}</li>
        </ul>
    </div>
</div>

            </div>
        </div>
    </div>





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
  