const fs = require('fs');

const storedNumberFile = 'storedNumber.txt';

const readNumber = () => {
    try {
        return fs.readFileSync(storedNumberFile, 'utf-8');
    } catch (err) {
        if (err.code === 'ENOENT') {
            return null;
        } else {
            throw err;
        }
    }
};

const writeNumber = (number) => {
    fs.writeFileSync(storedNumberFile, number);
};

module.exports = { readNumber, writeNumber };