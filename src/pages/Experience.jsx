import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FaBriefcase, FaCode, FaBrain, FaServer, FaDatabase, FaMobile, FaCloud, FaDownload } from 'react-icons/fa';
import { useRef } from 'react';

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "YugaYatra Retail Pvt Ltd",
    period: "June 2025 - Present",
    description: [
      "Developing website projects for real-world scenarios",
      "Implementing industry best practices and standards",
      "Working on full-stack development projects"
    ],
    technologies: ["React", "Node.js", "Next.js", "TypeScript"],
    icon: FaCode
  },
  {
    title: "Webmaster - Core Working Team",
    company: "Randomize MUJ",
    period: "June 2024 - April 2025",
    description: [
      "Delivered technical session on Full Stack Web Development at \"Hello World\" event",
      "Organized and conducted 2 in-house workshops on frontend web development",
      "Led two full-stack projects with teams of 5-6 members",
      "Created the official tech club site in a team of 2",
      "Contributed to multiple machine learning projects"
    ],
    technologies: ["Full Stack", "Machine Learning", "Web Development"],
    icon: FaBrain
  },
  {
    title: "Web Development Head",
    company: "MUJ ACM Sigbed Chapter",
    period: "May 2024 - March 2025",
    description: [
      "Collaborated on and improved the official ACM Sigbed tech site built on Next.js",
      "Assisted with IoT and embedded systems projects",
      "Contributed to multiple web designing projects",
      "Enhanced UI/UX and frontend functionality"
    ],
    technologies: ["Next.js", "IoT", "Embedded Systems", "UI/UX Design"],
    icon: FaServer
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  const handleDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/RISHI SINGH RESUME (2).pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Rishi_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <motion.div
        style={{ opacity, scale, y }}
        className="hero-section h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-tr from-bg-primary via-bg-secondary to-bg-tertiary">
          {/* Animated Timeline Pattern */}
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-accent-primary/20"></div>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                className="absolute left-1/2 w-4 h-4 bg-accent-primary rounded-full"
                style={{
                  top: `${20 + (i * 15)}%`,
                  transform: 'translateX(-50%)'
                }}
              />
            ))}
          </div>

          {/* Floating Experience Icons */}
          <div className="absolute inset-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: [0.1, 0.2, 0.1],
                  y: [0, -30, 0],
                  x: [0, Math.random() * 30 - 15, 0]
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                  delay: index * 0.8
                }}
                className="absolute text-3xl text-accent-primary"
                style={{
                  top: `${25 + (index * 20)}%`,
                  left: `${20 + (index * 20)}%`
                }}
              >
                <exp.icon />
              </motion.div>
            ))}
          </div>

          {/* Animated Connection Lines */}
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ 
                  opacity: [0.1, 0.2, 0.1],
                  pathLength: [0, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                className="absolute"
                style={{
                  top: `${30 + (i * 20)}%`,
                  left: '20%',
                  right: '20%',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary">
                Professional Journey
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-xl md:text-3xl text-text-secondary mb-8"
            >
              From Code to Innovation: My Path in Tech
            </motion.p>
            
            {/* Download Resume Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <FaDownload className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-text-secondary mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-text-secondary rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Experience Timeline */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-accent-primary/20"></div>
          
          {/* Experience Cards */}
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:mr-1/2 md:pr-12' : 'md:mr-auto md:ml-1/2 md:pl-12'}`}
            >
              <div className="card relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary opacity-50 rounded-lg"></div>
                <div className="relative z-10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <experience.icon className="text-4xl text-accent-primary" />
                    <span className="text-accent-secondary">{experience.period}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-accent-primary">
                    {experience.title}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {experience.company}
                  </p>
                  <ul className="text-text-secondary mb-4 list-disc list-inside space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <span key={i} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 