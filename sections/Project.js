"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText, ProjectCard, TitleText } from "../components";
import styles from "../styles";
import { staggerContainer } from "../utils/motion.js";
import { exploreProjects } from "../constants";

const Project = () => {
  const [active, setActive] = useState("p-2");

  return (
    <section className={`${styles.paddings}`} id="project">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| project" textStyles="text-center" />
        <TitleText
          title={
            <>
              Click the Project you want
              <br className="md:block hidden" />
              to see
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreProjects.map((world, index) => (
            <ProjectCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
