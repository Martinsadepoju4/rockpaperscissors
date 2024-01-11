"use client";
import { useContext, useEffect, useRef, useState } from "react";
import Scoreboard from "../../components/scoreboard";
import Avatar from "../../components/avatar";
import styles from "../page.module.css";
import Rulesbutton from "../../components/rulesbutton";
import Gameresult from "../../components/gameresult";
import { Context } from "../context";
import { motion } from "framer-motion";

function Step2() {
  const { userAvatar, cpuAvartar, resultMessage, setScore } =
    useContext(Context);

  const [additionalClasses, setAdditionalClasses] = useState("");

  useEffect(() => {
    if (resultMessage === "YOU WIN") {
      setAdditionalClasses("lg:left-[-13%] left-[-13%] lg:w-[100%]");
    } else if (resultMessage === "YOU LOSE") {
      setAdditionalClasses("lg:left-[13%] lg:w-[100%]");
    } else {
      setAdditionalClasses("lg:relative mt-[100px] lg:w-[70%]");
    }
  }, []);

  return (
    <div className="p-[30px] lg:p-[50px] md:p-[50px] lg:h-full">
      <Scoreboard />
      <div
        className={`${additionalClasses} md:relative md:mx-auto md:left-[0]   absolute lg:absolute lg:mt-[40px] md:mt-[10vh] flex justify-between h-auto w-[85%]  lg:h-[42vh] md:w-[90%] m-auto items-baseline`}
      >
        {resultMessage === "YOU WIN" ? (
          <div className="flex lg:flex-col-reverse flex-col items-center justify-between md:scale-[initial] lg:scale-[initial] lg:h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className={`${styles.remove_top_margin} bg-[#606e85]/10 rounded-full py-[40px] px-[40px] lg:py-[15vh] lg:px-[15vh]`}
            >
              <div className="  bg-[#606e85]/20 rounded-full py-[30px] px-[30px] lg:py-[15vh] lg:px-[15vh]">
                <div className=" bg-[#606e85]/30 rounded-full py-[15px] px-[15px] lg:py-[15vh] lg:px-[15vh]">
                  <Avatar
                    name={userAvatar}
                    class={styles[userAvatar]}
                    containerclass={styles.relative_container}
                    winnerEffect={true}
                  />
                </div>
              </div>
            </motion.div>
            <p className="text-white mt-[-55px]">YOU PICKED</p>
          </div>
        ) : (
          <div className="flex lg:flex-col-reverse flex-col items-center justify-between md:scale-[initial] lg:scale-[initial] lg:h-full">
            <Avatar
              name={userAvatar}
              class={styles[userAvatar]}
              containerclass={styles.relative_container}
              winnerEffect={true}
            />
            <p className="text-white mt-[30px]">YOU PICKED</p>
          </div>
        )}
        {resultMessage === "YOU LOSE" ? (
          <div className=" lg:h-full flex lg:flex-col-reverse flex-col items-center  justify-between md:scale-[initial] lg:scale-[initial] lg:h-full lg:ml-[-15vh]">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className={`${styles.remove_top_margin} bg-[#606e85]/10 rounded-full py-[45px] px-[45px] lg:py-[15vh] lg:px-[15vh]`}
            >
              <div className="  bg-[#606e85]/20 rounded-full py-[30px] px-[30px] lg:py-[15vh] lg:px-[15vh]">
                <div className="  bg-[#606e85]/30 rounded-full py-[15px] px-[15px] lg:py-[15vh] lg:px-[15vh] ">
                  <Avatar
                    name={cpuAvartar}
                    class={`${styles[cpuAvartar]} `}
                    containerclass={styles.relative_container}
                  />
                </div>
              </div>
            </motion.div>

            <p className="text-white mt-[-55px]">THE HOUSE PICKED</p>
          </div>
        ) : (
          <div className="flex lg:flex-col-reverse flex-col items-center  justify-between md:scale-[initial] lg:scale-[initial] lg:h-full">
            <Avatar
              name={cpuAvartar}
              class={`${styles[cpuAvartar]} `}
              containerclass={styles.relative_container}
            />
            <p className="text-white mt-[30px] w-[120%] text-center">
              THE HOUSE PICKED
            </p>
          </div>
        )}
      </div>

      <Gameresult />
      <Rulesbutton />
    </div>
  );
}

export default Step2;
