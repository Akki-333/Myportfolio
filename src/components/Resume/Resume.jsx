import React from "react";

import styles from "./Resume.module.css";

import projects from "../../data/Resume.json";
import { ResumeCard } from "./ResumeCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="resume">
      <h2 className={styles.title}>Resume</h2>
      <div className={styles.resume}>
        {projects.map((project, id) => {
          return <ResumeCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
