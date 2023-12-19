
import EventEmitter from 'events';
import inquirer from 'inquirer';
const myEmitter = new EventEmitter();


const welcomeUser = () => {
    console.log('Hello User!');
}

const loadOS = () => {
    console.log('Loading OS....');
}

const shutDown = () => {
    console.log('System shutting down...');
}

const greetBirthday = (name, newAge) => {
    console.log(`Happy Birthday ${name}. You are now ${newAge}!`);
}

// Subscribing to events
myEmitter.on('systemBoot', loadOS);
myEmitter.on('systemBoot', welcomeUser);

myEmitter.on('systemShutdown', shutDown);
myEmitter.on('greetBirthday', greetBirthday);


inquirer
    .prompt(
        [{

            type: 'list',
            message: 'Select an event',
            name: 'action',
            choices: ["Boot System", "Shutdown System"]
        }]
    )
    .then((answers) => {
        //Emiting Events

        if (answers.action == "Boot System") {
            myEmitter.emit('systemBoot')
            myEmitter.emit('greetBirthday', 'Mark Dionnie', '24');
        } else {
            myEmitter.emit('systemShutdown');
        }


    }); 