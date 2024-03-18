import React from "react";
import "./Skill.css"
import Skills from "/src/assets/skills.svg"
import Undraw_project from "/src/assets/undraw_project_completed_w0oq 1.svg"

export default function Skill(){
    return(
        <>
        <div id="skill">        
            <p id="sk">Skill</p>
            <div id="containS">
                <div id="skillImg">
                    <img src={Skills} alt="" />
                </div>
                <div id="SkiImage">
                <img src={Undraw_project} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}