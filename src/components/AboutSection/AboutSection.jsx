import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./AboutSection.module.css"
export const AboutSection =() => {
    return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img
                    src = {getImageUrl("hand.png")}
                    alt="Hand waving picture"
                    />
                    <div>
                        <h3>About Me</h3>
                        <p>I'm a 21-year-old student who graduated from the University of Virginia in May, 2026 with a degree in CS and a minor in Applied Math. This summer I am interning as a software engineer at the Bank of Montreal (BMO) Capital Markets. 
                            I enjoy watching and playing sports, such as football, basketball, and golf. 
                            I also enjoy spending time with friends, family, and my dog.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                    src = {getImageUrl("laptop.png")}
                    alt="laptop picture"
                    />
                    <div>
                        <h3>Software Development</h3>
                        <p>I'm a software engineer skilled in Python, C++, Java, JavaScript, and more. 
                            Currently, I'm interning working on various projects such as a poker solver to improve my skills.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                    src = {getImageUrl("brain.png")}
                    alt="brain picture"
                    />
                    <div>
                        <h3>Problem Solver</h3>
                        <p> I'm a problem solver who thrives on tackling challenges and finding efficient solutions to complex problems. 
                            Always eager to learn and grow with each new opportunity. </p>
                    </div>
                </li>
            </ul>

            
        </div> 
    </section>);
};