import React from "react";
import { getImageUrl } from "../../../utils";

export const AboutMe =() => {
    return <section>
        <div>
            <h1>Hi, I'm Madhav Donepudi</h1>
            <p>
                I'm a 2nd year student at the University of Virginia pursuing a BS in Computer Science. 
                I enjoy listening to music, golfing, and spending time with people. Contact me to learn more!
            </p>
            <a href="mailto:dsmadhav@hotmail.com">Contact Me</a>
        </div>
        <img src={getImageUrl("me.png")} alt="Image of myself" />
    </section>;
}