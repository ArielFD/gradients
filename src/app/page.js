"use client";

import Navbar from "./ui/navbar";
import collection from "/collection.json";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [backgroundGradient, setBackgroundGradient] = useState("");
  const [currentIndexBackground, setCurrentIndexBackground] = useState(0);
  const [gradientDirection, setGradientDirection] = useState("to bottom");

  // Function to select a random gradient
  const selectRandomGradient = () => {
    const currentBackground = Math.floor(
      Math.random() * collection.gradients.length
    );
    const randomGradient = collection.gradients[currentBackground];
    const gradientString = `linear-gradient(${gradientDirection}, ${randomGradient.colors.join(
      ", "
    )})`;
    setCurrentIndexBackground(currentBackground);
    setBackgroundGradient(gradientString);
  };

  // Change gradient onMounted
  useEffect(() => {
    selectRandomGradient();
  }, []);

  const changeGradient = (newGradient, directions) => {
    setBackgroundGradient(newGradient);
    setGradientDirection(directions);
  };

  const handleNext = () => {
    const nextIndex =
      (currentIndexBackground + 1) % collection.gradients.length;
    setCurrentIndexBackground(nextIndex);

    const nextGradient = collection.gradients[nextIndex];
    const gradientString = `linear-gradient(${gradientDirection}, ${nextGradient.colors.join(
      ", "
    )})`;
    setBackgroundGradient(gradientString);
  };

  const handlePrevius = () => {
    const previusIndex =
      (currentIndexBackground + (collection.gradients.length - 1)) %
      collection.gradients.length;
    setCurrentIndexBackground(previusIndex);

    const previusGradient = collection.gradients[previusIndex];
    const gradientString = `linear-gradient(${gradientDirection}, ${previusGradient.colors.join(
      ", "
    )})`;
    setBackgroundGradient(gradientString);
  };

  return (
    <main
      style={{
        background: backgroundGradient,
      }}
      className="relative min-h-screen flex flex-col items-center justify-center gap-2 font-sans"
    >
      <Navbar
        changeGradient={changeGradient}
        backgroundGradient={backgroundGradient}
        gradientDirection={gradientDirection}
      />
      <h1 className="absolute top-12 font-bold">
        {collection.gradients[currentIndexBackground].name}
      </h1>
      <div className="flex flex-row w-full justify-between px-10">
        <button onClick={handlePrevius} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
            className="active:fill-slate-100 hover:h-10 w-10"
          >
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
        </button>
        <button onClick={handleNext} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
            className="active:fill-slate-100 hover:h-10 w-10"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </button>
      </div>
    </main>
  );
}
