import { useContext } from "react";
import { Context } from "../app/context";
import { useRouter } from "next/navigation";

function Gameresult() {
  const { resultMessage, setresultMessage, setCpuAvartar, setUserAvatar } =
    useContext(Context);
  const router = useRouter();

  const toHome = () => {
    setresultMessage(null);
    router.push("/");
    setCpuAvartar(null);
    setUserAvatar(null);
  };
  return (
    <div className="mt-[10vh] w-[70%] lg:w-[18%] m-auto absolute bottom-[10%] md:bottom-[10%]  lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h2 className="mb-[30px] lg:mb-[10px] text-white text-center text-4xl font-bold">
        {resultMessage}
      </h2>
      <button
        onClick={toHome}
        className="border-rounded rounded-xl bg-white w-[100%] py-3 lg:py-2  text-[ #1f3756] text-lg"
      >
        PLAY AGAIN
      </button>
    </div>
  );
}

export default Gameresult;
