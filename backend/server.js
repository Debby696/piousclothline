require('dotenv').config();
const express = require('express');
const { createMySQLPool, createMongoClient } = require('./config/db');


const app = express();
const port = process.env.PORT || 3000;

async function initializeServer() {
    try {
        const mysqlPool = await createMySQLPool();
        const mongoClient = await createMongoClient();

        app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}/`);
        });

    } catch (error) {
        console.error('Failed to establish connection: ', error);
        process.exit(1);
    }
    
}

initializeServer();
