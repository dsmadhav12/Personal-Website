import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./AboutMe.module.css";

export const AboutMe =() => {
    return (<section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm Madhav Donepudi</h1>
            <p className={styles.description}>
                I'm a 3rd year student at the University of Virginia pursuing a BS in Computer Science with a minor in Applied Math. 
                I enjoy listening to music, golfing, and spending time with people. Contact me to learn more!
            </p>
            <a href="mailto:dsmadhav@hotmail.com" className={styles.contactButton}>Contact Me</a>
        </div>
        <img src={getImageUrl("me.png")} alt="Image of myself" className={styles.meIMG} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>);
};