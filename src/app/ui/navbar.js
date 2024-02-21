import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import GradientGrid from "./GradientGrid";
import gradientsData from "/collection.json";

export default function Navbar({
  changeName,
  changeGradient,
  backgroundGradient,
  gradientDirection,
}) {
  const [visibleCSS, setVisibleCSS] = useState(false);
  const [visibleList, setVisibleList] = useState(false);
  const [copied, setCopy] = useState(false);
  const [selectedGradient, setSelectedGradient] = useState(null);
  const cardRef = useRef();

  const handleChangeGradientDirection = () => {
    const directions = ["to bottom", "to left", "to top", "to right"];
    const currentIndex = directions.indexOf(gradientDirection);
    const nextIndex = (currentIndex + 1) % directions.length;
    const newGradient = backgroundGradient.replace(
      directions[currentIndex],
      directions[nextIndex]
    );
    changeGradient(newGradient, directions[nextIndex]);
  };

  // const styles = visibleCSS === true ? "hidden" : "";
  const handleCard = () => {
    setVisibleCSS(!visibleCSS);
  };

  const handleChangeList = () => {
    setVisibleList(!visibleList);
  };

  const handleCopy = async () => {
    let text = "background: " + backgroundGradient;
    try {
      await navigator.clipboard.writeText(text);
      setCopy(true);
      setTimeout(function () {
        setCopy(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const changeBackground = (gradient) => {
    setSelectedGradient(
      `linear-gradient(to bottom, ${gradient.colors.join(", ")})`
    );
    changeName(gradient.name);
    setVisibleList(false);
  };

  useEffect(() => {
    changeGradient(selectedGradient, "to bottom");
  }, [selectedGradient]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setVisibleCSS(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
        <button onClick={handleCard} title="Get CSS code" className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
          </svg>
        </button>
        {/* <button
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
        </button> */}
        <button onClick={handleChangeList} alt="More gradients" className="">
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
          href="https://github.com/ArielFD/gradients"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ariel Ferrera
        </a>
      </div>
      <div
        ref={cardRef}
        className={`absolute  transition-transform ease-in-out duration-100 transform min-h-[200px] max-w-[500px] p-[35px] ${
          styles.container
        } ${
          visibleCSS ? styles.active : ""
        }  bg-slate-100 rounded-xl shadow-xl`}
      >
        <div className="flex flex-col justify-center items-center  gap-4">
          <p className="font-bold text-lg">CSS Code</p>
          <p>
            <span className="text-sky-400">background: </span>
            <span className="text-slate-400">{backgroundGradient}</span>
          </p>
          {!copied && (
            <button
              className="px-4 py-2 rounded-lg bg-slate-300 mt-2"
              onClick={handleCopy}
            >
              Clipboard
            </button>
          )}
          {copied && (
            <button
              className="px-4 py-2 rounded-lg bg-slate-300 mt-2"
              onClick={handleCopy}
            >
              Done
            </button>
          )}
        </div>
      </div>
      <div
        className={`absolute transition-transform ease-in-out duration-100 transform  p-[35px] mt-10 ${
          styles.container2
        } ${visibleList ? styles.active : ""}  bg-slate-800 shadow-xl`}
      >
        <div>
          <GradientGrid
            gradients={gradientsData.gradients}
            changeBackground={changeBackground}
          />
        </div>
      </div>
    </div>
  );
}
