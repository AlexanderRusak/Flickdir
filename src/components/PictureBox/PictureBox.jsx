
import { useEffect, useState } from "react"
import { Layout } from "../../hoc/Layout"
import classes from "./PictureBox.module.css"
import { Input } from "../UI/Input/Input"
import { fetchData } from "./helpers"
import { CardItem } from "../CardItem/Carditem"


export const PictureBox = () => {

    const [searchString, setSearchString] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        getData(searchString);
    }, [searchString]);

    const getData = async (string) => {
        const data = await fetchData(string);
        setData(data)
    }

    const onChangeHandler = (e) => {
        setSearchString(e.target.value);
    }

    const renderItems = (items) => {
        return items.map(item => <CardItem key={item.assets.preview.url} url={item.assets.preview.url} />)
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

