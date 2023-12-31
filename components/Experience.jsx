import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.1 }}
      className="max-w-containerSmall mx-auto py-6"
    >
      <h3 className="text-sm md:text-base py-5 md:py-10 font-semibold uppercase text-primary tracking-wider">
        Internship experience and work as
      </h3>
      <div className="grid grid-cols-1 lg:ml-96">
        {/* Badan Pusat Statistik */}
        <div className="flex justify-between lg:px-10 mb-6">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-base font-medium text-primary tracking-wide hover:text-sky"
            >
              Target Defence Academy
            </a>
            <span className="text-base text-semidark">Being a Digital Marketer and Web Designer</span>
          </div>
          <div className="flex flex-col text-right mt-1">
            <span className="text-sm text-semidark">Kanpur, Uttar Pradesh</span>
            <span className="text-sm text-semidark">Jul 2021 - Oct 2021</span>
          </div>
        </div>
        {/* Dieng Cyber */}
        <div className="flex justify-between lg:px-10 mb-6">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-base font-medium text-primary tracking-wide hover:text-sky"
            >
              Digital Agency Owner
            </a>
            <span className="text-base text-semidark">CRM Manager</span>
          </div>
          <div className="flex flex-col text-right mt-1">
            <span className="text-sm text-semidark">
              Kanpur, Uttar Pradesh
            </span>
            <span className="text-sm text-semidark">Jan 2022-Oct 2022</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
