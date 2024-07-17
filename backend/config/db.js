const mysql = require('mysql2/promise');
const { MongoClient } = require('mongodb');

async function createMySQLPool() {
    try {
        const pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: process.env.MYSQL_PWD,
            database: 'piousbox',
        });
        console.log('MySQL connection established successfully.');
        return pool;
    } catch (error) {
        console.error('Failed to establish MySQL connection: ', error);
        throw error;
    }
}


async function createMongoClient() {
    try {
        const mongoClient = new MongoClient(process.env.MONGO_URI);
        await mongoClient.connect();
        console.log('MongoDB connection established successfully.');
        return mongoClient;
    } catch (error) {
        console.error('Failed to establish MongoDB connection: ', error);
        throw error;
    }
}

module.exports = {
    createMySQLPool,
    createMongoClient
}