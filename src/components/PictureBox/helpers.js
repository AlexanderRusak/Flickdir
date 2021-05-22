import { imagesApi } from "../../shutterStockApi/auth"
import { queryParams } from "../../shutterStockApi/query"


export const getImagesQuery = async (searchString) => {

    try {
        const result = await imagesApi.searchImages({

            'query': searchString,
            ...queryParams

        })
        return result;
    } catch (err) {
        console.error(err);
    }

}

export const fetchData = async (searchString) => {
    const { data } = await getImagesQuery(searchString);
    return data

}



