"use client";

import { useState, useRef, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Scoreboard from "../components/scoreboard";
import styles from "./page.module.css";
import Image from "next/image";
import Avatar from "../components/avatar";
import Rulesbutton from "../components/rulesbutton";
import { Context } from "./context";

function Home() {
  // const [loadedImages, setLoadedImages] = useState(0);
  // const handleImageLoad = () => {
  //   setLoadedImages((prevValue) => prevValue + 1);
  // };
  const {
    userAvatar,
    setUserAvatar,
    cpuAvartar,
    setCpuAvartar,
    resultMessage,
    setresultMessage,
    setScore,
  } = useContext(Context);
  const router = useRouter();

  function handleComputerSelection() {
    const allAvatars = ["rock", "paper", "scissors", "lizard", "spock"];
    const avatarIndex = Math.round(Math.random() * 4);
    setCpuAvartar(allAvatars[avatarIndex]);
  }
  const handleSelections = (event) => {
    // save user selection
    const { dataset } = event.target;
    setUserAvatar(dataset.name);
    // save computer selection
    handleComputerSelection();
  };

  function setwinnerMessage(winner) {
    // setTimeout(() => {
    //   if (userAvatar === winner) {
    //     setresultMessage("YOU WIN");
    //     console.log("setting winner");
    //     setScore((prevValue) => prevValue + 1);
    //   } else {
    //     setresultMessage("YOU LOSE");
    //     setScore(0);
    //   }
    // }, 1000);

    userAvatar === winner
      ? setresultMessage("YOU WIN")
      : setresultMessage("YOU LOSE");
  }
  function determineWinner(user, computer) {
    console.log("variable", user + " " + computer);

    const userAndComputerInput = user + " " + computer;
    if (
      userAndComputerInput.includes("rock") &&
      userAndComputerInput.includes("paper")
    ) {
      setwinnerMessage("paper");
    } else if (
      userAndComputerInput.includes("paper") &&
      userAndComputerInput.includes("spock")
    ) {
      setwinnerMessage("paper");
    } else if (
      userAndComputerInput.includes("scissors") &&
      userAndComputerInput.includes("paper")
    ) {
      setwinnerMessage("scissors");
    } else if (
      userAndComputerInput.includes("paper") &&
      userAndComputerInput.includes("spock")
    ) {
      setwinnerMessage("paper");
    } else if (
      userAndComputerInput.includes("rock") &&
      userAndComputerInput.includes("lizard")
    ) {
      setwinnerMessage("rock");
    } else if (
      userAndComputerInput.includes("rock") &&
      userAndComputerInput.includes("scissors")
    ) {
      setwinnerMessage("rock");
    } else if (
      userAndComputerInput.includes("lizard") &&
      userAndComputerInput.includes("spock")
    ) {
      setwinnerMessage("lizard");
    } else if (
      userAndComputerInput.includes("lizard") &&
      userAndComputerInput.includes("paper")
    ) {
      setwinnerMessage("lizard");
    } else if (
      userAndComputerInput.includes("spock") &&
      userAndComputerInput.includes("scissors")
    ) {
      setwinnerMessage("spock");
    } else if (
      userAndComputerInput.includes("spock") &&
      userAndComputerInput.includes("rock")
    ) {
      setwinnerMessage("spock");
    } else if (
      userAndComputerInput.includes("scissors") &&
      userAndComputerInput.includes("lizard")
    ) {
      setwinnerMessage("scissors");
    } else {
      setresultMessage("draw");
    }
    console.log("done");
  }
  useEffect(() => {
    console.log("use effect running");
    if (userAvatar && cpuAvartar) {
      determineWinner(userAvatar, cpuAvartar);
      router.push("/step2");
    }
  }, [userAvatar, cpuAvartar]);

  useEffect(() => {
    console.log("page 1 mounted");
    // console.log("user", userAvatar);
    // console.log("computer", cpuAvartar);
    // console.log("result", resultMessage);
  }, []);
  // useEffect(() => {
  //   console.log(loadedImages);
  // }, [loadedImages]);

  return (
    <div>
      <div className="p-[30px] lg:p-[50px] md:p-[50px]">
        <Scoreboard />
        <div className={styles.pentagon_container}>
          <Image
            className={styles.pentagon}
            src="/images/bg-pentagon.svg"
            alt="pentagon"
            width={0}
            height={0}
            style={{ width: "60vw", height: "auto" }}
          />
          <Avatar
            name="paper"
            function={handleSelections}
            class={styles.paper}
            containerclass={styles.paper_container}
          />
          <Avatar
            function={handleSelections}
            name="rock"
            class={styles.rock}
            containerclass={styles.rock_container}
          />
          <Avatar
            function={handleSelections}
            name="lizard"
            class={styles.lizard}
            containerclass={styles.lizard_container}
          />
          <Avatar
            function={handleSelections}
            name="spock"
            class={styles.spock}
            containerclass={styles.spock_container}
          />
          <Avatar
            function={handleSelections}
            name="scissors"
            class={styles.scissors}
            containerclass={styles.scissors_container}
          />
        </div>

        <Rulesbutton />
      </div>
    </div>
  );
}

export default Home;
