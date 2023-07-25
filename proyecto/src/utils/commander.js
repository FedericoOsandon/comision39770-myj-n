// argumentos - process
// console.log(process.cwd())
// console.log(process.pid)
// console.log(process.memoryUsage())
// console.log(process.version)
// console.log(process.argv.slice(2))

const { Command } = require('commander')
// import { Command } from 'commander'

// const program   = new Command()

// npm i o npm install
// program 
//     .option('-d', 'Variable para debug', false)
//     .option('-p, --port <port>', 'Puerto del servidor', 8080)
//     .option('--mode <mode>', 'Modo de trabajo', 'development')// .env
//     .requiredOption('-u <user>', 'Usuario utilizando el applicativo', 'No se ha declarado un usuario')// .env
//     .option('-l, --letters [letter...]', 'specify letter')
//     .parse()

// console.log('options: ', program.opts())
// console.log('Argumentos: ', program.args)

const commander = new Command()

commander
    .option('--mode <mode>', 'Modo de ejecución de nuesta app', 'development')
    .parse()

module.exports = {
    commander
}