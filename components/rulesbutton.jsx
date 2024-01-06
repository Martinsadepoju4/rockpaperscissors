"use client";

import { useRef, useState } from "react";
import styles from "../app/page.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

function Rulesbutton() {
  const [rules, setRules] = useState(false);
  const rulesRef = useRef(null);

  const openRules = () => {
    // rulesRef.current.classList.add(styles.show_rules);
    setRules(true);
  };
  const closeRules = () => {
    // rulesRef.current.classList.remove(styles.show_rules);
    setRules(false);
  };
  return (
    <div>
      <button
        onClick={openRules}
        className={`${
          styles.rules_button
        } ${"text-white border-rounded rounded-xl border-white py-2 px-12 lg:absolute lg:bottom-[5dvh] lg:right-[2dvh] md:absolute md:bottom-[5dvh] md:right-[5dvh] border-2 m-auto block"}`}
      >
        RULES
      </button>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={rules ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        // exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        ref={rulesRef}
        className={`${styles.rules} p-4 bg-white h-[100vh] lg:h-[50vh] lg:w-[300px] relative z-11`}
      >
        <h1 className="pt-[20px] lg:pt-[20px] pb-[100px] lg:pb-[20px] font-bold text-center lg:text-left text-4xl lg:text-2xl text-[#3b4363]">
          RULES
        </h1>
        <Image
          className="mx-auto w-[90vw] lg:w-[250px] "
          src={"/images/image-rules-bonus.svg"}
          alt="rules"
          width={0}
          height={0}
          // sizes="100vw"
          // style={{ width: "90vw", height: "auto" }}
        />
        <Image
          onClick={closeRules}
          className="m-auto absolute bottom-[5%] left-[47%] lg:top-[10%] lg:left-[90%] lg:m-[0] w-[50px] lg:w-auto"
          src={"/images/icon-close.svg"}
          alt="cancel"
          width={0}
          height={0}
          // sizes="100vw"
          // style={{ width: "50px", height: "auto" }}
        />
      </motion.div>
    </div>
  );
}

export default Rulesbutton;
