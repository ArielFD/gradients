import { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function Navbar({
  changeGradient,
  backgroundGradient,
  gradientDirection,
}) {
  const [visible, setVisible] = useState(false);

  const handleChangeGradientDirection = () => {
    const directions = ["to bottom", "to left", "to top", "to right"];
    const currentIndex = directions.indexOf(gradientDirection);
    const nextIndex = (currentIndex + 1) % directions.length;
    const newGradient = backgroundGradient.replace(
      directions[currentIndex],
      directions[nextIndex]
    );
    changeGradient(newGradient, directions[nextIndex]);
    setVisible(!visible);
  };

  // const styles = visible === true ? "hidden" : "";

  useEffect(() => {
    setVisible(!visible);
  }, []);

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between text-sm ">
      <div className="fixed left-0 top-0 flex w-full justify-end gap-4 border-b pb-2 pt-2 pr-5 bg-slate-100 shadow-xl">
        <h1 className="absolute left-5 font-bold text-xl font-styled underline decoration-sky-400">
          GradientCollection
        </h1>
        <button
          onClick={handleChangeGradientDirection}
          title="Rotate gradient"
          className=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M522-80v-82q34-5 66.5-18t61.5-34l56 58q-42 32-88 51.5T522-80Zm-80 0Q304-98 213-199.5T122-438q0-75 28.5-140.5t77-114q48.5-48.5 114-77T482-798h6l-62-62 56-58 160 160-160 160-56-56 64-64h-8q-117 0-198.5 81.5T202-438q0 104 68 182.5T442-162v82Zm322-134-58-56q21-29 34-61.5t18-66.5h82q-5 50-24.5 96T764-214Zm76-264h-82q-5-34-18-66.5T706-606l58-56q32 39 51 86t25 98Z" />
          </svg>
        </button>
        <button
          onClick={handleChangeGradientDirection}
          title="Get CSS code"
          className=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
          </svg>
        </button>
        <button
          onClick={handleChangeGradientDirection}
          title="Add gradient"
          className=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </button>
        <button
          onClick={handleChangeGradientDirection}
          alt="More gradients"
          className=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
      </div>
      <div className="fixed bottom-1 left-0 flex h-48 w-full items-end justify-center text-xs text-slate-500">
        © Copyright 2024. Made by
        <a
          className="flex place-items-center font-bold ml-2 lg:pointer-events-auto lg:p-0"
          href="https://afdevportfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ariel Ferrera
        </a>
      </div>
      <div
        className={`absolute transition-transform ease-in-out duration-100 transform ${
          styles.container
        } ${
          visible ? styles.active : ""
        }  bg-slate-100 rounded-xl shadow-xl`}
      ></div>
    </div>
  );
}
