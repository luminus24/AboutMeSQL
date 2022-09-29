const express = require('express')

const app = express()

app.get('/me' , (request, response) => {
    console.log(request.method);
    response.status(200).json({
        nombre:'Jose Fernando Benito Milla',
        edad:'23 años',
        pais: 'Peru'
    });
})

app.post('/metas' , (request, response) => {
    console.log(request.method);
    response.status(200).json({
        hobbies: ['Leer','Ver Series','Jugar video juegos']
    });
})

app.patch('/metas' , (request, response) => {
    console.log(request.method);
    response.status(200).json({
        metas: ['Volverme desarrollador Full-Stack' , 'Terminar mi carrera de Ingeniería']
    });
})

app.put('/bussines' , (request, response) => {
    console.log(request.method);
    response.status(200).json({
        empresas: ['Facebook','Alguna Startup','Amazon']
    });
})


app.listen(8000, () => {
    console.log('server started at port');
})