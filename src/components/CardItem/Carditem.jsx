import PropTypes from 'prop-types';
import { Button, Card } from "react-bootstrap"
import { Input } from "../UI/Input/Input"
import { Text } from "../UI/Text/Text"
import { pictureStyles } from "../PictureBox/PictureSyles";



export const CardItem = ({ url }) => {
    return (

        <Card style={{ width: '28rem', height: '25rem',margin:'10px' }}>
            <Card.Img style={pictureStyles} src={url} />
            <Card.Body>
                <Button style={{ backgroundColor: 'coral' }} variant='light' size="sm" >
                    <Text text='Bookmark it!' />
                </Button>
                <Input styles={{ width: '16rem' }} placeholder='Input tag...' />
            </Card.Body>
        </Card>
    )
}

CardItem.propTypes = {
    url: PropTypes.string.isRequired
}