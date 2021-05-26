interface Item {
    assets: Assets
};

interface Assets {
    preview: Preview
}

interface Preview {
    url: string
}

export function getCurrentItem(items: Array<Item>, url: string): Object {
    return items.find(item => item.assets.preview.url === 'sttttt');
}

export function removeCurrentItem(items: Array<Item>, url: string): Object {
    return items.filter(item => item.assets.preview.url === url);
}

