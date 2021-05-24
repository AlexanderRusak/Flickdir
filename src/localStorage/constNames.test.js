import { getImagesFromLS, updateImagesFromLS } from "./helpers"

describe('getImagesFromLS', () => {
    test('should return array of image items', () => {
        expect(getImagesFromLS()).toBeTruthy();
        expect(getImagesFromLS()).toBeInstanceOf(Array);
    });
});

describe('updateImagesFromLS', () => {
    test('should return filtered array', () => {
        expect(updateImagesFromLS('some-url2.com')).toBeInstanceOf(Array);
        expect(updateImagesFromLS('some-url2.com')).toBeTruthy();
    });
});