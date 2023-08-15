const express = require('express')
const cluster = require('cluster')
const { cpus } = require('os')

const app = express()
const PORT = 8080
const numeroProcesadore = cpus().length

app.get('/', (req, res) => {
    res.send('hello Docker app')
})

app.get('/simple', (req, res) => {
    let sum = 0
    for (let i = 0; i < 1000000; i++) {
        sum += i        
    }
    res.send({
        status:'success', 
        message: `El worker ${process.pid} a atendido la petición: La suma es = ${sum}`
    })
})

app.get('/compleja', (req, res) => {
    let sum = 0
    for (let i = 0; i < 5e8; i++) {
        sum += i        
    }
    res.send({
        status:'success', 
        message: `El worker ${process.pid} a atendido la petición: La suma esLa suma es ${sum}`
    })
})

// console.log(process.pid)
// console.log(cluster.isPrimary)
// console.log(numeroProcesadore)
// node < 16 cluster.isMaster


if (cluster.isPrimary) {
    console.log('Proceso primario, generando un proceso trabajador')
    for (let i = 0; i < numeroProcesadore; i++) {
        cluster.fork()       
    }
    cluster.on('message', worker => {
        console.log(`Mensaje recibido de El worker ${worker.process.pid}`)
    })
}else{
    console.log('Al ser un proceso forkeado, no cuento como primario, por lo tanto, isPrimary=false. Soy un worker')
    console.log(`Soy un proceso worker con el id: ${process.pid}`)

   
    
    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`)
    })
}
// artillery quick --count 40 --num 50 "http://localhost:8080/simple" -o simple.json
// artillery quick --count 40 --num 50 "http://localhost:8080/compleja" -o compleja.json