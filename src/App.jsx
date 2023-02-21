import React, { useState } from "react";
import researchTitles from "./data/title";
const getRandomResearchTitle = () => {
  return researchTitles[Math.floor(Math.random() * researchTitles.length)];
};
const App = () => {
  const [researchTitle, setResearchTitle] = useState(getRandomResearchTitle());
  const handleClick = () => {
    // shuffle array and pick random
    const randomResearchTitle = getRandomResearchTitle();
    setResearchTitle(randomResearchTitle);
  };

  return (
    <div className="App">
      <h1>{researchTitle}</h1>
      <button onClick={handleClick}>Generate</button>
    </div>
  );
};

export default App;
