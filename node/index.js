const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

const peopleRouter = require('./routes/people');

app.use('/', peopleRouter);

app.listen(port, () => {
    console.log('Executando na porta ' + port);
})

module.exports = app;