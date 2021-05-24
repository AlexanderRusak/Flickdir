import { COUNT_OF_ITEMS } from "../../../shutterStockApi/queryConst"

export const getCountOfPages = (counts) => {

    if (counts < 0) return -1;

    return Math.ceil(counts / COUNT_OF_ITEMS)
}