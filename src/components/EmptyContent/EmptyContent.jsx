import PropTypes from 'prop-types';
import { Text } from '../UI/Text/Text';


export const textStyles = {
    textAlign: 'left',
    marginLeft: '15px',
    fontSize: '1.2rem'
}

export const EmptyContent = ({ message }) => {
    return <Text styles={textStyles} text={message} />
}

EmptyContent.propTypes = {
    message: PropTypes.string,
}

EmptyContent.defaultProps = {
    message: 'There are no data',
}