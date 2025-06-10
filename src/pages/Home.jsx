import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaBrain, FaServer } from 'react-icons/fa';
import { useRef } from 'react';

const skills = [
  {
    category: "Programming Paradigms & DSA",
    items: ["OOPS & DSA in Java", "Structured Programming & DSA in C"]
  },
  {
    category: "Machine Learning & AI",
    items: ["Supervised Prediction & Binary Classification Models", "Regression", "Clustering", "SVMs"]
  },
  {
    category: "Deep Learning",
    items: ["Neural Networks", "CNNs", "Transformers"]
  },
  {
    category: "ML Ops & Data Alchemy",
    items: ["TensorFlow", "Keras", "Scikit-Learn", "Pandas", "NumPy", "OpenCV", "Matplotlib"]
  },
  {
    category: "Frontend Languages",
    items: ["HTML5", "CSS - Tailwind, Bootstrap", "JavaScript"]
  },
  {
    category: "Web Frameworks & Libraries",
    items: ["ReactJS", "ExpressJS"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    category: "Decentralized Stacks & Crypto Logic",
    items: ["Web3", "DApps"]
  }
];

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  return (
    <div ref={containerRef} className="min-h-screen">
      <motion.div
        style={{ opacity, scale, y }}
        className="hero-section h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-primary rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent-tertiary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/4 left-1/4 text-6xl text-accent-primary"
          >
            <FaCode />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute top-1/3 right-1/4 text-6xl text-accent-secondary"
          >
            <FaBrain />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="absolute bottom-1/4 left-1/3 text-6xl text-accent-tertiary"
          >
            <FaServer />
          </motion.div>
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
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I'm{' '}
              <motion.span
                className="text-accent-primary inline-block"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
              >
                Rishi Singh
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-xl md:text-3xl text-text-secondary mb-12"
            >
              Architecting Intelligent Systems & Crafting Digital Experiences
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex justify-center space-x-6"
            >
              <a href="/contact" className="btn-secondary text-lg px-8 py-3">Get in Touch</a>
              <a href="/projects" className="btn-secondary text-lg px-8 py-3">View Projects</a>
            </motion.div>
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

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="card max-w-7xl mx-auto mb-16 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary opacity-50 rounded-lg"></div>
        <div className="flex flex-col md:flex-row items-center gap-12 p-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full opacity-20 animate-glow"></div>
              <img
                src="/profile-placeholder.jpg"
                alt="Rishi Singh"
                className="w-64 h-64 object-cover rounded-full border-4 border-bg-tertiary relative z-10"
              />
            </div>
            <p className="text-accent-primary text-center mt-6">
              ML Engineer & Full-Stack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="prose prose-lg prose-invert">
              <p className="text-text-secondary leading-relaxed">
                I'm a passionate developer who bridges the gap between cutting-edge AI and practical web applications. 
                With expertise in both machine learning and full-stack development, I create intelligent systems that 
                solve real-world problems while maintaining elegant user experiences.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                My approach combines the analytical depth of ML with the creative problem-solving of web development, 
                allowing me to build solutions that are both technically sophisticated and user-friendly.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="card max-w-7xl mx-auto mb-16 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary opacity-50 rounded-lg"></div>
        <div className="p-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 gradient-text"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-accent-primary">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="card max-w-7xl mx-auto relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary opacity-50 rounded-lg"></div>
        <div className="p-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 gradient-text"
          >
            What Drives Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-accent-primary">
                AI Innovation
              </h3>
              <p className="text-text-secondary">
                Transforming complex ML models into practical, user-friendly applications that solve real-world problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-accent-primary">
                Full-Stack Excellence
              </h3>
              <p className="text-text-secondary">
                Building robust, scalable applications that seamlessly integrate AI capabilities with modern web technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-accent-primary">
                Continuous Learning
              </h3>
              <p className="text-text-secondary">
                Staying at the forefront of AI and web development, constantly exploring new technologies and methodologies.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home; 