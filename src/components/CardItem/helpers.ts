interface Preview {
    url: string
}

interface Assets {
    preview: Preview
}

interface Item {
    assets: Assets
};





export function getCurrentItem(i: Array<Item>, url: string): Object {
    const items = [
        {
            assets: {
                preview: {
                    url: ''
                }
            }
        }
    ]

    return items.find(item => item.assets.preview.url === url);
}

export function removeCurrentItem(items: Array<Item>, url: string): Object {
    return items.filter(item => item.assets.preview.url === url);
}

