/*let base = 2;
let i = 1;
for (i = 1; i <= 10; i++) {
    console.log(`${base}*${i}=${base*i}`);
}*/
const argv = require('./config/yargs').argv;
var colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado con exito en base`, colors.red(argv.base)))
            .catch(err => console.log(`base ${argv.base} no es numerico`));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}