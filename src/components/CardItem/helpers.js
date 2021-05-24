export const getCurrentItem = (items, url) => {
    return items.find(item => item.assets.preview.url === url);
}

export const removeCurrentItem = (items, url) => {
    return items.filter(item => item.assets.preview.url === url);
}