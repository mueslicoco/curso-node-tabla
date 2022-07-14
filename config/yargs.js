const exp = require('constants');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la taula de multiplicar'
    })
    .check((argv, options) => {
        if( isNaN(argv.b)) {
            throw 'La base ha de ser un nombre'
        } 
        if( isNaN(argv.h) || (argv.h < 2)) {
            throw 'El nombre d\'iteracions ha de ser un nombre major que 1'
        }
        console.log(argv.h)
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Mostra la taula en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Es el nombre màxim d\'iteracions de la taula'
    })
    .argv

module.exports = argv;