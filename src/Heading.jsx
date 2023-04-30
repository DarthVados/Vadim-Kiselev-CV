import React from "react";
import logo from "./images/Vadimpic.png";
import "./Heading.css";



function Heading() {

return (
    
    <div className="headingContainer">

        <div className="hLogo">
            <img className="logoImage"src={logo} alt="Vadim logo" />
        </div>

        <div className="hText">
            <h1 className="name">Vadim Kiselev</h1>
            <h3 className="title">Front End Developer</h3>
            <p className="address">Moscow, Russia</p>
            <p>8-917-560-77-08</p>
            <a href="mailto:vadim.kiselev01@gmail.com">vadim.kiselev01@gmail.com</a>
        </div>

    </div>
    
)

}

export default Heading;