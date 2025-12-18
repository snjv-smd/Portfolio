import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const projects = [
    {
      title: "Backpack Slouch Detection", 
      description: "Backpack Slouch Detection is an IoT-enabled health intervention system that prevents Musculoskeletal Disorders by utilizing real-time sensor fusion to detect unsafe slouching angles and backpack loads exceeding 15% of the user's body weight . We engineered a full-stack solution bridging Arduino hardware with a native Android app, employing complex algorithms to trigger immediate haptic feedback and track daily streaks that reset if cumulative slouching exceeds 10 minutes. The system leverages Google Firebase for historical analytics and dynamic, context-aware health tips, ensuring long-term habit formation through data-driven coaching. Validated with 20 users, the prototype achieved a System Usability Score of 89.65, confirming its technical reliability and effectiveness in improving spinal posture.",
      image: "src/components/Images/backpack.jpg",
      tags: ["Kotlin", "Arduino"],
      githubUrl: "https://github.com/snjv-smd/BackpackSlouchDetection"
    },
    {
      title: "Deepfake Video Detector",
      description: "This project is a Deepfake Detection System built using Python. It allows users to upload a video through a simple GUI and automatically analyzes it for signs of manipulation using AI-powered facial recognition. The system helps identify whether a video is real or deepfake based on facial inconsistencies detected by the model.",
      image: "src/components/Images/deepfake.webp",
      tags: ["Python"],
      githubUrl: "https://github.com/snjv-smd/DeepFakeDetector"
    },
    {
      title: "AI-Based Chess Game",
      description: "This project is an AI-based chess game built using Python and Pygame, where the player competes against a computer opponent. It features an interactive chessboard that allows users to move pieces while the AI calculates its best move using the minimax algorithm. The game combines strategic gameplay with simple graphics for an engaging human-vs-AI chess experience.",
      image: "src/components/Images/ai chess .webp",
      tags: ["Python"],
      githubUrl: "https://github.com/snjv-smd/ai-chess-game"
    },
    {
      title: "Assistant Chatbot",
      description: "This project is a Personal Assistant AI built in Python with a simple Tkinter GUI. It can listen to voice commands or accept typed input to perform tasks like playing YouTube videos, telling the time, searching Wikipedia, and telling jokes. The chatbot also speaks back to the user, making it an interactive and helpful digital assistant.",
      image: "src/components/Images/assistant chatbot.avif",
      tags: ["Python"],
      githubUrl: "https://github.com/snjv-smd/PersonalAssistantChatBot"
    },
    {
      title: "To Do list",
      description: "The To-Do list App is a Java Swing-based desktop application designed to help users manage daily tasks efficiently through a clean and simple interface. It allows users to add tasks with due dates, track progress with a circular completion indicator, and view tasks due on specific dates. The app also includes a built-in stopwatch timer for time management and productivity tracking.",
      image: "src/components/Images/to do list.png",
      tags: ["Java"],
      githubUrl: "https://github.com/snjv-smd/ToDoList"
    },
    {
      title: "Transient Website",
      description: "The website is a transient accommodation showcase designed to highlight rooms, amenities, and availability for guests. Built using HTML, Tailwind CSS, and JavaScript, it provides an elegant, modern interface with interactive elements such as image modals and a responsive navigation menu. The site aims to give visitors an immersive preview of the lodging experience and make it easy to check availability and contact the owner.",
      image: "src/components/Images/website.png",
      tags: ["HTML", "Tailwind","JavaScript"],
      githubUrl: "https://github.com/snjv-smd/TransientWeb"
    },
  ];


  return (
    <section ref={ref} className="min-h-screen py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      <motion.div style={{ y }} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-3xl">
            A selection of recent work showcasing my skills in development.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* IMAGE COLUMN */}
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-2xl border border-purple-500/20">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>

                {/* CONTENT COLUMN */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="mb-4 text-white text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  
                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-sm text-purple-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* ACTION BUTTONS (The "Working" Code Link) */}
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 rounded-lg transition-all text-white"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
