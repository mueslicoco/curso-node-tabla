const fs = require('fs');
const colors = require('colors')

const crearArchivo = async( base = 5, listar = false, iter = 10 ) => {

    
    try {
        let sortida = '';
        let sortidaNeta = '';

        for (let i=1; i <= iter; i ++) {
            sortida += (`${ base } ${ 'x'.green } ${i} ${ '='.green } ${ base * i }\n`)
            sortidaNeta += (`${ base } ${ 'x' } ${i} ${ '=' } ${ base * i }\n`)
        }
    
        if ( listar ) {
            console.log('================='.green)
            console.log(`  Taula del: `.green, colors.yellow(base))
            console.log(` Repeticions: `.green, colors.blue(iter))
            console.log('================='.green)
            console.log(sortida)
        }
    
        fs.writeFileSync(`./output/taula-${ base }.txt`, sortidaNeta)
        return `taula-${ base }.txt`;
    } catch(err) {
        throw err;
    }   
    
}

module.exports = {
    crearArchivo
}