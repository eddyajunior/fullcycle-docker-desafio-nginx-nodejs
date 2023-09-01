const express = require('express');
const router = express.Router();
const db = require('../database');

const tableExists = (con) => {
    console.log('Verificando tabela people!');
    const query = "CREATE TABLE IF NOT EXISTS people (id int primary key auto_increment not null, name varchar(255) not null)";
    con.query(query);
}

const insertRecords = (con) => {
    tableExists(con);
    
    const query = "insert into people (name) values ('Novo Usuário');";
    con.query(query);
}

router.get('/', (req, res) => {
    insertRecords(db);
    
    const query = 'select id as id, name as name from people order by id desc;';

    db.query(query, (error, result) => {
        if (error) throw error;

        res.render('people', { title: 'Full Cycle Rocks!!', data: result });
    });
});

module.exports = router;