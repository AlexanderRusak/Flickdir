import { fetchData, getImagesQuery } from "./helpers"

describe('getImagesQuery', () => {

    //Act
    const actual = 'lady';


    //Assert
    test('should return array of objects with images data', async() => {

        try {
            const arrange = await getImagesQuery(actual, 1);
            expect(arrange).toBeTruthy();
            expect(arrange).not.toBeNull();
        } catch (e) {
            expect(e).toBeInstanceOf(TypeError);
        }

    })
});


describe('fetchData', () => {

    //Act
    const actual = 'lady';
    const page = 1;

    //Arrange
    const negtivePage = -1;

    test('should return [data,total_count]', async() => {

        try {
            const [data, total_count] = fetchData(actual, page);
            expect('should be array of images data', data).toHaveLength();
            expect('should be array of images data', data).toBeInstanceOf(Array);
            expect('should retirn number of image items counts', total_count).toBeInstanceOf(Number);

        } catch (e) {
            expect(e).toBeInstanceOf(TypeError);
        }
    })

    test('should return errors', async() => {
        try {

            expect('should be array of images data', await fetchData(actual, negtivePage)).toThrowError()
        } catch (e) {
            expect(e).toBeInstanceOf(TypeError);
        }
    })
})