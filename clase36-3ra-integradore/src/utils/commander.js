const {Command} = require('commander')

const commander = new Command()

commander
    .option('--mode <mode>', 'Modo de ejecución de nuestra app')
    .parse()

module.exports = {
    commander
}