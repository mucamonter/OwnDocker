import express from 'express';

//-----------------------------------------------------------
const app = express();
const tarefaRoutes = require('./routes/tarefaRoutes');
const PORT = process.env.PORT || 3000;
//-----------------------------------------------------------

app.get('/', (req, res) => {
    res.send('Bem-vindo à API de tarefas!');
});

app.use('/api', tarefaRoutes);
//I didn't understand that

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
//-----------------------------------------------------------



//Variables: tarefaRoutes, PORT

//file function: when the main directory is acessed the tarefaRoutes is called 
//defines and show the using port