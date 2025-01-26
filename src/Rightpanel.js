import React from "react";
import './Rightpanel.css';
import {useState, useEffect } from 'react';


function Rightpanel(props) 
{
    const [mystyle, setstyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    
    useEffect(() => {
        if (props.style.color === 'white') {
            setstyle({
                color: 'black',
                backgroundColor: 'white'
            });
        } else {
            setstyle({
                color: 'white',
                backgroundColor: 'black'
            });
        }
    }, [props.style.color]);
    
    return(
        <div className="main-container-rp"  style={mystyle}>
            <div className="title-section">
              <h1 className="name-title p-2 fw-bold text-uppercase" style={mystyle}>Naresh V</h1>
              <h3 className="name-summary p-2 fw-bold text-uppercase" style={mystyle} >Summary</h3>
            </div>

            <div className="summary-section">
                <p className="lh-1 mx-auto p-2" > 
                    "Skilled PHP and JavaScript developer with 4 years of experience in designing, developing, and maintaining web applications. Proficient in front-end 
                    frameworks like React. Seeking to leverage my expertise client-side technologies to contribute to the growth of a forward-thinking company 
                    while continuing to advance my skills in full-stack development."
                </p>
            </div>

            <div className="experience-section" >
                <div className={`experience-title p-2 g-col-6 text-uppercase ${props.style.color === 'white' ? 'light-theme' : 'dark-theme'}`}  >
                  <span> Professional Experienece </span>
                </div>
            </div>

            <div className="experience-in">
                <div className="m-4">
                    <div className="d-flex">
                        <h6 className="experience"> Infomaze Elite Pvt LTD  </h6>
                        <h6 className="experience-year">2022-2025 -present</h6>
                    </div>
                    <h6 className="company-name">PHP developer | Zoho developer | Front-end developer</h6>
                </div>
                <div className="ms-4">Key responsibilities: </div>
                <ul className="content-text m-4">
                    <li>Various projects managing MySQL databases Writing and optimizing SQL queries, Creating, modifying, and maintaining database structures (via phpMyAdmin).</li>
                    <li>CRM Integration,API Integration,Data Mapping,Automation Connect and synchronize data between CRM systems (Zoho creator,Zoho Workdrive,zoho writer,zoho forms).</li>
                    <li>Managed various front-end projects (JS, React JS), Designed the UI (Ant Design, Bootstrap, Material-UI</li>
                </ul>
            </div>

            <div className="experience-section">
                <div className={`experience-title p-2 g-col-6 text-uppercase ${props.style.color === 'white' ? 'light-theme' : 'dark-theme'}`}>
                  <span> Projects </span>
                </div>
            </div>

            <div className="m-4">
                <div className="d-flex reposnsive-education-name-section">
                    <h6 className="education-name">Drapkings </h6>
                </div>

                <ul className="content-text m-1">
                 <li>Developed an online quotation system to streamline the process of requesting and generating quotes for draper services and products, improving customer experience and operational efficiency,I Contributed to developing and maintaining backed services to manage customer data and workflow. I collaborated with the team to integrated a backed system      for generating automated quotes based on customer dataa</li>
                 <li><b>Technologies:</b>HTML,CSS,Jquery and PhpMyAdmin</li>
                </ul>
            </div>  

            <div className="m-4">
                <div className="d-flex reposnsive-education-name-section">
                    <h6 className="education-name">IP Tech </h6>
                </div>

                <ul className="content-text m-1">
                    <li>Creating a quoting application using Zoho Creator that replicates the datacollection and quote creation process of in-Position Technologies' (IPT) existing home-grown application (IPT-APP). integrate Creator with Zoho CRM for data synchronizationand include the ability to generate payment links using Stripe for online payments.</li>
                    <li><b>Technologies:</b>Zoho Creator,Zoho CRM,Zoho Writier,Restapi,Stripe</li>
                </ul>
            </div>  

            <div className="m-4">
                <div className="d-flex reposnsive-education-name-section">
                    <h6 className="education-name">Quickzy </h6>
                </div>

                <ul className="content-text m-1">
                 <li>Stepify forms are implementing it with Zoho Creator Pages. After completing the form submission, the data will be pushed to Zoho CRM modules. The form is integrated with the Tafin Bank API, which updates balance and expense data in the CRM, associating it with the relevant record based on condition.</li>
                 <li><b>Technologies:</b>Zoho Creator,Zoho CRM,Restapi</li>
                </ul>
            </div>      

             <div className="m-4">
                <div className="d-flex reposnsive-education-name-section">
                    <h6 className="education-name">SameDay Solar </h6>
                </div>

                <ul className="content-text m-1">
                    <li>The role sales representative, Admin, and Site Technician - has specific tasks and responsibilities, ensuring that the workflow remains efficient and organized. The Sales Representative initiates the process by creating a new lead and requesting the site survey, while the Admin oversees the entire process, ensuring that the Site Technician is assigned and that al
                    necessary documentation is completed. The Site Technician performs the site survey and submits the necessary documents for approval, while the Admin reviews the documents and either approves or rejects the lead based on the completeness of the information provided.</li>
                    <li><b>Technologies:</b>HTML,CSS,Jquery,Zoho Creator and widget,Zoho Project and Restapi</li>
                </ul>
            </div>     

             {/* <div className="m-4">
                <div className="d-flex reposnsive-education-name-section">
                    <h6 className="education-name">React</h6>
                </div>

                <ul className="content-text m-4">
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam totam porro neque saepe laborum alias molestias animi ut tenetur provident delectus ducimus, beatae expedita necessitatibus. Quos eligendi quis rem similique!</li>
                </ul>
            </div>      */}
            
            <div className="experience-section">
                <div className={`experience-title p-2 g-col-6 text-uppercase ${props.style.color === 'white' ? 'light-theme' : 'dark-theme'}`}>
                  <span> Education </span>
                </div>
            </div>

            <div className="m-4">
                <div className="d-flex reposnsive-education-name-section">
                    <h6 className="education-name">Bachelor of Engineering: Electrical and Electronics Engineering  </h6>
                    <h6 className="passout-year">2018</h6>
                </div>
                <h6 className="collage-name">PA Collaage of Engineering, Mangalore</h6>
            </div>

            <div className="m-4">
                <div className="d-flex reposnsive-education-name-section">
                    <h6 className="education-name">Diploma: Electrical and Electronics Engineering  </h6>
                    <h6 className="passout-year">2014</h6>
                </div>
                <h6 className="collage-name">Sanjay Gandhi Polytechnic, Ballari</h6>
            </div>

            <div className="m-4">
                <div className="d-flex reposnsive-education-name-section">
                    <h6 className="education-name">SSLC</h6>
                    <h6 className="passout-year">2011</h6>
                </div>
                <h6 className="collage-name">St. Joseph's Boys' High School, Ballari</h6>
            </div>
        </div>
    )
}

export default Rightpanel;