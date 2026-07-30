const pool = new Pool({
    user: process.env.DB_USER || 'root',
    host: process.env.DB_HOST || 'WK3_DB',
    database: process.env.DB_NAME || 'WK3_DB_1',
    password: process.env.DB_PASSWORD || 'Muca@Mont',
    port: process.env.DB_PORT || 5432,
});

