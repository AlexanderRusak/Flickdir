import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from "react-bootstrap"
import { Input } from "../UI/Input/Input"
import { Text } from "../UI/Text/Text"
import { getImagesFromLS, updateImagesFromLS, setImageItemToLS } from '../../localStorage/helpers';
import { getCurrentItem, removeCurrentItem } from './helpers';
import { pictureStyles } from "../PictureBox/PictureSyles";



export const CardItem = ({ url, imageItem, type }) => {

    const [isDisabled, setIsDisabled] = useState(false);
    const [images, setImages] = useState(null)

    useEffect(() => {
        const images = getImagesFromLS();
        const result = images ? getCurrentItem(images, url) : false
        setIsDisabled(!!result);
        setImages(images);
        /* setIsDisabled(!!getCurrentItem(getImagesFromLS(), url)) */ /* it looks like magic code i dont't know which you prefer */

    }, [])

    const onClickHandler = () => {
        setImageItemToLS(imageItem);
        setDisabledButton();
    }

    const onClickRemoveItemHandler = () => {
        updateImagesFromLS(url);

    }

    const setDisabledButton = () => {
        setIsDisabled(!isDisabled);
        const newImages = removeCurrentItem(images, url);
        setImages(newImages);
    }

    return (

        <Card style={{ width: '28rem', height: '25rem', margin: '10px' }}>
            <Card.Img style={pictureStyles} src={url} />
            <Card.Body>
                <Button disabled={isDisabled && !type} onClick={!type ? onClickHandler : onClickRemoveItemHandler} style={{ backgroundColor: 'coral' }} variant='light' size="sm" >
                    <Text text={type ? 'Remove It' : 'Bookmark it!'} />
                </Button>
                {!isDisabled && !type ? <Input styles={{ width: '16rem' }} placeholder='Input tag...' /> : null}
            </Card.Body>
        </Card>
    )
}

CardItem.propTypes = {
    url: PropTypes.string.isRequired,
    imageId: PropTypes.string.isRequired,
}

CardItem.defaultProps = {
    type: '',
}