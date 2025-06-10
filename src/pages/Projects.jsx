import { motion, useInView, useScroll, useTransform, useAnimationControls } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaBrain, FaServer, FaDatabase, FaMobile, FaCloud, FaChevronLeft, FaChevronRight, FaRobot, FaHospital, FaLeaf, FaTshirt, FaBookmark, FaGamepad, FaDumbbell } from 'react-icons/fa';
import { useRef, useState } from 'react';

const projects = [
  {
    title: "Quill - Handwritten Assignment Writing Robot",
    description: "Led the machine learning development in a team of 8 at Randomize MUJ. Engineered a handwriting synthesis model using CNNs, processing 115k+ handwritten words from the IAM dataset. Achieved accurate conversion of any handwriting style into digital format within 5 seconds.",
    technologies: ["Python", "TensorFlow", "CNN", "Machine Learning", "Computer Vision"],
    github: "https://github.com/Risheeshh/Quill",
    live: "https://quill-demo.com",
    icon: FaRobot
  },
  {
    title: "Official Tech Club Site - Randomize",
    description: "Collaborated with a team of 2 to conceptualize and launch Randomize MUJ's official website. Implemented using React.js and deployed on Vercel, achieving 90% faster page load speed and significantly improved user experience within the first month of launch.",
    technologies: ["React.js", "Vercel", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/randomizemuj/website",
    live: "https://randomize-muj.com",
    icon: FaCode
  },
  {
    title: "Medimate - Smart Aid for Healthcare",
    description: "Developed a full-stack brochure website for healthcare technology using Express.js. Implemented interactive features and functionality to showcase the medical technology platform.",
    technologies: ["Express.js", "React", "Node.js", "MongoDB"],
    github: "https://github.com/Risheeshh/MediMate",
    live: "https://medimate.com",
    icon: FaHospital
  },
  {
    title: "Hazmate - Eco-Friendly Chemical Alternatives",
    description: "Built a web platform integrated with an AI chatbot using RAG and LangChain to retrieve eco-friendly alternatives from the ChemSec SIN List. Developed a responsive frontend with React and Tailwind CSS, ensuring seamless AI interaction and intuitive user experience.",
    technologies: ["React", "Tailwind CSS", "LangChain", "RAG", "JavaScript"],
    github: "https://github.com/RayRishika/HazMate",
    live: "https://hazmate.com",
    icon: FaLeaf
  },
  {
    title: "AI Fashion Predictor",
    description: "Developed an AI-powered fashion recommendation system using TensorFlow and Keras. Analyzed colors, patterns, and styles by training on 70k+ images from the Fashion MNIST dataset. Implemented ML models to provide accurate style recommendations based on trends and user preferences.",
    technologies: ["TensorFlow", "Keras", "Python", "Machine Learning", "Computer Vision"],
    github: "https://github.com/Risheeshh/Fashion-predictor",
    live: "https://fashion-predictor.com",
    icon: FaTshirt
  },
  {
    title: "AI Handwritten Digit Classifier",
    description: "Designed and implemented a CNN-based model using TensorFlow and Keras for real-time handwritten digit recognition. Trained the model on 60k+ images from the MNIST dataset, achieving high accuracy in digit classification.",
    technologies: ["TensorFlow", "Keras", "CNN", "Python", "Machine Learning"],
    github: "https://github.com/Risheeshh/Handwritten-Digit-Predictor",
    live: "https://digit-classifier-demo.com",
    icon: FaBrain
  },
  {
    title: "Bookmark Organizer",
    description: "Created a full-stack bookmark management application with dynamic sorting, real-time search, and category-based organization. Integrated Framer Motion for smooth UI animations and implemented secure user authentication with Express.",
    technologies: ["React", "Express", "Framer Motion", "MongoDB", "Authentication"],
    github: "https://github.com/Risheeshh/bookmark-sorter",
    live: "https://bookmark-organizer.com",
    icon: FaBookmark
  },
  {
    title: "Frontend Games Collection",
    description: "Developed a collection of interactive and responsive games using React, including Simon Game, Drum Kit Game, and Dice Game. Implemented dynamic UI elements and smooth animations to create engaging user experiences.",
    technologies: ["React", "JavaScript", "CSS", "Framer Motion", "Web Audio API"],
    github: "https://github.com/Risheeshh/Simon-Game",
    live: "https://frontend-games.com",
    icon: FaGamepad
  },
  {
    title: "Workout Tracker",
    description: "Built a personal gym companion application that organizes workout routines by day and tracks gym attendance. Implemented a failure counter to monitor skipped sessions, helping users maintain their fitness goals.",
    technologies: ["React", "JavaScript", "Local Storage", "CSS", "Responsive Design"],
    github: "https://github.com/Risheeshh/Workout",
    live: "https://workout-tracker.com",
    icon: FaDumbbell
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimationControls();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (info.offset.x < 0 && currentIndex < projects.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
    controls.start({ x: -currentIndex * 100 + '%' });
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      controls.start({ x: -(currentIndex - 1) * 100 + '%' });
    }
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
      controls.start({ x: -(currentIndex + 1) * 100 + '%' });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <motion.div
        style={{ opacity, scale, y }}
        className="hero-section h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary">
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, ${getComputedStyle(document.documentElement).getPropertyValue('--accent-primary')} 1px, transparent 1px),
                               linear-gradient(to bottom, ${getComputedStyle(document.documentElement).getPropertyValue('--accent-primary')} 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Floating Tech Stack Icons */}
          <div className="absolute inset-0">
            {['Python', 'TensorFlow', 'React', 'Docker', 'Kubernetes', 'AWS'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: [0.1, 0.2, 0.1],
                  y: [0, -20, 0],
                  x: [0, Math.random() * 20 - 10, 0]
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
                className="absolute text-2xl text-accent-primary"
                style={{
                  top: `${20 + (index * 15)}%`,
                  left: `${10 + (index * 15)}%`
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>

          {/* Animated Lines */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.1, 0.2, 0.1],
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                className="absolute border border-accent-secondary rounded-full"
                style={{
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
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
                My Projects
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-xl md:text-3xl text-text-secondary mb-12"
            >
              Exploring the Intersection of AI and Full-Stack Development
            </motion.p>
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

      {/* Projects Carousel */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        <div className="relative overflow-hidden">
          {/* Carousel Container */}
          <motion.div
            ref={carouselRef}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={controls}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex cursor-grab active:cursor-grabbing"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="min-w-full px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="card relative group h-[600px]">
                  <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary opacity-50 rounded-lg"></div>
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <project.icon className="text-5xl text-accent-primary" />
                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-secondary hover:text-accent-primary transition-colors"
                        >
                          <FaGithub className="text-3xl" />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-secondary hover:text-accent-primary transition-colors"
                        >
                          <FaExternalLinkAlt className="text-3xl" />
                        </a>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-accent-primary">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-lg mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-2 bg-bg-secondary/50 rounded-full text-sm text-accent-primary border border-accent-primary/20 hover:bg-accent-primary/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons - Only visible on larger screens */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-4 pointer-events-none">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-4 rounded-full bg-bg-primary/80 backdrop-blur-sm border border-accent-primary/20 text-accent-primary hover:bg-accent-primary/10 transition-colors pointer-events-auto ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === projects.length - 1}
              className={`p-4 rounded-full bg-bg-primary/80 backdrop-blur-sm border border-accent-primary/20 text-accent-primary hover:bg-accent-primary/10 transition-colors pointer-events-auto ${
                currentIndex === projects.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <FaChevronRight size={24} />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  controls.start({ x: -index * 100 + '%' });
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? 'bg-accent-primary w-8'
                    : 'bg-gray-500/30 hover:bg-gray-500/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 