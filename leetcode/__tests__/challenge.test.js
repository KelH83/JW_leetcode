const {twoSum, isPalindrome} = require('../challenges')

describe('twoSum', () => {
    test('When given an empty array will return an empty array', () => {
        expect(twoSum([])).toEqual([])
    });
    test('When given an array of 2 digits that add up to the target will return the index of those 2 digits', () => {
        expect(twoSum([3,3], 6)).toEqual([0,1])
    });
    test('When given an array of digits, will identify the 2 that add up to target and return the index of those digits', () => {
        expect(twoSum([2,7,11,15],9)).toEqual([0,1])
        expect(twoSum([3,2,4],6)).toEqual([1,2])
        expect(twoSum([0,1,3,5],6)).toEqual([1,3])
    });
});

describe('isPalindrome', () => {
    test('When given a single digit will return true', () => {
        expect(isPalindrome(1)).toBe(true)
    });
    test('When given a palindrome of numbers will return true', () => {
        expect(isPalindrome(121)).toBe(true)
        expect(isPalindrome(12321)).toBe(true)
    });
    test('When given numbers that are not a plaindrome will return false', () => {
        expect(isPalindrome(123)).toBe(false)
        expect(isPalindrome(-5678)).toBe(false)
    });
});