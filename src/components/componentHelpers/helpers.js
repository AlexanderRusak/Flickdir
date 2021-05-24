import { CardItem } from "../CardItem/Carditem"

export const renderItems = (items, type, onDelete) => {
    return items ? items.map(item => <CardItem onDelete={onDelete} type={type} imageItem={item} key={item.id} url={item.assets.preview.url} />) :
        <p>None</p>
}
