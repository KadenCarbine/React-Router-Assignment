import React from "react";
import { Link } from "react-router-dom";

const Perry = () => {
    return (
        <>
        <h1>Name: Perry</h1>
        <h2>Age: 4 Years Old</h2>
        <ul>Facts:
            <li>Perry loves all humans.</li>
            <li>Perry demolishes all snacks.</li>
            <li>Perry hates the rain.</li>
        </ul>
        <h3><Link to="/dogs">Go Back</Link></h3>
        </>
    )
}

export default Perry