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
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        <p>
          I am a frontend wizard with a passion for crafting beautiful
          and intuitive web applications that leave users spellbound.
          With 5+ years of work experience under my belt,
          I have honed my skills in developing responsive and 
          dynamic interfaces that deliver delightful customer experiences.
          My commitment to creating user-friendly designs and 
          intuitive interfaces has earned me a reputation for 
          delivering outstanding results. I take great pride 
          in my ability to develop engaging products that captivate 
          and inspire users.
        </p>
        <p className="mt-2">
          When I'm not weaving my magic on the web, I also moonlight as a
          yoga instructor, guiding others towards physical and mental well-being.
          I also like travelling and learn new things in real world and in technologies. 
        </p>
      </motion.p>
      <Tech />
    </>
  );
};

export default SectionWrapper(About, "about");
