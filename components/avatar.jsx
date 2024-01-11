"use client";
import { useState } from "react";
import styles from "../app/page.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

function Avatar(props) {
  // const [winnerCircleEffect, setWinnerCircleEffect] = useState(
  //   props.winnerEffect ? props.winnerEffect : false
  // );

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className={`${styles.avatar_container} ${
        props.containerclass + " z-10"
      }  `}
      // className={`${styles.avatar_container} ${props.containerclass}`}
      data-name={props.name}
      onClick={(e) => props.function(e)}
    >
      <Image
        className={props.class}
        src={"/images/icon-" + props.name + ".svg"}
        alt={props.name}
        width={0}
        height={0}
        data-name={props.name}
        // sizes="100vw"
        style={{ width: "auto", height: "auto" }}
        onLoad={() => props.onLoadfunction()}
      />
    </motion.div>
  );
}

export default Avatar;
