 const express = require('express');
//Adicionando uma library


const app = express();
//Nomeando

         const db = require('./persistence');
//

//
 const getItems = require('./routes/getItems');
 const addItem = require('./routes/updateItem');
 const deleteItem = require('./routes/deleteItem');
//


 app.use(express.json());
//Traduz o json para o js, possibilitando o uso do 

app.use(express.static(__dirname + '/static'));

app.get('/api/greeting', getGreeting);
app.get('/items', getItems);
app.post('/items', addItem);
app.put('/items/:id', updateItem);
app.delete('/items/:id', deleteItem);

db.init()
    .then(() => {
        app.listen(3000, () => console.log('Listening on port 3000'));
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown);
