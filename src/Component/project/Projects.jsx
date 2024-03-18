import React from "react";
import "./Project.css"

export default function Pro({src,text,href}){
    return(
        <>
        <div id="projectImg">
            <div className="imgP">
                <img src={src}  alt="" />
            </div>
            <div className="txt">
                <p> {text}</p>
                <a target="top" href={href}>Learn More <img src="./src/assets/Arrow.svg" alt="" /></a>
            </div>
        </div>
        </>
    )
}
