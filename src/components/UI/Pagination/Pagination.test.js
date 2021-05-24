import { getCountOfPages } from "./helpers"


describe('getCountOfPages', () => {

    const actual = 101;


    test('should return count of page', () => {
        expect(getCountOfPages(actual)).toBe(11);
        expect(getCountOfPages(actual)).not.toBeNaN();
    })

    test('should return count error -1 ', () => {
        expect(getCountOfPages(-5)).toBe(-1);
    })
})