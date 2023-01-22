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
    try {
        const storedNumber = fs.readFileSync('storedNumber.txt', 'utf-8');
        if(!storedNumber){
            res.json({ message: "No number stored yet"});
        }else{
            res.json({ number: parseInt(storedNumber) });
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            res.json({ message: "No number stored yet" });
        } else {
            res.json({ message: "Error occurred", error: err });
        }
    }
})

app.listen(8080, () => {
    console.log('Server started on port 8080');
});