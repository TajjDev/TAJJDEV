import React from "react";
import "./Project.css"
import Pro from "./Projects";
import Projec from "/src/assets/project.svg"
import Fourcard from "/src/assets/Four-card-features.svg"
import OnlineStopwatch from "/src/assets/Online-Stopwatch.svg"
import SummaryResult from "/src/assets/Sumarry-result.svg"

export default function Project(){
    return(
        <>
        <div id="Project">        
            <p id="pr"><img src={Projec} alt="" />Project</p>
            <div id="containP">
                <Pro src={Fourcard} text="Made a responsive online Stopwatch using HTML 5, CSS and Javascript." href="https://four-card-feature-bzou.vercel.app/" >
                </Pro>
                <Pro src={OnlineStopwatch }text="Made a responsive online Stopwatch using HTML 5, CSS and Javascript." href="https://stopwatch-five-mu.vercel.app/" >
                </Pro>
                <Pro src={SummaryResult} text="Made a responsive result summary template page using HTML 5 and CSS." href="https://result-summary-umber.vercel.app/" >
                </Pro>
              
            </div>
        </div>
        </>
    )
}

