const isValidDouble = (number) => {
    return typeof number === 'number' && !isNaN(number);
};

module.exports = {isValidDouble}