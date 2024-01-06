"use client";

import { createContext, useEffect, useRef, useState } from "react";

export const Context = createContext(null);

export function ContextProvider({ children }) {
  const [userAvatar, setUserAvatar] = useState(null);
  const [cpuAvartar, setCpuAvartar] = useState(null);
  const [resultMessage, setresultMessage] = useState(null);
  const [score, setScore] = useState(0);

  const value = {
    setresultMessage,
    resultMessage,
    userAvatar,
    setUserAvatar,
    cpuAvartar,
    setCpuAvartar,
    score,
    setScore,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
