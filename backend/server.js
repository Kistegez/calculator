const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const fs = require('fs');


app.get('/', (req, res) => {
    res.send('chalculator');
});

app.post('/store', (req, res) => {
    fs.writeFileSync('stored_number.txt', storedNumber);
    res.json({ message: 'Number stored successfully' });
});

app.get('/retrieve', (req, res) =>{
    let storedNumber = parseInt(fs.readFileSync('storedNumber.txt').toString());
    res.json({number: storedNumber});
})

app.listen(8080, () => {
    console.log('Server started on port 8080');
});