import { useEffect, useState } from "react";
import { Layout } from "../../hoc/Layout"
import { BOOKMARKS } from "../../localStorage/constNames";
import { getImagesFromLS } from "../../localStorage/helpers"
import { renderItems } from "../componentHelpers/helpers";
import { EmptyContent } from "../EmptyContent/EmptyContent";
import classes from '../PictureBox/PictureBox.module.css'


export const Bookmarks = () => {

    const [items, setItems] = useState(getImagesFromLS());

    const onDeleteHandler = (items) => {
        setItems(items);
    }

    useEffect(() => {

    }, [items])


    return (
        <Layout styles={classes.PictureBox}>
            {items && items.length ? renderItems(items, BOOKMARKS, onDeleteHandler) : <EmptyContent />}
        </Layout>
    )
}