
import inquirer from 'inquirer';
import clear from 'clear-console';
import chalk from 'chalk';
import * as fs from 'fs';
import { exit } from 'process';

function makeFolder() {
    inquirer
      .prompt(
  
        [{
          type: 'text',
          message: 'Folder Name',
          name: 'name',
        }]
      )
      .then((answers) => {
        fs.mkdir(`${answers.name}`, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(chalk.green('Folder Created Successfully'));
          }
        })
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log(chalk.red('Prompt couldn\'t be rendered in the current environment'));
  
        } else {
          console.log(chalk.red('Something went wrong'));
        }
      });
  }
  
  function makeFile() {
    inquirer
      .prompt(
  
        [{
          type: 'text',
          message: 'File Name',
          name: 'name',
        }]
      )
      .then((answers1) => {
        console.log(`${answers1.name}`);
  
  
        inquirer
          .prompt(
  
            [{
              type: 'text',
              message: 'Content',
              name: 'content',
            }]
          ).then((answers2) => {
            fs.writeFile(`${answers1.name}`, answers2.content, (err) => {
              if (err) {
                console.log(err);
              } else {
                console.log(chalk.green('File Created Successfully'));
              }
            })
  
          });
  
  
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log(chalk.red('Prompt couldn\'t be rendered in the current environment'));
  
        } else {
          console.log(chalk.red('Something went wrong'));
        }
      });
  }
  
  function readFile() {
    inquirer
      .prompt(
  
        [{
          type: 'text',
          message: 'File Name',
          name: 'name',
        }]
      )
      .then((answers) => {
        fs.readFile(`${answers.name}`, { encoding: 'utf-8' }, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            const structDatas = [
              { Content: data },
            ];
            console.table(structDatas);
          }
        })
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log(chalk.red('Prompt couldn\'t be rendered in the current environment'));
  
        } else {
          console.log(chalk.red('Something went wrong'));
        }
      });
  
  
  }
  

    clear();
  
    console.log(chalk.green('WELCOME TO FILE MANAGER'))
    const choices = ['Add New Folder', 'Add New File', 'Read File', chalk.red('Exit')];
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: chalk.white('What do you want?'),
          choices: choices,
        },
      ])
      .then(answers => {
        switch (answers.action) {
          case choices[0]:
            makeFolder();
            break;
          case choices[1]:
            makeFile();
            break;
          case choices[2]:
            readFile();
            break;
          case choices[3]:
            clear();
            exit();
  
  
  
          default:
            break;
        }
      });
  
  
  

  
  





