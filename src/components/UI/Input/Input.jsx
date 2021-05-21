import PropTypes from 'prop-types';
import { Form } from "react-bootstrap"
import classes from "./Input.module.css"


export const Input = ({ placeholder, styles, type }) => {

    return (
        <Form className={classes.Input}>
            <Form.Group>
                <Form.Control style={styles} type={type} placeholder={placeholder} />
            </Form.Group>
        </Form>
    )
}

Input.propTypes = {
    styles: PropTypes.instanceOf(Object),
    placeholder: PropTypes.string,
    type: PropTypes.string,
}

Input.defaultProps = {
    styles: null,
    placeholder: 'Input here... ',
    type: 'text'
}