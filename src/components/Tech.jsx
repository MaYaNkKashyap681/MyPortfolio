import React from "react";
import { BallCanvas } from "./canvas/index";
import { SectionWrapper } from "../hoc/index";
import { technologies } from "../constants";
import {styles} from '../style';
import { textVariant } from "../utils/motion";
import {motion} from 'framer-motion'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
