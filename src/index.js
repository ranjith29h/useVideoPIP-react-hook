import React from "react";
import ReactDOM from "react-dom";

import { useVideoPIP } from "./useVideoPIP";
import "./styles.css";

function App() {
  const { setVideoId } = useVideoPIP(null);
  return (
    <div className="App">
      <h1>Video PIP </h1>
      <video width="320" height="240" controls id="one">
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <br />
      <button onClick={() => setVideoId("one")}>PIP Mode</button>
      <br />
      <br />
      <video width="320" height="240" controls id="two">
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <br />
      <button data-video="two" onClick={() => setVideoId("two")}>
        PIP Mode
      </button>
      <br/>
      <a href="https://gist.github.com/jsturgis/3b19447b304616f18657">Thank you (Video source)</a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
