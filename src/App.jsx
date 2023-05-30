import GitHubIcon from "@mui/icons-material/GitHub";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./components/Landing";
import { ParticlesBackground } from "./components/ParticlesBackground";
import Results from "./components/Results";
import Roadmap from "./components/RoadMap";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-900 bg-[url('./assets/glowBackground.svg')] bg-cover flex relative ">
      <ParticlesBackground />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/careers" element={<Results />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
      <a
        href="https://github.com/dresan22/PathFinder"
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-5 right-5 hover:scale-110 transform transition-all duration-300 hover:drop-shadow-glow"
      >
        <GitHubIcon className=" text-white text-7xl" fontSize="" />
      </a>
    </div>
  );
}

export default App;
