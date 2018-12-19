anagrams = (stringA, stringB) => {
    return cleanString(stringA) === cleanString(stringB);
};

cleanString = (str) => {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

    // const charsA = {};
    // const charsB = {};

    // stringAMod = stringA.toLowerCase().replace(/[^\w]/g, "");
    // stringBMod = stringB.toLowerCase().replace(/[^\w]/g, "");

    // for (let char of stringAMod) {
    //     if (!charsA[char]) {
    //         charsA[char] = 1;
    //     } else {
    //         charsA[char]++;
    //     }
    // }

    // for (let char of stringBMod) {
    //     if (!charsB[char]) {
    //         charsB[char] = 1;
    //     } else {
    //         charsB[char]++;
    //     }
    // }

    // return charsA === charsB;

    //////////////////////////////

    // anagrams = (stringA, stringB) => {
    //     const aCharMap = buildCharMap(stringA);
    //     const bCharMap = buildCharMap(stringB);
    
    //     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    //         return false;
    //     }
    
    //     for (let char in aCharMap) {
    //         if (aCharMap[char] !== bCharMap[char]) {
    //             return false;
    //         }
    //     }
    
    //     return true;
    // };
    
    // buildCharMap = (str) => {
    //     const charMap = {};
    
    //     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    //         charMap[char] = charMap[char] + 1 || 1;
    //     }
    
    //     return charMap;
    // }