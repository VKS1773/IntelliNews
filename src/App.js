import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./Components/NewsCards/NewsCards";

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
        } else if (command === "testcommand") {
          alert("it is alert");
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>Hello there is a world</h1>
      <div>
        <NewsCards articles={newsarticles} />
      </div>
    </div>
  );
};

export default App;
