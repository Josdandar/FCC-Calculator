import React from "react";
import "../styles/Button.css";

const Button = (props) => {
    /*The ternary operator im using can be replaced with an if else */ 
    const isOperator = value => {
        return isNaN(value) && (value !== "=") && (value !== ".");
    };

    return(
        <button className={`button-container ${isOperator(props.children) ? 'operator' : ""}`.trimEnd()}
        onClick={() => props.handleClick(props.children)}>
        {props.children}
        </button>
    );
}

export default Button