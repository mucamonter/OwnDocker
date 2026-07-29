const mysql = require('mysql2')

async function conectarBanco() {
    try {
        const connection = await mysql.createConnection(process.env.DATABASE_URL);
        console.log('Conecatado ao MYSQL!  :)')
    } catch (error){
        console.error('Erro ao conectar ao MYSQL', error);
    }
}

conectarBanco();