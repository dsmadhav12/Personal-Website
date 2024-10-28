import React from "react";

import styles from "./projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./projectCard";

export const Projects = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title} id="projects">Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};