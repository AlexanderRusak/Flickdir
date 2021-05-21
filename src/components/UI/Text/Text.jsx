import PropTypes from 'prop-types';
import classes from './Text.module.css';

export const Text = ({ text, styles }) => <p style={styles} className={classes.Text}>{text}</p>


Text.propTypes = {
    text: PropTypes.string.isRequired,
    styles: PropTypes.instanceOf(Object)
}

Text.defaultProps = {
    styles: null
}