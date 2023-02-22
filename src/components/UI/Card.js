import React from "react";

import styles from './Card.module.css'

const Card = props => {
 return (
    <div style={`${styles.card} ${props.style}`}>{props.children}</div>
 )  
}

export default Card