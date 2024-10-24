import styles from "./Navigationbar.module.css";
import React, {useState, useEffect} from "react";
import {getImageUrl} from "../../utils";
export const Navigationbar =() => {
    const [fullScreen, setFullScreen] = useState(window.innerWidth > 930);
    const[menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 930) {
                setMenuOpen(false); 
            }
            setFullScreen(window.innerWidth > 930);
        };

        window.addEventListener("resize", handleResize); 

        return () => {
            window.removeEventListener("resize", handleResize); 
        };
    }, []);
    return ( 
    <nav className={styles.navigationbar}>
        <a className={styles.title} href="/">Home</a>
        <div className={styles.menu}>
            {!fullScreen && (
            <img className={styles.menuButton} src={
                menuOpen
                    ? getImageUrl("xIcon.png")
                    : getImageUrl("menuIcon.png")} 
                alt="menu-button"
                onClick={()=> setMenuOpen(!menuOpen)}/>
            )}
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={()=> setMenuOpen(false)}>
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