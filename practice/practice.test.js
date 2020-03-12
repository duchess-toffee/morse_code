const {
    rmDuplicate,
    palindromic,
    reverseStr
} = require("./practice")



test(`rmDuplicate returns an array with duplicates removed`, () =>{
    const array = [`hi`, 3, 2, 3, `hi`];
    const rmDup = rmDuplicate(array);
    expect(rmDup).toEqual([`hi`, 3, 2]);
});

test(`rmDuplicate works on an empty array`, () =>{
    const array = [];
    const rmDup = rmDuplicate(array);
    expect(rmDup).toEqual([]);
});


test(`palindromic returns true if the string is a palindrome`, () =>{
    const str = `racecar`;
    const pal = palindromic(str);
    expect(pal).toEqual(true);
});

test(`palindromic returns false if the string is not a palindrome`, () =>{
    const str = `racecar1`;
    const pal = palindromic(str);
    expect(pal).toEqual(false);
});

test(`palindromic filters out punctuation`, () =>{
    const str = `r.a.c.e.car`;
    const pal = palindromic(str);
    expect(pal).toEqual(true);
});

test(`palindromic filters out capitalization`, () =>{
    const str = `RaCeCaR`;
    const pal = palindromic(str);
    expect(pal).toEqual(true);
});

test(`reverseStr reverses all words in the sentence and preserves punctuation and capitalization`, () =>{
    const sent = `Never give up.`;
    const reverse = reverseStr(sent);
    expect(reverse).toBe(`Up give never.`);
});