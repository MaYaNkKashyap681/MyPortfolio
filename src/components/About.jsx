import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full blue-yellow-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // Tilt Options
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]"
      >
        <ul >
          <li className="mb-1">
            {" "}
            1. I'm a tech enthusiast and a college student passionate about web and
            mobile development. My passion for tech has led me to specialize in
            <span className="font-bold text-white">MERN Stack web development, and I'm currently exploring Android app
            development using Flutter</span>.{" "}
          </li>
          <li className="mb-1">
            2. As a web developer, I have experience in front-end development,
            including <span className="font-bold text-white">HTML, CSS, JavaScript, React.Js, and Redux as well as
            back-end development using Node.js, Express.js, and MongoDB</span>. I'm
            also proficient in three.js, which I have used to create 3D
            animations, and I have experience using framer-motion and GSAP for
            creating engaging user interfaces and a lot more things I have
            tried.
          </li>
          <li className="mb-1">
            3. In addition to my web development skills, I'm a problem-solver at
            heart. <span className="font-bold text-white">I have 350+ questions on LeetCode, which I have used to
            develop my skills in algorithms and data structures</span>. I'm also
            experienced in C++, which I use to develop efficient and effective
            code.
          </li>
          <li className="mb-1">
            4. I enjoy collaborating with others. Learning new frameworks is one of
            my strengths and I'm always eager to adapt to new projects. I enjoy
            keeping up with the latest tech trends and attending coding meetups
            to connect with like-minded individuals.
          </li>
          <li className="mb-1">
          5. One of my most significant achievements was
        reaching the <span className="font-bold text-white">semi-finals</span> of the <span className="font-bold text-white">EYIC innovation challenge by IIT Bombay</span>.
        This opportunity gave me the chance to develop my skills in
        problem-solving and innovative thinking, and I'm proud of how far I've
        come.
          </li>
          <li className="mb-1">
          6. I have participated in various hackathons, which have given
        me the opportunity to work on exciting projects with other passionate
        developers. These experiences have developed my problem-solving and
        teamwork skills and helped me grow as a developer.
          </li>
        </ul>

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
