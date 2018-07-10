const express = require('express');

const app = express();


app.get('/person/:number', (req, res) => {
    const values = {
        val1: Number(req.params.number) + 1,
        val2: Number(req.params.number) - 2,
    }
    res.send(values);
    console.log(req.params.number);
});
app.get('/facility/:number', (req, res) => {
    const values = {
        val3: Number(req.params.number) - 3,
        val4: Number(req.params.number) + 4,
    }
    res.send(values);
    console.log(req.params.number);
});
app.get('/exposure/:number', (req, res) => {
    const values = {
        val5: Number(req.params.number) + 10,
    }
    res.send(values);
    console.log(req.params.number);
});
app.listen(3001);