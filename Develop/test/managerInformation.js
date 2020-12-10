
///
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

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

    ]);
  };
  
 
  const generateHTMLMAnager = (answers) =>
  `<!DOCTYPE html>
  <html lang="en">
  <title>Manager</title>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">

    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">{{ name }}${answers.nameManager} </h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>{{ role }}${answers.roleManager} </h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {{ id }}${answers.idManager} </li>
            <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}${answers.emailManager} </a></li>
            <li class="list-group-item">Office number: {{ officeNumber }}${answers.officeNumber} </li>
        </ul>
    </div>
</div>


      <h1 class="display-4"> Team Name ${answers.nameTeam} </h1>
      <p class="lead">Description.</p>
      <h3>Name: ${answers.nameManager} <span class="badge badge-secondary">Job Position : ${answers.roleManager}</span></h3>
      <ul class="list-group">
        <li class="list-group-item"> <b>Id:</b>  :${answers.idManager}</li>
        <li class="list-group-item"><b>Email:</b>  ${answers.emailManager}</li>
        <li class="list-group-item"><b>Office number:</b>  ${answers.officeNumber}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
  
  // Bonus using async/await and try/catch
  const manager = async () => {
    console.log('Please answer the questions' );
    try {
      const answers = await promptUser();
  
      const html = generateHTMLMAnager(answers);
  
      await writeFileAsync('manager.html', html);
  
      console.log('Successfully wrote to manager.html');
    } catch (err) {
      console.log(err);
    }
  };
  
  manager();