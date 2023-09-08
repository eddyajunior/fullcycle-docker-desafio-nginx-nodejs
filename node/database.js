const express = require('express');
const app = express();
const port = 3000;

const config = {
    host: 'db',
    port: 3306,
    user: 'root',
    password: 'pwd-desafio',
    database: 'docker-db-desafio'
};

const mysql = require('mysql');

const conn = mysql.createConnection(config);

conn.connect((error) =>{
    if (error) throw error;

    console.log('Conexão com banco Ok!');
})

module.exports = conn;