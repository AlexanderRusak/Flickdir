import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from "react-bootstrap"
import { Input } from "../UI/Input/Input"
import { Text } from "../UI/Text/Text"
import { noop } from '../shared/noop';
import { getImagesFromLS, updateImagesFromLS, setImageItemToLS } from '../../localStorage/helpers';
import { getCurrentItem, removeCurrentItem } from './helpers';
import { pictureStyles } from "../PictureBox/PictureSyles";

export const CardItem = ({ url, imageItem, type, userTag, onDelete }) => {

    const [images, setImages] = useState(getImagesFromLS())
    const [isDisabled, setIsDisabled] = useState(images ? getCurrentItem(images, url) : false);
    const [tag, setTag] = useState('');

    const onClickHandler = () => {
        setImageItemToLS(imageItem);
        setDisabledButton();
    }

    const onChangeHandler = (event) => {
        setTag(event.target.value);
        imageItem.userTag = event.target.value
    }

    const onClickRemoveItemHandler = () => {
        const newItems = updateImagesFromLS(url);
        onDelete(newItems);
    }

    const setDisabledButton = () => {
        setIsDisabled(!isDisabled);
        const newImages = removeCurrentItem(images, url);
        setImages(newImages);
    }

    return (
        <Card style={{ width: '28rem', height: '28rem', margin: '10px' }}>
            <Card.Header style={{ backgroundColor: '#fff', fontSize: '1rem' }} >{userTag}</Card.Header>
            <Card.Img style={pictureStyles} src={url} />
            <Card.Body>
                <Button disabled={isDisabled && !type} onClick={!type ? onClickHandler : onClickRemoveItemHandler} style={{ backgroundColor: 'coral' }} variant='light' size="sm" >
                    <Text text={type ? 'Remove It' : 'Bookmark it!'} />
                </Button>
                {!isDisabled && !type ? <Input onChange={onChangeHandler} value={tag} styles={{ width: '16rem' }} placeholder='Input tag...' /> : null}
            </Card.Body>
        </Card>
    )
}

CardItem.propTypes = {
    url: PropTypes.string.isRequired,
    imageId: PropTypes.string,
    type: PropTypes.string,
    onDelete: PropTypes.func,
    userTag: PropTypes.string
}

CardItem.defaultProps = {
    url: '',
    type: '',
    imageId: '',
    onDelete: noop,
    userTag: ''
}