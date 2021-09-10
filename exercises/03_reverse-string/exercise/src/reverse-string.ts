describe('Reverse String', () => {
    let reverseString: ReverseString;

    beforeEach(() => {
        reverseString = new ReverseString();
    });
    it('should reverse an empty string', () => {
        const expected = ''
        expect(reverseString.reverse('')).toEqual(expected)
    });

    it('should reverse a word', () => {
        const expected = 'skrowj'
        expect(reverseString.reverse('jworks')).toEqual(expected)
    });

    it('should reverse a capitalized word', () => {
        const expected = 'anidrO'
        expect(reverseString.reverse('Ordina')).toEqual(expected)
    });

    it('should reverse a sentence', () => {
        const expected = `!tpircSepyT evol I`
        expect(reverseString.reverse(`I love TypeScript!`)).toEqual(expected)
    });

    it('should reverse a palindrome', () => {
        const expected = 'racecar'
        expect(reverseString.reverse('racecar')).toEqual(expected)
    });
});

/**
 * Write your class here
 */