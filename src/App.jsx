import React, { useState } from "react";
import capstoneTitles from "./data/Title";
import "./App.css";
import backg from "./assets/bg.gif";
const getRandomCapstoneTitle = () => {
  return capstoneTitles[Math.floor(Math.random() * capstoneTitles.length)];
};
const App = () => {
  const [capstoneTitle, setCapstoneTitle] = useState(getRandomCapstoneTitle());
  const handleClick = () => {
    // shuffle array and pick random
    const randomCapstoneTitle = getRandomCapstoneTitle();
    setCapstoneTitle(randomCapstoneTitle);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[url('./assets/bg.gif')]">
      <div className="w-3/4 flex md:flex-row flex-col md:gap-24 gap-10">
        <div className="md:w-1/2">
          <h1 className="text-white text-6xl font-serif font-bold mt-10">
            TitleCraft
          </h1>
          <p className="text-white text-base">
            Welcome to TitleCraft, the ultimate solution for crafting
            outstanding and effective titles for your capstone projects.
            TitleCraft is an innovative and user-friendly web application that
            generates impressive titles that can be use for your project.
          </p>
        </div>
        <div className="md:w-1/2 card rounded-lg flex flex-col justify-center items-center h-60 px-5 py-8 gap-8">
          <h1 className="text-white text-center h-10">{capstoneTitle}</h1>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={handleClick}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
