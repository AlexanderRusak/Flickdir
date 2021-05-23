import { useEffect, useState } from "react"
import { Layout } from "../../hoc/Layout"
import { BOOKMARKS } from "../../localStorage/constNames";
import { getImagesFromLS } from "../../localStorage/helpers"
import { renderItems } from "../componentHelpers/helpers";
import classes from '../PictureBox/PictureBox.module.css'


export const Bookmarks = () => {

    const [imageItems, setImageItems] = useState([])

    useEffect(() => {
        const images = getImagesFromLS();
        setImageItems(images);
    }, [])

    return (
        <Layout styles={classes.PictureBox}>
            {renderItems(imageItems, BOOKMARKS)}
        </Layout>
    )
}