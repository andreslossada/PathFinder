import "./App.css";
import Results from "./components/Results";
import Stepper from "./components/Stepper";
import { useStore } from "./store/zustand";
import { ParticlesBackground } from "./components/ParticlesBackground";
import RoadmapSkeleton from "./components/RoadmapSkeleton";
import Roadmap from "./components/RoadMap";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  // const showResults = true;
  const showResults = useStore((state) => state.showResults);
  return (
    <div className="bg-gray-900 bg-[url('./assets/glowBackground.svg')] bg-cover flex relative ">
      <ParticlesBackground />
      <div className="  text-white mx-auto relative z-10 overflow-scrol">
        {!showResults && (
          <main className="h-screen grid place-content-center">
            <header className="">
              <h1 className="bg-gradient-to-r from-blue-300 to-purple-700  bg-clip-text  font-extrabold text-transparent  text-center tracking-wide text-6xl lg:text-9xl drop-shadow-dark">
                Path Finder
              </h1>
              <p className="relative text-2xl font-medium text-center text-gray-300 mb-10">
                Your passion, your path. Explore{" "}
                <span className="text-purple-500 drop-shadow-glow ">
                  career options
                </span>{" "}
                now.
              </p>
            </header>
            <Stepper />
          </main>
        )}
        {showResults && <Results />}
      </div>
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

