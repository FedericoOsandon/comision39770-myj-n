console.log('iniciando el proceso')
process.on('exit', code => {
    console.log('Este se ejecuta antes de salir del proceso', code)
})
console.log('aqui')
process.on('uncaughtException', exception => {
    console.log('Este se atrapa todas las excepiones no controladas', exception)
})
console()
