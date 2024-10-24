import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./AboutSection.module.css"
export const AboutSection =() => {
    return (
    <section className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={StyleSheet.content}>
            <img
            src = {getImageUrl("me2.png")}
            alt="Graduation picture"
            className={styles.gradIMG}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItems}>
                    <img
                    src = {getImageUrl("hand.png")}
                    alt="Hand waving picture"
                    />
                    <div className={styles.aboutItemsText}>
                        <h3>About Me</h3>
                        <p>I'm a 19-year-old student who graduated from Freedom High School in Loudoun County, Virginia. 
                            I enjoy watching and playing sports, such as football, basketball, and golf. 
                            I also enjoy spending time with friends, family, and my dog.</p>
                    </div>
                </li>
                <li className={styles.aboutItems}>
                    <img
                    src = {getImageUrl("laptop.png")}
                    alt="laptop picture"
                    />
                    <div className={styles.aboutItemsText}>
                        <h3>Software Development</h3>
                        <p>I'm a software engineer skilled in Java, Python, JavaScript, and more. 
                            Currently, I'm interning at Perceptron Labs, while working on projetcs to improve my skills.</p>
                    </div>
                </li>
                <li className={styles.aboutItems}>
                    <img
                    src = {getImageUrl("brain.png")}
                    alt="brain picture"
                    />
                    <div className={styles.aboutItemsText}>
                        <h3>Problem Solver</h3>
                        <p> I'm a problem solver who thrives on tackling challenges and finding efficient solutions to complex problems. 
                            Always eager to learn and grow with each new opportunity. </p>
                    </div>
                </li>
            </ul>

            
        </div> 
    </section>);
};