
///
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
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
    ]);
  };
  
  const generateHTMLEnginner = (answers) =>
  `
  <!DOCTYPE html>
  <html lang="en">
  <title>Engineer</title>
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
        <h2 class="card-title">${answers.nameEngineer}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{{ role }}${answers.roleEngineer}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {{ id }}${answers.idEngineer}</li>
            <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}${answers.emailEngineer}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/{{ github }}${answers.gitHubEngineer}" target="_blank" rel="noopener noreferrer">{{ github }}${answers.gitHubEngineer}</a></li>
        </ul>
    </div>
</div>


      <h1 class="display-4"> Team Member Engenieer</h1>
      <p class="lead">Description.</p>
      <h3>Name: ${answers.nameEngineer} <span class="badge badge-secondary">Job Position : ${answers.roleEngineer}</span></h3>
      <ul class="list-group">
        <li class="list-group-item"> <b>Id:</b>  ${answers.idEngineer}</li>
        <li class="list-group-item"><b>Email:</b>  ${answers.emailEngineer}</li>
        <li class="list-group-item"><b>Office number:</b>  ${answers.gitHubEngineer}</li>
      
      </ul>
    </div>
  </div>
  </body>
  </html>`;
  

  const Engineer = async () => {
    console.log('Please answer the questions' );
    try {
      const answers = await promptUser();
  
      const html = generateHTMLEnginner(answers);
  
      await writeFileAsync('enginner.html', html);
  
      console.log('Successfully wrote to enginner.html');
    } catch (err) {
      console.log(err);
    }
  };
  
  Engineer();