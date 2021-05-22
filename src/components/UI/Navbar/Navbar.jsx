import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap"
import { BsCloudFill } from 'react-icons/bs'
import { GiWhiteBook } from 'react-icons/gi'
import { Icon } from "../Icon/Icon";
import classes from './Navbar.module.css';

export const NavBar = () => {

    const activeStyle = {
        border: '1px solid coral',
        borderRadius:'3px'
    }

    return (
        <Navbar bg="light" className={classes.NavBar}>
            <NavLink activeStyle={{ ...activeStyle }} to='/search'><Icon iconElement={BsCloudFill} /></NavLink>
            <NavLink activeStyle={{ ...activeStyle }} to='/bookmarks'><Icon iconElement={GiWhiteBook} /></NavLink>
        </Navbar>
    )
}