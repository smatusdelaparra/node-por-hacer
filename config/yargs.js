//requireds

const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true
}

const optsCrear = {
    descripcion
}

const optsAct = {
    descripcion,
    completado
}

const optBorrar = {
    descripcion
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', optsCrear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optsAct)
    .command('borrar', 'Elimina la tarea por hacer', optBorrar)
    .help()
    .argv;


module.exports = {
    argv
}