import React from 'react';
import { FaUserCircle } from 'react-icons/fa'
import classes from "./Header.module.css"

export const Header = () => {

    return (
        <header className={classes.Header}>
            
            <h3>Image Finder</h3>
            <figure>
                <FaUserCircle size={30} />
                <figcaption></figcaption>
            </figure>
        </header>
    )

}