import React, {useState} from "react";
import './CTAButton.css'


export default function CTAButton({ ...props }) {
    return (
        <button>
            {props.name}
        </button>
    )
}