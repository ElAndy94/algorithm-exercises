reverse = (str) => {
    let reversedString = '';

    for (let char of str) {
        reversedString = char + reversedString;
        console.log(reversedString);
    }

    return reversedString;

    // return str.split('').reduce((rev, char) => char + rev, '');

    // return str.split('').reduce((reversed, character) => {
    //     return character + reversed;
    // }, '');
}

module.exports = reverse;



// let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;


////////////

// return str.split('').reverse().join('');

/////////

    // strSplit = str.split('');
    // reversed = strSplit.reverse();
    // finished = reversed.join('');

    // return finished