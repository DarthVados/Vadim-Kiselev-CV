import React from "react";
import "./Skills.css";

function Skills() {

    return (
        <div>
        
        <div className="skillsContainer">
        <div className="skills">    
            <h3 className="traits">Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
                <li>VERSION CONTROL</li>
            </ul>
            <hr />

            <h3 className="languages">Languages</h3>
            <ul>
                <li className="eng">English</li>
                <li className="rus">Russian</li>
            </ul>
            <hr />

            <h3 className="hobbies">Hobbies</h3>

            <ul>
                <li className="guitar">Playing Guitar</li>
                <li className="comp">Composing and recording music</li>
                <li className="vid">Videogames</li>
            </ul>

            </div>

        <div className="mainPage">


        <h2 className="summary">Summary</h2>
        <p className="info">I am a starting Front-End Developer seeking for an entry-level position in a Company to use and develop my skills in coding. In the foreseeable future I want to learn all the necessary skills to become a solid specialist in the field. I am open-minded, adaptive to various environments and can work both alone and in a team. I am well versed in computer hardware and software as it was interesting to me since childhood. </p>

     
        <h2 className="education">Education</h2>
            <ul>
                <li><strong>Angela Yu Frontend Course, Udemy 2023</strong></li>
                <li className="master">Master of Management, Russian Foreign Trade Academy 2012-2014</li>
                <li className="bachelor">Bachelor of Management, Russian Foreign Trade Academy 2008-2012</li>
                <li className="school">School №1241 specialised in English Language</li>
            </ul>

        <h2 className="employment">Employment History</h2>
            <p className="job">Senior Import Manager, BoConcept Russia 2017 - 2022</p> 
                <ul>
                    <li className="jobinfo">As a bonus to my usual work there I helped the whole office with solving computer bugs, mulfunctioning drivers, installations of software, PC setups, PC upgrades and overall pushed the company's hardware to the 21 century. Therefore I was an off-duty system administrator</li>
                </ul>   

        </div>



        </div>
        
        </div>
)




}

export default Skills