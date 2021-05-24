import { renderItems } from "./helpers"


describe('renderItems', () => {

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

    test('Should return array of item', () => {
        expect(renderItems(actualItems)).toBeTruthy();
        expect(renderItems(actualItems)).toHaveLength(2);
        expect(renderItems(actualItems)).toBeInstanceOf(Array)
    })
})