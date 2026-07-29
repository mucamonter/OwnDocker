const express = require('express');
//reserva um espaço para salvar os scripts da ação express
//ação expres => ir na pasta (node_modules)

const app = express();
//defini uma variavel para executar o script

app.get('/', (req, res) => res.send('Servidor Node.js rodando no Docker com sucesso!'))

// Req => Request
// Res => Response



app.listen(3000, () => console.log('Aplicação ouvindo na porta 3000'))