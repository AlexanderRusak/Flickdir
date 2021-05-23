
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
    const [page, setPage] = useState(1);
    const [countOfData, setCountOfData] = useState(0);

    useEffect(() => {
        async function getData(string) {
            const [data, total_count] = await fetchData(string, page);
            setCountOfData(total_count)
            setData(searchString ? data : null)
        }
        getData(searchString);
    }, [searchString, page, countOfData]);

    const onClichHandler = (value) => {
        setPage(page + value)
    }

    const onChangeHandler = (e) => {
        setSearchString(e.target.value);
    }
    
    return (
        <Layout >
            <Input value={searchString} onChange={onChangeHandler} placeholder='Search here ...' />
            {data && <PaginationItem onClick={onClichHandler} pageNumber={page} count={countOfData} />}
            { !data && < EmptyContent message='No images here. Would you try to search for anything else?' />}
            <Layout styles={classes.PictureBox}>
                {data && renderItems(data)}
            </Layout>

        </Layout>
    )
}

