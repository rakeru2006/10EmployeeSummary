
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
      name: 'nameManager',
      type: 'input',
      message: 'What is the name of Manager',
      default : 'Jared',
    },
    {
      name: 'roleManager',
      type: 'input',
      message: 'What is the job title :',
      default : 'Manager',
    },
    {
      name: 'idManager',
      type: 'input',
      message: 'What is the ID Manager:',
      default : 'MID1',
    },
    {
      name: 'emailManager',
      type: 'input',
      message: 'What is the Email Manager:',
      default : 'Jared@fakemailManager.com',
    },
    {
      name: 'officeNumber',
      type: 'input',
      message: 'What is the Office number Manager',
      default : '555-555-555',
    },
    {
      name: 'newMember',
      type: 'rawlist',
      message: 'Do you like add a new Member, Choos one please: ',
      choices:['Engineer','Intern','None']
      
    },
    {
      name: 'nameEngineer',
      type: 'input',
      message: 'What is the name of Engineer:',
      default : 'Alec E',
    },
    {
      name: 'roleEngineer',
      type: 'input',
      message: 'What is the job title :',
      default : ' Engineer',
    },
    {
      name: 'idEngineer',
      type: 'input',
      message: 'What is the ID Engineer:',
      default : 'E2',
    },
    {
      name: 'emailEngineer',
      type: 'input',
      message: 'What is the Email Engineer:',
      default : 'aleck@fakemailengineer.com',
    },
    {
      name: 'gitHubEngineer',
      type: 'input',
      message: 'What is the Github of Engineer:',
      default : 'https://github.com/engineer/aleck',
    },
        {
          name: 'namePersonIntern',
          type: 'input',
          message: 'What is the name of Intern',
          default : 'Rake I',
        },
        {
          name: 'jobTitleIntern',
          type: 'input',
          message: 'What is the job title',
          default : 'Intern',

        },
        {
          name: 'idIntern',
          type: 'input',
          message: 'What is the ID Intern',
          default : 'IDI5',
        },
        {
          name: 'emailIntern',
          type: 'input',
          message: 'What is the Email Intern',
          default : 'rakeru2006@gmail.com',
        },
        {
          name: 'school',
          type: 'input',
          message: 'What is school  Intern',
          default : 'University Tec Monterrey',
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
    


      


    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">TEAM NAME ${answers.nameTeam}</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${answers.nameManager} </h2>
        <h3 class="card-title"><span class="badge badge-secondary">Job Position : ${answers.roleManager}</span></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${answers.idManager}</li>
            <li class="list-group-item">Email: <a href="${answers.emailManager}">${answers.emailManager}</a></li>
            <li class="list-group-item">Office number: ${answers.officeNumber}</li>
        </ul>
    </div>
</div>

<!-- Information engineer-->
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${answers.nameEngineer} </h2>
        <h3 class="card-title"><span class="badge badge-secondary">Job Position : ${answers.roleEngineer}</span></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${answers.idEngineer}</li>
            <li class="list-group-item">Email: <a href="${answers.emailEngineer}">${answers.emailEngineer}</a></li>
            <li class="list-group-item">GitHub: <a href="${answers.gitHubEngineer}" target="_blank" rel="noopener noreferrer">${answers.gitHubEngineer}</a></li>
        </ul>
    </div>
</div>

<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${answers.namePersonIntern}</h2>
        <h3 class="card-title"><span class="badge badge-secondary">Job Position : ${answers.jobTitleIntern}</span></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${answers.idIntern}</li>
            <li class="list-group-item">Email: <a href="${answers.emailIntern}">${answers.emailIntern}</a></li>
            <li class="list-group-item">School: ${answers.school}</li>
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
  