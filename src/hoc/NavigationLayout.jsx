import React, { Component } from 'react'
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

    render() {
        const { menu, isLogin } = this.state;
        const { children } = this.props;
        console.log(isLogin);


        return (
            <div className={classes.Layout}>
                {isLogin && <Drawer
                    isOpen={menu}
                />}
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={menu}
                />

                <main>
                    {children}
                </main>
            </div>
        )
    }
}

export default NavigationLayout