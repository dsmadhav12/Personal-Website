import React from "react";

import styles from "./golf.module.css"; 
import { getImageUrl } from "../../utils";
export const Golf =() => {
    return (
        <section className={styles.container}>
        <h2 className={styles.title} id="golf">Golf</h2>
        <div className={styles.content}>
            <ul className={styles.golfItems}>
                <img
                src = {getImageUrl("golfer.png")}
                alt="Hand waving picture"
                />
                <div className={styles.golfItemsText}>
                    <h3>Current Handicap</h3>
                    <p>1.8</p>
                    <h4>
                        Most Recent Round
                    </h4>
                    <p2>
                        76 at 1757 Golf Club from the Blacks
                    </p2>
                    <div className={styles.link}>
                        <a href={"https://www.1757golfclub.com"} className={styles.link}>
                        Course Info
                        </a>
                    </div>
                </div>
            </ul>

            
        </div> 


        </section>
    );

};