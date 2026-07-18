import {useState} from 'react'
import Navbar from '../organisme/Navbar'


export default function Portfolio({activate_page}) {
    return (
        <div>
            <Navbar activate_page={activate_page} active_page_name="Portfolio"/>
            <h1>Portfolio</h1>
            <p>Welcome to our portfolio page!</p>
        </div>
    )
}
