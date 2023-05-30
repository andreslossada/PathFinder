import Stepper from "./Stepper";
export function Landing() {
  return (
    <div className="  text-white mx-auto  z-10 overflow-scrol">
      <main className="h-screen grid place-content-center">
        <header className="mb-10">
          <h1 className="bg-gradient-to-r from-blue-300 to-purple-700  bg-clip-text  font-extrabold text-transparent  text-center tracking-wide text-6xl lg:text-9xl drop-shadow-dark">
            Path Finder
          </h1>
          <p className="relative text-2xl font-medium text-center text-gray-300">
            Your passion, your path. Explore{" "}
            <span className="text-purple-500 drop-shadow-dark ">
              career options
            </span>{" "}
            now
          </p>
          <p className="relative text-md text-center text-gray-400 ">
            Answer at least <strong>one question</strong>
          </p>
        </header>
        <Stepper />
      </main>
    </div>
  );
}
