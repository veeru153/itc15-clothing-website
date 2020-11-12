import React from 'react';
import classes from './Popup.module.css'

const Popup = (props) => {
    const { product } = props;

    return (
        <div className={classes.container}>
            <div className={classes.backdrop} onClick={() => {props.showDetails(false)}}>
                <button className={classes.close}>×</button>
            </div>
            <div className={classes.Popup}>
                <div>
                    <img src={product.img}></img>    
                </div> {/* img */}
                <div className={classes.meta}>
                    <div className={classes.name}>{product.name}</div>
                    <div className={classes.type}>{product.type}</div>
                    <div className={classes.price}>₹ {product.price}</div>
                    <button className={classes.buy} onClick={() => alert("This is dummy website for a project. No actual products were bought ;-;. You can buy this from Uniqlo.in.")}>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Popup;