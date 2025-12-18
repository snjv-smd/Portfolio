import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Palette, Rocket } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  const skills = [
    {
      icon: GraduationCap,
      title: "Education",
      description: (
        <>
        Saint Louis University
        <br />
        2023-present
        <br />
        <br />
          Even though I haven't graduated yet, I've already completed several key subjects in Computer Science that helped me build a strong foundation in programming and problem-solving. These include Introduction to Computing, Computer Programming 1 & 2, Discrete Structures, Digital Logic Design, Data Structures, Operating Systems, Software Modeling and Analysis, Architecture and Organization, and Human-Computer Interaction.
          <br />
          <br />
          Through these courses, I've gained hands-on experience in coding, algorithm design, and understanding how computer systems work.
        </>
      ),
    },
    {
      icon: Palette,
      title: "Experience",
      description: (
        <>
          During my On-the-Job Training at the Smart City Command and Control Center in Baguio City from January 2024 to June 2024, I worked as an IT Assistant. I helped troubleshoot technical issues in the command center’s hardware systems, including router configuration. I was also responsible for documenting CCTV activities and collaborated with senior IT staff to ensure data privacy and system security.
        </>
      ),
    },
    {
      icon: Rocket,
      title: "Goal",
      description: (
        <>
          A student in Baguio City, where I’m building my skills in software development and technology. I love exploring new tools, solving problems through code, and learning from every experience. My mission is to keep improving and use what I learn to create something useful and impactful.
        </>
      ),
    },
  ];

  return (
    <section ref={ref} className="min-h-screen py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-black to-black" />

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-6 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="mb-6 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 max-w-3xl">
            I’m Sanjeev Bensal, a 2nd-year Computer Science student passionate about AI engineering and 
            software development. I work with Java and Python for programming, problem-solving, and algorithm 
            implementation. I also have experience in web development using HTML and CSS, and I’m proficient 
            in using AI-powered tools for productivity and creative tasks. My skills include data labeling, 
            classification, relevance evaluation,summarization, and prompt creation, along with a strong 
            understanding of operating systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-950/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mb-6 rounded-xl bg-purple-600/20 flex items-center justify-center"
                >
                  <skill.icon className="w-8 h-8 text-purple-400" />
                </motion.div>
                <h3 className="mb-4 text-white">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
