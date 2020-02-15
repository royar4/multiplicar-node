const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {
    console.log(`======================`.blue);
    console.log(`====tabla de ${base}===`.blue);
    console.log(`======================`.blue);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base * i}`);
    }
}
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base no es un numero ${base}`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`files/tabla_multiplicar_${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla_multiplicar_${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}