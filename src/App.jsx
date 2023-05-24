import "./App.css";
import Results from "./components/Results";
import Stepper from "./components/Stepper";
import { useStore } from "./store/zustand";
import { ParticlesBackground } from "./components/ParticlesBackground";

function App() {
  const loading = useStore((state) => state.loading);
  const showResults = useStore((state) => state.showResults);
  return (
    <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900 via-black to-violet-900">
      <ParticlesBackground />
      <div className="h-screen grid place-content-center text-white mx-auto relative z-10 gap-10">
        <header>
          {!showResults && (
            <>
              <h1 className=" bg-gradient-to-r   dark:from-blue-300 dark:to-purple-700  bg-clip-text text-9xl font-extrabold text-transparent drop-shadow-2xl text-center tracking-wide">
                Path Finder
              </h1>
              <p className="relative text-2xl font-medium text-center text-gray-300">
                Your passion, your path. Explore career options now.
              </p>
            </>
          )}
        </header>
        {!showResults && !loading && <Stepper />}
        {showResults && <Results />}
      </div>
    </div>
  );
}

export default App;

