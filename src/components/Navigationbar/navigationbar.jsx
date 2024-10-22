import styles from "./Navigationbar.module.css";
import React, {useState} from "react";
import {getImageUrl} from "../../utils";
export const Navigationbar =() => {
    return ( 
    <nav className={styles.navigationbar}>
        <a className={styles.title} href="/">Home</a>
        <div className={styles.menu}>
            <img className={styles.menuButton} src={getImageUrl("")}/>
        <ul className={styles.menuItems}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#golf">Golf</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
    </nav>
    );
};