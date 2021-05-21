import PropTypes from 'prop-types';

export const Icon = ({ iconElement: IconElement, size, styles}) =>
    <IconElement style={styles} size={size} />

Icon.propTypes = {
    iconElement: PropTypes.elementType.isRequired, 
    size: PropTypes.number
}

Icon.defaultProps = {
    size: 25,
    styles: { color: 'coral' },

}