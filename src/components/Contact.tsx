import { motion } from "motion/react";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  const socials = [
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com/snjv-smd" 
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/sanjeev-bensal-393077397/" // Replace with your actual LinkedIn URL
    },
    { 
      icon: Mail, 
      label: "Email", 
      href: "mailto:sanjeevbensal7215@gmail.com" // Replace with your actual email
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-purple-900/20" />
      
      {/* Animated Glow Effect */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 inline-block"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 mx-auto flex items-center justify-center">
              <Mail className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <h2 className="mb-6 bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent text-5xl font-bold">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </p>

          <div className="flex justify-center gap-6 mb-16">
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                // Opens in new tab for GitHub/LinkedIn, but not for Email
                target={social.label === "Email" ? "_self" : "_blank"}
                rel={social.label === "Email" ? "" : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  backgroundColor: "rgba(168, 85, 247, 0.2)" // Slight purple highlight on hover
                }}
                className="w-16 h-16 rounded-full bg-purple-900/30 border border-purple-500/30 hover:border-purple-500 flex items-center justify-center transition-all shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="w-7 h-7 text-purple-400" />
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600"
          >
            © 2025
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}