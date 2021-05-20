import { Nav, Navbar } from "react-bootstrap"
import { BsCloudFill } from 'react-icons/bs'
import { GiWhiteBook } from 'react-icons/gi'
import classes from './Navbar.module.css';

export const NavBar = () => {

    return (
        <Navbar bg="light" className={classes.NavBar}>
            <Nav.Link><BsCloudFill size={25} /></Nav.Link>
            <Nav.Link><GiWhiteBook size={25} /></Nav.Link>
        </Navbar>
    )
}