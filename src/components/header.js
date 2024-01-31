import React from "react";
import './styles/header.css';
// import { NavLink,Routes,Route, BrowserRouter} from "react-router-dom";
import logo from "./GJ-logos_white.png";
// import Section from "./Section";
// import Contact from "./contact";
// import Main from "./Main";

const Header = () => {
    return(
        <div className="header">
            <div className="head_logo">
                <img src={logo} alt="" height="85px" width="130px"/>
            </div>
            <nav>
                <ul>
                    <div className="closed">
                        <close className = "close" />
                    </div>
                    <li>
                        
                        <a href="#Main">About</a>
                    </li>
                    <li>
                       
                        <a href="#pro">Projects</a>
                    </li>
                    <li>
                       
                        <a href="#con">Contact</a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/16EQDpIORf0XL0WFDoY9Jow-p9AWMISIu/view?usp=sharing" target="_blank">Resume</a>
                    </li>

                </ul>
            </nav>

            
        </div>
    );
}

export default Header;