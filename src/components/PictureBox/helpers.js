import { imagesApi } from "../../shutterStockApi/auth"
import { queryParams } from "../../shutterStockApi/query"


export const getImagesQuery = async (searchString, page) => {

    try {
        const result = await imagesApi.searchImages({

            'query': searchString,
            "page": page,
            ...queryParams

        })
        return result;
    } catch (err) {
        console.error(err);
    }

}

export const fetchData = async (searchString, pageNumber) => {
    const result = await getImagesQuery(searchString, pageNumber);
    const { total_count, data } = result;
    return [data, total_count];

}




