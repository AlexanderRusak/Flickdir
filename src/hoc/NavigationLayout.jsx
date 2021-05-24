import React, { Component } from 'react'
import MenuToggle from '../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../components/Navigation/Drawer/Drawer';
import classes from './NavigationLayout.module.css'

class NavigationLayout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <div className={classes.Layout}>
                <Drawer />
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default NavigationLayout