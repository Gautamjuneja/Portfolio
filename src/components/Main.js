import React from "react";
import './styles/Main.css';
// import { AiFillInstagram,AiOutlineLinkedin,AiFillTwitterCircle } from "react-icons/ai";
import img from "./GautamImg.jpg";
import { Icon } from '@iconify/react';
import { TbBrandX } from "react-icons/tb";
const Main = () => {
    return (
        <div className="main" id = "Main">
            <div className="main_container">
                <div className="main_content">
                    <div className="text">
                        <p>Hello Everyone,</p>
                        <h1>I am Gautam Juneja</h1>
                        <p>web developer</p>
                        <br />
                        <div className="icons">
                            <a href="https://www.linkedin.com/in/gautam-juneja-421008211/" target="_blank" className="icon-link">
                                <Icon icon="line-md:linkedin" / >
                            </a>
                            
                            <a href="https://www.instagram.com/juneja.goutam/" target="_blank" className="icon-link">
                                <Icon icon="akar-icons:instagram-fill" />
                            </a>
                            <a href="https://leetcode.com/gau5tam/" target="_blank" className="icon-link">
                                <Icon icon="cib:leetcode" />
                            </a>
                            <a href="https://twitter.com/GautamJuneja17" target="_blank" className="icon-link">
                            <TbBrandX />
                                {/* <Icon icon="devicon:twitter" /> */}
                            </a>

                        </div>

                    </div>
                </div>
            </div>
            <div className="main_img">
                <img src={img} alt="" />
                
            </div>
        </div>
    );
}

export default Main;