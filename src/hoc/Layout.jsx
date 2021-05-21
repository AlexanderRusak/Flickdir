import PropTypes from 'prop-types';

export const Layout = ({ children, styles }) => (
    <div className={styles}>{children}</div>
)


Layout.propTypes = {
    children: PropTypes.elementType.isRequired,
}

Layout.propTypes = {

}