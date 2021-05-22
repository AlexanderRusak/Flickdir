import PropTypes from 'prop-types';
import {noop} from '../../shared/noop';
import { Form } from "react-bootstrap"
import classes from "./Input.module.css"


export const Input = ({ placeholder, styles, type, onChange, value }) => {

    const onChangeHandler = (event) => {
        onChange(event);
    }

    return (
        <Form className={classes.Input}>
            <Form.Group>
                <Form.Control value={value} onChange={onChangeHandler} style={styles} type={type} placeholder={placeholder} />
            </Form.Group>
        </Form>
    )
}

Input.propTypes = {
    styles: PropTypes.instanceOf(Object),
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
}

Input.defaultProps = {
    styles: null,
    placeholder: 'Input here... ',
    type: 'text',
    onChange: noop,
    value: '',
}