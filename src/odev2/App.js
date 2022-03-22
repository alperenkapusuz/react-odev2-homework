import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [sayac, setSayac] = useState(0);
  return (
    <div className="homepage">
      <div className="homepage__grid">
        <p className="homepage__p">You have pushed the button this many times times:</p>
        <p className="homepage__p__sayac">{sayac}</p>
        <button
          className="homepage__button"
          onClick={() => setSayac(sayac + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
