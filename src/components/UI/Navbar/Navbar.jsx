import { Nav, Navbar } from "react-bootstrap"
import { BsCloudFill } from 'react-icons/bs'
import { GiWhiteBook } from 'react-icons/gi'
import { Icon } from "../Icon/Icon";
import classes from './Navbar.module.css';

export const NavBar = () => {

    return (
        <Navbar bg="light" className={classes.NavBar}>
            <Nav.Link><Icon iconElement={BsCloudFill} /></Nav.Link>
            <Nav.Link> <Icon iconElement={GiWhiteBook} /></Nav.Link>
        </Navbar>
    )
}