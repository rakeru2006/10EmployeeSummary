
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
          name: 'namePerson',
          type: 'input',
          message: 'What is the name of Engineer',
          default : 'Alec',
        },
        {
          name: 'jobTitleP',
          type: 'input',
          message: 'What is the job title ',
          default : ' Engineer',

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
          message: 'What is the ID Engineer',
          default : '2',
        },
        {
          name: 'email',
          type: 'input',
          message: 'What is the Email Engineer',
          default : 'aleck@fakemail.com',
        },
        {
          name: 'officeNumber',
          type: 'input',
          message: 'What is the Github of Engineer',
          default : 'github aleck',
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
  const generateHTMLEnginner = (answers) =>
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
      <h3>Name: ${answers.namePerson} <span class="badge badge-secondary">Job Position : ${answers.title}</span></h3>
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
  const initEngineer = async () => {
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
  
  initEngineer();