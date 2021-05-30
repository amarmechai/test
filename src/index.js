import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { axiosInstance } from "./axios";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const kanyeRest = async () => {
      const response = await axios.get("https://api.kanye.rest/");

      setQuote(response.data.quote);
    };

    kanyeRest();
  }, []);

  return (
    <div>
      <p>{quote ? quote : "Loading ..."}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
