import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Tech from "./Tech";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        Hey I am Neha Anandpara, a Frontend Wizard with a passion for crafting beautiful
        and intuitive web applications that leave users spellbound.
        With more than four years of experience under my belt,
        I have honed my skills in developing responsive and 
        dynamic interfaces that deliver exceptional customer experiences.
        <br />
        My commitment to creating user-friendly designs and 
        intuitive interfaces has earned me a reputation for 
        delivering outstanding results. I take great pride 
        in my ability to develop engaging products that captivate 
        and inspire users.
        <br />
        When I'm not weaving my magic on the web, I also moonlight as a
        yoga instructor, guiding others towards physical and mental well-being.
        I also like travelling and learn new things in real world and in technologies. 
      </motion.p>
      <Tech />
    </>
  );
};

export default SectionWrapper(About, "about");
