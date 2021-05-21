
import { Layout } from "../../hoc/Layout"
import { Button, Card } from "react-bootstrap"
import { Text } from "../UI/Text/Text"
import classes from "./PictureBox.module.css"
import { Input } from "../UI/Input/Input"

export const PictureBox = () => {

    const pictureStyles = {
        height: '215px',
        width: '100%',
        marginTop: '10px',
        paddingLeft: '15px',
        paddingRight: '15px',
    }

    const onClick = () => {
        console.log('click');
    }

    return (
        <Layout styles={classes.PictureBox}>
            <Card>
                <Card.Img style={pictureStyles} src='https://сезоны-года.рф/sites/default/files/images/journal/quotes.jpg' />
                <Card.Body>
                    <Button onClick={onClick} style={{ backgroundColor: 'coral' }} variant='light' size="sm" >
                        <Text text='Bookmark it!' />
                    </Button>
                    <Input styles={{ width: '16rem' }} placeholder='Input tag...' />
                </Card.Body>
            </Card>
        </Layout>
    )
}

