import React, {useState} from "react";
import './CTAButton.css'


export default function CTAButton({ ...props }) {
    return (
        <button className="CTAButton">
            {props.name}
        </button>
    )
}