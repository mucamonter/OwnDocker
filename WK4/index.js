const expres = require('express');
require('dotenv').config();

const app = expres();

app.get('/', (req, res) => res.send('Servidor Node.js rodando'));

app.listen(3000, () => console.log("Ouvindo na porta 3000"));