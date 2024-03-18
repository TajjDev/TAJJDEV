import React from "react";
import "./Project.css"
import Pro from "./Projects";

export default function Project(){
    return(
        <>
        <div id="Project">        
            <p id="pr"><img src="./src/assets/project.svg" alt="" />Project</p>
            <div id="containP">
                <Pro src="./src/assets/Four-card-features.svg" text="Made a responsive online Stopwatch using HTML 5, CSS and Javascript." href="https://four-card-feature-bzou.vercel.app/" >
                </Pro>
                <Pro src="./src/assets/Online-Stopwatch.svg" text="Made a responsive online Stopwatch using HTML 5, CSS and Javascript." href="https://stopwatch-five-mu.vercel.app/" >
                </Pro>
                <Pro src="./src/assets/Sumarry-result.svg" text="Made a responsive result summary template page using HTML 5 and CSS." href="https://result-summary-umber.vercel.app/" >
                </Pro>
              
            </div>
        </div>
        </>
    )
}

