const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const fs = require('fs');


app.get('/', (req, res) => {
    res.send('chalculator');
});

app.post('/store', (req, res) => {
    const number = req.body.number;
    if (isNaN(number) || number == null) {
        res.status(400).json({ message: 'Invalid number' });
    } else {
        fs.writeFileSync('storedNumber.txt', number);
        res.json({message: 'Number stored successfully'});
    }
});

app.get('/retrieve', (req, res) =>{
    try {
        const storedNumber = fs.readFileSync('storedNumber.txt', 'utf-8');
        if(!storedNumber){
            res.json({ message: "No number stored yet"});
        }else{
            const number = parseInt(storedNumber, 10);
            if (Number.isInteger(number)) {
                res.json({ number });
            } else {
                res.status(400).json({ message: 'Invalid number' });
            }
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