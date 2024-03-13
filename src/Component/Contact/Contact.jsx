import React from "react";
import "./contact.css"

export default function Contact(){
    return(
        <>
        <div id="contact">        
            <p id="con">Contact Me</p>
            <div id="ContactM">
                <div id="conImg">
                    <img src={"./src/assets/contact.svg"} alt="" />
                </div>
                <div id="ContactInput">
                    <form id="inp">
                        <input type="email" required placeholder="Enter e-mail address*" id="email" />
                        <textarea required id="" cols="30" placeholder="Enter message*" rows="10"></textarea>
                        <button  type="submit">Send Message <img src={"./src/assets/message.svg"} alt="" /></button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}