import React from "react";
import { Link } from "react-router-dom";

const Whiskey = () => {
    return (
        <>
        <h1>Name: Whiskey</h1>
        <h2>Age: 5 Years Old</h2>
        <ul>Facts:
            <li>Whiskey loves eating popcorn.</li>
            <li>Whiskey is a terrible guard dog.</li>
            <li>Whiskey wants to cuddle with you!</li>
        </ul>
        <h3><Link to="/dogs">Go Back</Link></h3>
        </>
    )
}

export default Whiskey