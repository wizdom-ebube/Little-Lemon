import React from "react";
import logo2 from "../images/Logo .svg"

export default function Footer() {
    return (
        <footer>

            <img src={logo2} alt="logo" />

            <div>
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Reservations</a></li>
                    <li><a href="">Order Online</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>

            <div>
                <h4>Contact</h4>

            </div>

            <div>
                <h4>Social Media Links</h4>
            </div>
        </footer>
    )
}