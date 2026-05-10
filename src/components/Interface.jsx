// import { useScroll } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useState } from "react";

// export const Interface = () => {
//   const [hasScrolled, setHasScrolled] = useState(false);

//   const scrollData=useScroll();

//   useFrame(()=>{
//     setHasScrolled(scrollData.offset>0)
//   })


//   return (
//     <div className="interface">
//       <div className="sections">
//         {/* HOME */}
//         <section className="section section--bottom">
//            <MotionConfig.div
//             className="scroll-down"
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: hasScrolled ? 0 : 1,
//             }}
//           >
//             <motion.div
//               className="scroll-down__wheel"
//               initial={{
//                 translateY: 0,
//               }}
//               animate={{
//                 translateY: 4,
//               }}
//               transition={{
//                 duration: 0.4,
//                 repeatDelay: 0.5,
//                 repeatType: "reverse",
//                 repeat: Infinity,
//               }}
//             ></motion.div>
//           </motion.div>
//         </section>

//         {/* SKILLS */}
//         <section className="section section--right">SKILLS</section>

//         {/* PROJECTS */}
//         <section className="section section--left">PROJECTS</section>

//         {/* CONTACT */}
//         <section className="section section--left">CONTACT</section>
//       </div>
//     </div>
//   );
// };

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { motion } from "framer-motion"; // ১. ইম্পোর্ট যোগ করা হয়েছে
import { config } from "../config";

export const Interface = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollData = useScroll();

  useFrame(() => {
    // ২. পারফরম্যান্স অপ্টিমাইজেশন: শুধুমাত্র স্টেট চেঞ্জ হলেই আপডেট হবে
    const scrolled = scrollData.offset > 0;
    if (scrolled !== hasScrolled) {
      setHasScrolled(scrolled);
    }
  });

  return (
    <div className="interface">
      <div className="sections">
        {/* HOME */}
        <section className="section section--bottom">
          {/* ৩. MotionConfig.div পরিবর্তন করে motion.div করা হয়েছে */}
          <motion.div
            className="scroll-down"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: hasScrolled ? 0 : 1,
            }}
          >
            <motion.div
              className="scroll-down__wheel"
              initial={{
                translateY: 0,
              }}
              animate={{
                translateY: 4,
              }}
              transition={{
                duration: 0.4,
                repeatDelay: 0.5,
                repeatType: "reverse",
                repeat: Infinity,
              }}
            ></motion.div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section className="section section--right">
          <motion.div
            className="skills"
            whileInView={"visible"}
            initial={{
              opacity: 0,
            }}
            variants={{
              visible: {
                opacity: 1,
              },
            }}
            // transition={{
            //   duration: 1,
            //   delay: idx * 0.62,

            // }}
          >
            {config.skills.map((skill, idx) => (
              <motion.div key={skill.name}
                    className="skill"
                    initial={{ opacity: 0 }}
                    variants={{
                      visible: {
                        opacity: 1,
                      },
                    }}
                    transition={{
                      duration: 1,
                      delay: idx * 0.2,
                    }}
              >
                <div className="skill__label">
                  <img
                    className="skill__label__image"
                    src={skill.icon}
                    alt={skill.name}
                  />
                  <h2 className="skill__label__name">{skill.name}</h2>
                </div> 
                <div className="skill__level">
                  <motion.div
                    className="skill__level__bar"
                    initial={{ width: 0 }}
                    variants={{
                      visible: {
                        width: `${skill.level}%`,
                      },
                    }}
                    transition={{
                      duration: 1,
                      delay: 1 + idx * 0.2,
                    }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section className="section section--left">PROJECTS</section>

        {/* CONTACT */}
        <section className="section section--left">CONTACT</section>
      </div>
    </div>
  );
};