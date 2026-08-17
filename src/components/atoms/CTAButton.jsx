import React, {useState} from "react";
import './CTAButton.css'


export default function CTAButton({ ...props }) {
    return (
        <button className="CTAButton" onClick={() => props.activate_page(props.page, 'All')}>
            {props.name}
        </button>
    )
}