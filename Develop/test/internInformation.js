///
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([

        {
          name: 'namePerson',
          type: 'input',
          message: 'What is the name of Intern',
          default : 'John I',
        },
        {
          name: 'jobTitleP',
          type: 'input',
          message: 'What is the job title ',
          default : 'Intern',

        },

        {
          name: 'id',
          type: 'input',
          message: 'What is the ID Intern',
          default : 'IID5',
        },
        {
          name: 'email',
          type: 'input',
          message: 'What is the Email Intern',
          default : 'johnd@fakemailnitern.com',
        },
        {
          name: 'school',
          type: 'input',
          message: 'What is school  Intern',
          default : 'University I Tec Monterrey',
        },

    ]);
  };
  
  
  const generateHTMLMIntern = (answers) =>
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
      <h1 class="display-4"> Team Member Intern</h1>
      <p class="lead">Description.</p>
      <h3>Name: ${answers.namePerson} <span class="badge badge-secondary">Job Position : ${answers.title}</span></h3>
      <ul class="list-group">
        <li class="list-group-item"> <b>Id:</b>  :${answers.id}</li>
        <li class="list-group-item"><b>Email:</b>  ${answers.email}</li>
        <li class="list-group-item"><b>School:</b>  ${answers.school}</li>
        <li class="list-group-item"><b>Menu :</b> ${answers.menu}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
  
 
  const intern= async () => {
    console.log('Please answer the questions' );
    try {
      const answers = await promptUser();
  
      const html = generateHTMLMIntern(answers);
  
      await writeFileAsync('intern.html', html);
  
      console.log('Successfully wrote to intern.html');
    } catch (err) {
      console.log(err);
    }
  };
  
  intern();