import React from "react";
import "./Project.css"
import Arrow from "/src/assets/Arrow.svg" 

export default function Pro({src,text,href}){
    return(
        <>
        <div id="projectImg">
            <div className="imgP">
                <img src={src}  alt="" />
            </div>
            <div className="txt">
                <p> {text}</p>
                <a target="top" href={href}>Learn More <img src={Arrow} alt="" /></a>
            </div>
        </div>
        </>
    )
}
