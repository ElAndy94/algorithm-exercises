vowels = (str) => {
   const matches = str.match(/[aeiou]/gi);

   return matches ? matches.length : 0;
};

module.exports = vowels;

// vowels = (str) => {
//     let count = 0;
//     // const checker = "aeiou";  OR THIS
//     const checker = ['a', 'e', 'i', 'o', 'u']; // way better if you want to include things like 'abc';

//     for (let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             count ++;
//         }
//     }

//     return count;
// };