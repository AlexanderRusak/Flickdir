import { COUNT_OF_ITEMS } from "../../../shutterStockApi/queryConst"

export const getCountOfPages = (counts) => {
    return Math.ceil(counts / COUNT_OF_ITEMS)
}