import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeminiTestButton from "../components/gemini-test";
import AzureTestButton from "../components/azure-test";
import GetImgTestButton from "../components/test-getimg";
import ImageCarousel from "../components/image-carousel";

function App() {
  const [count, setCount] = useState(0);
  const imageUrls = [
    "basquiatMoose.png",
    "frog2.png",
    "Glitch.png",
    "guillotine.png",
    "haringMoose.png",
  ];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <GeminiTestButton />
        <AzureTestButton />
        <GetImgTestButton prompt="A cat in a hat" />
      </div>
      <div className="card">
        <ImageCarousel imageUrls={imageUrls} />
      </div>
    </>
  );
}

export default App;
