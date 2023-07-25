import React from "react";
import './Button.css'

function button(props) {
    return <button className="button">{props.name}</button>
}

export default button