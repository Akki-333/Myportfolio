import React from "react";

import styles from "./profile.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akshay</h1>
        <p className={styles.description}>
          I'm a full-stack developer currently pursuing as a student in Bannari amman Institute of technology....        </p>
        <a href="akshay.cs21@bitsathy.ac.in" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("Profile/profile.png")}
        alt="Hero image of me"
        className={styles.profileImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
