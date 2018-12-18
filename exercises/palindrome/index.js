function palindrome(str) {
  const reversed = str.split('').reverse().join('');

  return str === reversed;
};

module.exports = palindrome;


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