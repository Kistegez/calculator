const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let storedNumber = 0;

app.get('/', (req, res) => {
    res.send('chalculator');
});

app.post('/store', (req, res) => {
    storedNumber = req.body.number;
    res.json({ message: 'Number stored successfully' });
});

app.get('/retrieve', (req, res) =>{
    res.json({number: storedNumber});
})

app.listen(8080, () => {
    console.log('Server started on port 8080');
});