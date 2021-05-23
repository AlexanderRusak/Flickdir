
import { useEffect, useState } from "react"
import { Layout } from "../../hoc/Layout"
import { Input } from "../UI/Input/Input"
import { fetchData } from "./helpers"
import { renderItems } from "../componentHelpers/helpers"
import classes from "./PictureBox.module.css"


export const PictureBox = () => {

    const [searchString, setSearchString] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData(string) {
            const data = await fetchData(string);
            setData(data)
        }

        getData(searchString);
    }, [searchString]);



    const onChangeHandler = (e) => {
        setSearchString(e.target.value);
    }

    return (
        <Layout >
            <Input value={searchString} onChange={onChangeHandler} placeholder='Search here ...' />
            <Layout styles={classes.PictureBox}>
                {data && renderItems(data)}
            </Layout>

        </Layout>
    )
}

