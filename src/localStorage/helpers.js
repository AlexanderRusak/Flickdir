import { BOOKMARKS } from "./constNames";

export const setImageItemToLS = (imageItem) => {
    const currentBookmarks = getImagesFromLS();
    if (currentBookmarks) {
        currentBookmarks.push(imageItem);
        setItemsToLS(currentBookmarks)
    } else {
        setItemsToLS([imageItem])
    }

}

export const getImagesFromLS = () => {
    return JSON.parse(localStorage.getItem(BOOKMARKS)) || [];
}

export const updateImagesFromLS = (url) => {
    const updatedItems = getImagesFromLS().filter(image => image.assets.preview.url !== url);
    localStorage.removeItem(BOOKMARKS);
    setItemsToLS(updatedItems);
    return updatedItems;

}

const setItemsToLS = (data) => {
    localStorage.setItem(BOOKMARKS, JSON.stringify(data))
}