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
                    <div id="inp">
                        <input type="email" name="" required placeholder="Enter e-mail address" id="email" />
                        <textarea name="message" required id="" cols="30" placeholder="Enter message..." rows="10"></textarea>
                        <button>Send Message <img src="message.svg" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}