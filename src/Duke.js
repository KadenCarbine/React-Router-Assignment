import React from "react";
import { Link } from "react-router-dom";

const Duke = () => {
    return (
        <>
        <h1>Name: Duke</h1>
        <h2>Age: 3 Years Old</h2>
        <ul>Facts:
            <li>Duke believes that ball is life.</li>
            <li>Duke likes snow.</li>
            <li>Duke enjoys pawing other dogs.</li>
        </ul>
        <h3><Link to="/dogs">Go Back</Link></h3>
        </>
    )
}

export default Duke