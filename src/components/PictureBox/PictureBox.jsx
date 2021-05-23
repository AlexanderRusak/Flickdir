
import { useEffect, useState } from "react"
import { Layout } from "../../hoc/Layout"
import { Input } from "../UI/Input/Input"
import { renderItems } from "../componentHelpers/helpers"
import { EmptyContent } from "../EmptyContent/EmptyContent"
import { PaginationItem } from "../UI/Pagination/Pagination"
import { fetchData } from "./helpers"
import classes from "./PictureBox.module.css"


export const PictureBox = () => {

    const [searchString, setSearchString] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData(string) {
            const data = await fetchData(string);
            setData(searchString ? data : null)
        }
        getData(searchString);
    }, [searchString]);



    const onChangeHandler = (e) => {
        setSearchString(e.target.value);
    }

    return (
        <Layout >
            <Input value={searchString} onChange={onChangeHandler} placeholder='Search here ...' />
            <PaginationItem />
            { !data && < EmptyContent message='No images here. Would you try to search for anything else?' />}
            <Layout styles={classes.PictureBox}>
                {data && renderItems(data)}
            </Layout>

        </Layout>
    )
}

