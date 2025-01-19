import React from "react";
import './Leftpanel.css';
import photo from './photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome//free-solid-svg-icons'
import {useState, useEffect } from 'react';

library.add(fas)

function Leftpanel(props) 
{
    const [mystyle, setstyle] = useState({
        color: 'white',
        backgroundColor: '#0e4971'
    });

    useEffect(() => {
        if (props.style.color === 'white') {
            setstyle({
                color: 'white',
                backgroundColor: '#0e4971'
            });
        } else {
            setstyle({
                color: 'white',
                backgroundColor: 'black'
            });
        }
    }, [props.style.color]);

    return (
        <div className ="main-container-lp" style={mystyle} >
            <div className="container">
          
                <div className="image-section p-3 col-lg-12 col-sm-12">
                    <img src={photo} className="rounded" alt="image" />
                </div>

                <div className="main-address-section d-flex justify-content-center">
                    <div className="label-section d-flex">
                        <span><FontAwesomeIcon icon="fa-solid fa-phone" /></span>
                    </div>

                    <div className="details-section d-flex">
                        <span>+91 8867189700 </span>
                    </div>

                </div>

                <div className="main-address-section d-flex justify-content-center">
                    <div className="label-section d-flex">
                        <span><FontAwesomeIcon icon="fa-solid fa-envelope" /> </span>
                    </div>

                    <div className="details-section d-flex">
                        <span>nareshvanagundi@gmail.com </span>
                    </div>

                </div>

                <div className="main-address-section d-flex justify-content-center">
                    <div className="label-section d-flex">
                        <span><FontAwesomeIcon icon="fa-solid fa-map-location" /> </span>
                    </div>

                    <div className="details-section d-flex">
                        <span> Near HLC kenal side toranagallu rs, toranagallu 583123 </span>
                    </div>
                    
                </div>

                <div className="main-address-section d-flex justify-content-center">
                    <div className="label-section d-flex">
                        <span><FontAwesomeIcon icon="fa-solid fa-code-compare" /> </span>
                    </div>

                    <div className="details-section d-flex">
                        <span> https://github.com/Nareshvanagundi </span>
                    </div>
                    
                </div>
                <div className="skill-section">
                        <div className="skill-heading mt-4">
                            <h4>SKILL HIGHLIGHTS</h4>
                        </div>

                        <div className="skill-name mt-4">
                            <ul className="skill-list">
                                 <li className="skill-list-name">
                                    MS Office Basic
                                </li>
                                <li className="skill-list-name">
                                    HTML and CSS
                                </li>
                                <li className="skill-list-name">
                                    JavaStript
                                </li>
                                <li className="skill-list-name">
                                   PHP
                                </li>
                                <li className="skill-list-name">
                                    Zoho Creator 
                                </li>
                                <li className="skill-list-name">
                                    Zoho Crm    
                                </li> 
                                <li className="skill-list-name">
                                    Zoho projects    
                                </li>
                                <li className="skill-list-name">
                                    Zoho Workdrive
                                </li>
                            </ul>
                        </div>
                </div>
                <div className="languages-section">
                    <div className="languages-heading mt-4">
                        <h4>LANGUAGES</h4>
                    </div>

                    <div className="languages-name mt-4">
                        <ul className="languages-list">
                            <li className="languages-list-name">
                                Kannada
                            </li>
                            <li className="languages-list-name">
                                Telugu
                            </li>
                            <li className="languages-list-name">
                                Hindi
                            </li>
                            <li className="languages-list-name">
                                English
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hobbies-section">
                    <div className="hobbies-heading mt-4">
                        <h4>HOBBIES</h4>
                    </div>

                    <div className="hobbies-name mt-4">
                        <ul className="hobbies-list">
                            <li className="hobbies-list-name">
                                Video Editing
                            </li>
                            <li className="hobbies-list-name">
                               Cricket
                            </li>
                            <li className="hobbies-list-name">
                               Traveling
                            </li>
                            <li className="hobbies-list-name">
                                Playing video games
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Leftpanel;