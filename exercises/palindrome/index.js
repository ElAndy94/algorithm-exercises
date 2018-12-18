palindrome = (str) => {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
};

module.exports = palindrome;

// const reversed = str.split('').reverse().join('');

// return str === reversed;

////////////////////////

// let original = str;
//     let reversed = '';

//     for (let char of str) {
//         reversed = char + reversed
//     }

//     if (original === reversed) {
//         console.log(`${str} is a palindrome`);
//         return true;
//     } else {
//         return false;
//     }