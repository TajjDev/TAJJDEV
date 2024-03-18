import React from "react";
import "./contact.css"
import Cont from "/src/assets/contact.svg"
import Message from "/src/assets/message.svg"

export default function Contact(){
    return(
        <>
        <div id="contact">        
            <p id="con">Contact Me</p>
            <div id="ContactM">
                <div id="conImg">
                    <img src={Cont} alt="" />
                </div>
                <div id="ContactInput">
                    <form id="inp">
                        <input type="email" required placeholder="Enter e-mail address*" id="email" />
                        <textarea required id="" cols="30" placeholder="Enter message*" rows="10"></textarea>
                        <button  type="submit">Send Message <img src={Message} alt="" /></button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}