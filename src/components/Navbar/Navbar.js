import React from 'react';
import classes from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={classes.Navbar}>
            <div>NotUNIQLO</div>
            <div className={classes.link} onClick={() => props.changeType('all')}>All</div>
            <div className={classes.link} onClick={() => props.changeType('mens')}>Men</div>
            <div className={classes.link} onClick={() => props.changeType('womens')}>Women</div>
            <div className={classes.link} onClick={() => props.changeType('kids')}>Kids</div>
            <div>2018UIT2501</div>
        </div>
    )
}

export default Navbar;