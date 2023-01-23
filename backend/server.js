const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { readNumber, writeNumber } = require('./fileHandler');
const { isValidDouble } = require('./validator');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('chalculator');
});

app.post('/store', (req, res) => {
    const number = req.body.number;
    if (!isValidDouble(number)) {
        res.status(400).json({ message: "Invalid number" });
    } else {
        writeNumber(number);
        res.json({ message: 'Number stored successfully' });
    }
});

app.get('/retrieve', (req, res) => {
    const storedNumber = readNumber();
    if (!storedNumber) {
        res.json({ message: 'No number stored yet' });
    } else {
        res.json({ number: parseInt(storedNumber, 10) });
    }
});

app.listen(8080, () => {
    console.log('Server started on port 8080');
});