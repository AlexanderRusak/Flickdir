import { CardItem } from "../CardItem/Carditem"

export const renderItems = (items, type) => {
    return items? items.map(item => <CardItem type={type} imageItem={item} key={item.id} url={item.assets.preview.url} />):
    <p>None</p>
}
