import React from "react";
import { Link } from "react-router-dom";

const Dogs = () => {
    return (
        <>
        <h1>Choose a Dog</h1>
        <h3><Link to="/dogs/whiskey">
        Whiskey
      </Link></h3>
      <h3><Link to="/dogs/duke">
        Duke
      </Link></h3>
      <h3><Link to="/dogs/perry">
        Perry
      </Link></h3>
      </>
    )
}

export default Dogs