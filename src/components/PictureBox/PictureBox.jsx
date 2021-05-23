
import { useEffect, useState } from "react"
import useDebounce from "./debouncer"
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

    const debouncedSearchQuery = useDebounce(searchString, 1000);

    useEffect(() => {
        async function getData(string) {
            const [data, total_count] = await fetchData(string, page);
            console.log(data, total_count);
            setCountOfData(total_count)
            setData(string ? data : null)
        }

        getData(debouncedSearchQuery);

    }, [page, countOfData, debouncedSearchQuery]);

    const onClichHandler = (value) => {
        setPage(page + value)
    }

    function onChangeHandler(e) {      //i used to function declaration for debouncer function visible
        setSearchString(e.target.value);
    }



    return (
        <Layout >
            <Input value={searchString} onChange={onChangeHandler} placeholder='Search here ...' />
            {/* I  did it  without magic code */}
            {data && countOfData && debouncedSearchQuery && <PaginationItem onClick={onClichHandler} pageNumber={page} count={countOfData} />}
            {!data && !debouncedSearchQuery && < EmptyContent message='No images here. Would you try to search for anything else?' />}
            {debouncedSearchQuery && data && !countOfData && <EmptyContent message="Nothing found" />}
            <Layout styles={classes.PictureBox}>
                {data && renderItems(data)}
            </Layout>

        </Layout>
    )
}

