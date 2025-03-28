import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "tailwindcss/tailwind.css";
import "@fontsource/press-start-2p";

export default function Hackathon() {
  const [scrollY, setScrollY] = useState(0);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen text-neon-green mx-5">
      {/* Landing Page */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-10 md:flex-row md:items-center md:justify-between">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-4xl md:text-6xl font-bold glitch-text hacker-color"
          >
            <Typewriter words={["HACKATHON 2.0"]} cursor cursorStyle="_" loop={1} cursor />
          </motion.h1>
          <div className="mt-6 text-xs max-sm:text-[0.6rem] md:text-sm max-w-md glitch-effect hacker-color">
            <Typewriter
              words={["WELCOME TO THE SECOND EDITION OF HACKATHON RANDOMIZE. WHERE CODE BENDS, ALGORITHMS EVOLVE, AND INNOVATION BREAKS ALL LIMITS. THIS ISN’T JUST A CHALLENGE—IT’S A BATTLEFIELD FOR FULL STACK ARCHITECTS AND MACHINE LEARNING TACTICIANS. ENCRYPTION MEETS DISRUPTION, LOGIC COLLIDES WITH CREATIVITY. GUIDED BY MENTORS, POWERED BY COLLABORATION, FUELED BY PURE PROBLEM-SOLVING. NO RULES, JUST POSSIBILITIES. THE SYSTEM IS WAITING. EXECUTE."]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={0}
            />
          </div>
        </div>

        <motion.img
          src="/HACKATHON.png"
          alt="Hackathon Poster"
          className="w-full md:w-[40%] max-h-[60vh] object-contain mt-10 md:mt-0"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
        />
      </section>

      {/* Scrolling Triggered Event Details */}
      <motion.section
        className="min-h-screen flex flex-col justify-center items-center p-10 bg-gradient-to-b from-black to-gray-900"
        initial={{ opacity: 0, y: 100 }}
        animate={scrollY > 200 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold font-hacker hacker-color">EVENT DETAILS</h2>
        <p className="mt-4 text-sm md:text-lg max-w-2xl text-center hacker-color">Join the ultimate coding battle in a 24-hour challenge. Solve real-world problems and claim glory!</p>
        <div className="flex flex-row">
            <motion.a
                href="/problem-statement.pdf"
                download
                className="mt-6 px-6 py-3 text-lg font-bold bg-[#D2F589] text-black rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-neon-green"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                Download Problem Statement
            </motion.a>
            <motion.a
                href="/forms.com"
                download
                className="mt-6 mx-10 px-6 py-3 text-lg font-bold bg-[#D2F589] text-black rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-neon-green"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                Sign Up
            </motion.a>
        </div>
        

        {/* Accordion for Additional Details */}
        <button
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
          className="mt-6 px-6 py-3 text-lg font-bold bg-gray-800 hacker-color rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          {isAccordionOpen ? "Hide More Details" : "View More Details"}
        </button>

        {isAccordionOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            className="mt-4 p-6 w-full max-w-3xl bg-gray-900 text-sm md:text-base rounded-lg overflow-y-auto max-h-[50vh] hacker-color"
          >
            <p>The Hackathon Randomize will take place on 7th February with the following schedule:</p>
            <p>🔹 2:30 PM – 4:00 PM: Registrations & team assignments</p>
            <p>🔹 4:00 PM – 5:30 PM: Hackathon begins</p>
            <p>🔹 5:30 PM – 6:00 AM: Round 1 (PPT + MVP submission)</p>
            <p>🔹 8:00 AM – 2:30 PM: Round 2 (Final product submission)</p>
            <br />
            <p>Domains & Structure
            Participants can choose from Full Stack Development or Machine Learning.</p>
            <p>🔹 Mentors from JWT available every 2 hours</p>
            <p>🔹 Teams of 1-4 members</p>
            <p>🔹 Entry fee: Rs. 75 (Free for Randomize members)</p>
            <br />
            <p>Logistics & Prizes</p>
            <p>🔹 Mentors from JWT available every 2 hours</p>
            <p>🔹 Teams of 1-4 members</p>
            <p>🔹 Entry fee: Rs. 75 (Free for Randomize members)</p>
            <br />
            <p>Guidelines</p>
            <p>🔹 Register on time (2:30 PM – 4:00 PM)</p>
            <p>🔹 Choose a problem statement from the given domains</p>
            <p>🔹 Submit the required deliverables for each round</p>
            <p>🔹 Use mentorship wisely and respect event rules</p>
            <p>🔹 Maintain professionalism throughout the event</p>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
}
