"use client";
import { useContext, useEffect } from "react";
import { Context } from "../app/context";
import { motion, useAnimate } from "framer-motion";

function Scoreboard() {
  const { score, resultMessage, setScore } = useContext(Context);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (resultMessage) {
      if (resultMessage === "YOU WIN") {
        setScore((prevValue) => prevValue + 1);
      } else if (resultMessage === "YOU LOSE") {
        setScore(0);
      }
    }
  }, []);

  return (
    <div className=" h-[125px] m-auto border-4 border-rounded rounded-lg border-gray-300 flex p-[13px] justify-between items-center  lg:w-[50%]">
      <ul className=" text-white text-xs pl-[15px] leading-none">
        <li>ROCK</li>
        <li>PAPER</li>
        <li>SCISSORS</li>
        <li>LIZARD</li>
        <li>SPOCK</li>
      </ul>
      <div className="relative bg-white p-[10px] border-rounded rounded-md h-full w-4/12 lg:w-[20%] md:w-[20%] text-center">
        <p className="text-sm text-[#2a46c0]">SCORE</p>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-lg text-[#3b4363] text-5xl font-bold text-center relative"
        >
          {score}
        </motion.h3>
      </div>
    </div>
  );
}

export default Scoreboard;
