import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    const { id, name, type, price, img } = props;
    return (
        <div className={classes.Card} onClick={() => props.showDetails(id)}>
            <div>
                <img src={img} alt={name} />
            </div> {/*img*/}
            <div className={classes.meta}>
                <div className={classes.name}>{name}</div> {/* Name */}
                <div className={classes.type}>{type}</div> {/* type */}
                <div className={classes.price}>₹ {price}</div> {/* Price */}
            </div>
        </div>
    )
}

export default Card;