const {
    sum,
    object
} = require("./sum")



test(`adds 1 + 2 to equal 3`, () =>{
    expect(sum(1, 2)).toBe(3);
});


test(`object is 1 & 2`, () => {
    expect(object).toEqual({one: 1, two: 2})
});