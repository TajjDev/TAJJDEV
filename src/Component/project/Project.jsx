import React from "react";
import "./Project.css"

export default function Project(){
    return(
        <>
        <div id="Project">        
            <p id="pr"><img src="./src/assets/project.svg" alt="" />Project</p>
            <div id="containP">
                <div id="projectImg">
                    <div className="imgP">
                        <img src={"./src/assets/Four-card-features.svg"} alt="" />
                    </div>
                    <div className="txt">
                    <p> Made a responsive Four Card Features template using HTML 5 and CSS</p>
                    <a target="child" href="https://four-card-feature-bzou.vercel.app/">Learn More <img src="./src/assets/Arrow.svg" alt="" /></a>
                    </div>
                </div>
                <div id="ProImage">
                    <div className="imgP">
                    <img src={"./src/assets/Online-Stopwatch.svg"} alt="" />
                    </div>
                    <div className="txt">
                    <p> Made a responsive online Stopwatch using HTML 5, CSS and Javascript.</p>
                    <a target="child" href="https://stopwatch-five-mu.vercel.app/">Learn More <img src="./src/assets/Arrow.svg" alt="" /></a>
                    </div>
                </div>
                <div id="proImage">
                    <div className="imgP">
                    <img src={"./src/assets/Sumarry-result.svg"} alt="" />
                    </div>
                    <div className="txt">
                    <p>Made a responsive result summary template page using HTML 5 and CSS.</p>
                    <a target="child" href="https://result-summary-umber.vercel.app/">Learn More <img src="./src/assets/Arrow.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

