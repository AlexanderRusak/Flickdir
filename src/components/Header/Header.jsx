import React from 'react';
import { FaUserCircle } from 'react-icons/fa'
import { Icon } from '../UI/Icon/Icon';
import classes from "./Header.module.css"

export const Header = () => {

    return (
        <header className={classes.Header}>
            
            <h3>Image Finder</h3>
            <figure>
                <Icon iconElement={FaUserCircle} styles={{color:'black'}}/>     
                <figcaption></figcaption>
            </figure>
        </header>
    )

}