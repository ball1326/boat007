const mathOperations = require('./calculator');

describe("Calculator tests", () => {
    var input1 = 0
    var input2 = 0
    beforeAll(() => {
        console.log("beforeAll called");
    });
    afterAll(() => {
        console.log("afterAll called");
    });
    beforeEach(() => {
        console.log("beforeEach called");
        input1 = 1;
        input2 = 2;
    });
    afterEach(() => {
        console.log("afterEach called");
    });
    test('adding 1 + 2 should return 3', () => {
        // arrange and act
        var result = mathOperations.sum(1, 2)
        var string1 = "software testing help - a greatresource for testers"

        // assert
        expect(result).toBe(3);
        expect(result).not.toBe(5);
        expect(string1).not.toMatch(/abc/)
    });

    test('diff 5 - 1 should return 4', () => {
        // arrange and act
        var result = mathOperations.diff(5, 1)
        // assert
        expect(result).toBe(4);
    });

    test('product 7 * 3 should return 21', () => {
        // arrange and act
        var result = mathOperations.product(7, 3)
        // assert
        expect(result).toBe(21);
    });
})
