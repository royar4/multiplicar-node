const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime lista la tabla multiplicar', opts)
    .command('crear', 'crea una tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}