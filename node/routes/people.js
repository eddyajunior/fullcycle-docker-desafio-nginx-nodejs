const express = require('express');
const router = express.Router();
const db = require('../database');

const insertRecords = (con) => {
    const sql_ins = "insert into people (name) values ('Novo Usuário');";
    con.query(sql_ins);
}

router.get('/', (req, res) => {
    insertRecords(db);
    
    const sql = 'select id as id, name as name from people order by id desc;';

    db.query(sql, (error, result) => {
        if (error) throw error;

        res.render('people', { title: 'Full Cycle Rocks!!', data: result });
    });
});

module.exports = router;