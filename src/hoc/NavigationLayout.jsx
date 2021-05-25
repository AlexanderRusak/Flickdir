import { Component } from 'react'
import { connect } from 'react-redux'
import MenuToggle from '../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../components/Navigation/Drawer/Drawer';
import classes from './NavigationLayout.module.css'

class NavigationLayout extends Component {

    state = {
        menu: false,
        isLogin: false
    }

    componentDidMount() {
        this.setState({
            isLogin: !!localStorage.getItem('idToken')
        })
    }

    toggleMenuHandler = () => {
        const { menu } = this.state;
        this.setState({
            menu: !menu
        })
    }
    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        const { menu } = this.state;
        const { children } = this.props;

        return (
            <div className={classes.Layout}>
                {this.props.token && <Drawer
                    isOpen={menu}
                    onClose={this.menuCloseHandler}
                    isLogin={this.props.token}
                    userName={this.props.email}
                />}
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={menu}
                    hide={this.props.token}
                />

                <main>
                    {children}
                </main>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        token: !!state.auth.token,
        email: state.auth.email,
    }
}


export default connect(mapStateToProps, null)(NavigationLayout)