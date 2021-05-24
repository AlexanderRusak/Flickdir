import { getCurrentItem } from "./helpers"

//Actual
const actualUrl = 'some-url.com';
const actualItems = [{
    assets: {
        preview: {
            url: 'some-url.com'
        }
    }
}, {
    assets: {
        preview: {
            url: 'some-url2.com'
        }
    }
}];

//Arrange
const arrange = {
    assets: {
        preview: {
            url: 'some-url.com'
        }
    }
}

//Assert
describe('getCurrentItem', () => {

    test('should return found element', () => {
        expect(getCurrentItem(actualItems, actualUrl)).toBeTruthy();
        expect(getCurrentItem(actualItems, actualUrl)).toStrictEqual(arrange)
    })
})

//Assert
describe('removeCurrentItem', () => {

    test('should remove item from array', () => {
        expect(getCurrentItem(actualItems, actualUrl)).toBeTruthy();
        expect(getCurrentItem(actualItems, actualUrl)).toStrictEqual(arrange)
    })
})