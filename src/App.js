import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./Components/NewsCards/NewsCards.js";
import alanai from "./Components/image/alan-ai.png";

const alanKey =
  "ecc705bfc0c27cb9f26b571aff795c712e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  const [newsarticles, setNewsarticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newsHeadlines") {
          setNewsarticles(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <div
        style={{
          width: "40vw",
          height: "40vh",
          margin: "20px auto",
          backgroundColor: "green",
          borderRadius: 10,
        }}
      >
        <img
          style={{ width: "80%", height: "80%", margin: "auto" }}
          src={alanai}
          alt=" alan-ai logo"
        />
      </div>
      <div>
        <NewsCards articles={newsarticles} />
      </div>
    </div>
  );
};

export default App;
