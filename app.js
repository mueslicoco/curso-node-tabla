
// const { argv } = require('process')
console.clear()

const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
require('colors')


// console.log(process.argv)
// console.log(argv)

// const [,,arg3 = 'base=5' ] = process.argv;
// const [ ,base = 5] = arg3.split('=')

//const base = 3;
 
crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creat'))
    .catch( err => console.log('ERROR!', err) )

