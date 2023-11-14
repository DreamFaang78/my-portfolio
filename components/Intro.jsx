import { motion } from "framer-motion";
import { FiInstagram, FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";
import React from "react";
import { Button } from "@nextui-org/react";

const Intro = () => {
  return (
    <section className="lg:min-h-screen text-center">
      {/* Header start */}
      <nav className="py-5 mb-2 lg:mb-12 flex items-center justify-between p-4">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-sm md:text-base uppercase font-title font-semibold tracking-wider text-primary hover:text-sky"
          href=""
        >
          Agam Singh
        </motion.a>
        <ul className="">
          <li>
            <a
              href="https://drive.google.com/file/d/1gZKILwGU6Phq5C5aN0N33S71ixKuFF8n/view?usp=sharing"
              target="_blank"
            >
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-transparent text-primary font-medium text-sm px-4 py-2.5 rounded-md hover:bg-sky hover:border-sky hover:text-white"
              >
                Resume
              </motion.button>
            </a>
          </li>
        </ul>
      </nav>
      {/* Header stop */}

      {/* About content */}
      <div className="py-24 p-4">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-5xl py-2 font-title font-bold text-primary"
        >
          {/* import profile image from Profile */}
          {/* <img
            src="Profile"
            alt="a"
            className="w-36 h-36 rounded-full mx-auto"
          /> */}
          <br />
          Agam Singh
        </motion.h2>
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base md:text-2xl py-2 font-title font-medium text-slate-300"
        >
          Fullstack Web Developer
        </motion.h3>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-semidark leading-8 py-5 text-sm md:text-base tracking-wider"
        >
          I Create a Fullstack Web Application with <span className="text-primary font-medium">MERN Stack</span> & <span className="text-primary font-medium">Node</span> and create a
          beautiful <span className="text-primary font-medium">interfaces</span>{" "}
          & <span className="text-primary font-medium">experiences</span> for the end user.
        </motion.p>
        {/* Social Media */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 text-semidark">
            {/* Github */}
            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              href="https://github.com/DreamFaang78"
              title="GitHub"
              target="_blank"
            >
              <span className="w-10 h-10 text-2xl inline-flex items-center justify-center hover:text-sky cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <FiGithub />
              </span>
            </motion.a>
            {/* Linkedin */}
            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              href="https://www.linkedin.com/in/agam-singh-dev/"
              title="Linkedin"
              target="_blank"
            >
              <span className="w-10 h-10 text-2xl inline-flex items-center justify-center hover:text-sky cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <FiLinkedin />
              </span>
            </motion.a>
            {/* Facebook */}
            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              href="https://www.facebook.com/profile.php?id=100094022506314"
              title="Facebook"
              target="_blank"
            >
              <span className="w-10 h-10 text-2xl inline-flex items-center justify-center hover:text-sky cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <FiFacebook />
              </span>
            </motion.a>
            {/* Instagram */}
            <motion.a
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              href="https://www.instagram.com/agam_work_hard/"
              title="Instagram"
              target="_blank"
            >
              <span className="w-10 h-10 text-2xl inline-flex items-center justify-center hover:text-sky cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <FiInstagram />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
      <div>
        {/* // Button on click redirect to  https://nextui.org/docs/components/button */}
        <Button

          onClick={() => {
            window.location.href = 'https://wa.me/919889582808?text=Hi%20Agam'
          }
          }
          href='https://wa.me/919889582808?text=Hi%20Agam' color="secondary" variant="shadow">
          Let's Connect With Me
        </Button>
      </div>

    </section>
  );
};

export default Intro;
