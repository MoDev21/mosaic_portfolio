import {useState} from 'react'
import Navbar from '../organisme/Navbar'


export default function About({activate_page}) {
    return (
        <div>
            <Navbar activate_page={activate_page}/>
            <h1>About Us</h1>
            <p>Welcome to our about page!</p>
        </div>
    )
}
