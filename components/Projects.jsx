import Image from "next/image";
import {
  nextjs,
  reactjs,
  laravel,
  codeigniter,
  vuejs,
  nuxtjs,
} from "@/public/assets/";
import { FiArrowUpRight } from "react-icons/fi";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [viewMore, setViewMore] = useState(false);
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="max-w-containerSmall mx-auto py-6"
    >
      <h3 className="text-sm md:text-base py-5 md:py-10 font-semibold uppercase text-primary tracking-wider">
        Completed Projects
      </h3>
      {/* Projects content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-10">
        {/* Next.js */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="w-full flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={nextjs}
                alt="Next.js"
                className="w-full rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 mb-4 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
              />
              <a
                href="https://chachachaudhary.tech/profile"
                className="group md:ml-4 mb-2 text-base font-medium font-title text-primary hover:text-sky"
              >
                My Project with OpenAI{" "}
                <FiArrowUpRight className="inline-flex group-hover:-translate-y-1 " />
              </a>
            </div>
            <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
              🚀 Unleash the magic of "GangesGuide" 🌐, where My digital avatar, 🤖💬, invites you on a captivating journey through the heart of the Ganges. Engage in dynamic conversations as the character seamlessly responds to your queries, delivering a personalized experience like never before! 🖐️💫 Dive into the river's mystique with GangesGuide, offering rich insights into its history, cultural significance, and environmental impact.
            </p>
            <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                OpenAI
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Next.js
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Vercel AI
              </span>
            </ul>
          </div>
        </div>
        {/* React.js */}
        <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="w-full after:flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={reactjs}
                alt="React.js"
                className="w-full rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 mb-4 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
              />
              <a
                href="https://github.com/DreamFaang78/facedetector"
                className="group md:ml-4 mb-2 text-base font-medium font-title text-primary hover:text-sky"
              >
                A Face Detector Cloned{" "}
                <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
              🌈 Elevate your well-being with our groundbreaking project: Real-Time Inbrowser Emotion Detection! 🚀 Unveil the power of instant emotional insight as our cutting-edge technology reads your facial expressions in real-time, distinguishing between happiness and sadness. 🤗😢 Witness a revolutionary tool right in your browser, offering a seamless check on your mental state.
            </p>
            <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                React.js
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Framer
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Vercel
              </span>
            </ul>
          </div>
        </div>
        {/* Laravel */}
        {/* <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="w-full flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={laravel}
                alt="Laravel"
                className="w-full rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 mb-4 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
              />
              <a
                href="#"
                className="group md:ml-4 mb-2 text-base font-medium font-title text-primary hover:text-sky"
              >
                My Project Laravel{" "}
                <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
              placeat delectus sint ab ipsum corporis asperiores reprehenderit
              molestias nisi dolorem.
            </p>
            <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Laravel
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Framer
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Vercel
              </span>
            </ul>
          </div>
        </div> */}
        {/* CodeIgniter */}
        {/* <div className="flex flex-col items-center rounded-lg shadow md:flex-row">
          <div className="w-full flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
            <div className="md:flex md:items-center">
              <Image
                src={codeigniter}
                alt="CodeIgniter"
                className="w-full rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 mb-4 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
              />
              <a
                href="#"
                className="group md:ml-4 mb-2 text-base font-medium font-title text-primary hover:text-sky"
              >
                My Project CodeIgniter{" "}
                <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
              </a>
            </div>
            <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
              placeat delectus sint ab ipsum corporis asperiores reprehenderit
              molestias nisi dolorem.
            </p>
            <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                CodeIgniter
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Framer
              </span>
              <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                Vercel
              </span>
            </ul>
          </div>
        </div> */}

        {/* More Projects
        {viewMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center rounded-lg shadow md:flex-row"
            >
              <div className="w-full flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
                <div className="md:flex md:items-center">
                  <Image
                    src={vuejs}
                    alt="Vue.js"
                    className="w-full rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 mb-4 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
                  />
                  <a
                    href="#"
                    className="group md:ml-4 mb-2 text-base font-medium font-title text-primary hover:text-sky"
                  >
                    My Project Vue.js{" "}
                    <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
                  </a>
                </div>
                <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum, placeat delectus sint ab ipsum corporis asperiores
                  reprehenderit molestias nisi dolorem.
                </p>
                <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                    Vue.js
                  </span>
                  <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                    Framer
                  </span>
                  <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                    Vercel
                  </span>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center rounded-lg shadow md:flex-row"
            >
              <div className="w-full flex flex-col justify-between md:p-4 leading-normal md:border md:border-slate-800 md:rounded-lg">
                <div className="md:flex md:items-center">
                  <Image
                    src={nuxtjs}
                    alt="Nuxt.js"
                    className="w-full rounded-md h-44 md:h-32 lg:h-20 md:w-44 lg:w-32 mb-4 md:border-solid md:border-2 md:border-slate-600 lg:hover:border-semidark"
                  />
                  <a
                    href="#"
                    className="group md:ml-4 mb-2 text-base font-medium font-title text-primary hover:text-sky"
                  >
                    My Project Nuxt.js{" "}
                    <FiArrowUpRight className="inline-flex transition group-hover:-translate-y-1" />
                  </a>
                </div>
                <p className="mb-4 mt-2 md:mt-0 text-sm md:text-md text-semidark">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum, placeat delectus sint ab ipsum corporis asperiores
                  reprehenderit molestias nisi dolorem.
                </p>
                <ul className="text-xs md:text-sm text-dark flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                    Nuxt.js
                  </span>
                  <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                    Framer
                  </span>
                  <span className="text-xs text-sky font-medium inline-block py-1 px-3 rounded-full bg-slate-800 last:mr-0 mr-0">
                    Vercel
                  </span>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* Button More Projects */}
        {/* <div className="mt-6 flex items-center justify-center">
          {viewMore ? (
            <button
              onClick={() => setViewMore(false)}
              className=" text-primary text-[14px] font-medium hover:underline hover:underline-offset-4 hover:decoration-sky"
            >
              Less Projects
            </button>
          ) : (
            <button
              onClick={() => setViewMore(true)}
              className=" text-primary text-[14px] font-medium hover:underline hover:underline-offset-4 hover:decoration-sky "
            >
              More Projects
            </button>
          )}
        </div> */}
      </div>
    </motion.div>
  );
};

export default Projects;
