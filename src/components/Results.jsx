import Fade from "react-reveal/Fade";
import { useStore } from "../store/zustand";
import CardSkeleton from "./CardSkeleton";

export default function Results() {
  const results = useStore((state) => state.results);
  return (
    <Fade bottom cascade>
      <div className="h-[80vh]grid place-content-center w-[70vw] ">
        {results?.results.length === 0 &&
          Array.from({ length: 3 }, (_, i) => {
            return (
              <div key={i}>
                <CardSkeleton key={i} />
              </div>
            );
          })}
        {results?.results.length === 0 && (
          <Fade bottom delay={1000}>
            <p className="text-lg text-white text-center">Searching...</p>
            <p className="text-lg text-gray-400 text-center">
              This can take several seconds
            </p>
          </Fade>
        )}
        {results?.results.map((career, i) => (
          <div
            key={i}
            className="flex justify-between my-5 rounded-xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800  overflow-hidden pb-2 static"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
            <div className=" bg-white dark:bg-gray-900 flex-1 px-8 py-4 ">
              <header>
                <h2 className=" text-3xl font-bold text-gray-800 dark:text-white pt-4">
                  {career.career}
                </h2>
              </header>
              <p className="text-md text-slate-300 my-4">
                {career.description}
              </p>
              <p className="text-sm text-slate-400 my-4">{career.avoid}</p>
              <dl className="flex mt-4 mb-2 gap-10 justify-start">
                <div className="flex flex-col-reverse self-start">
                  <dt className="text-md font-medium text-slate-200">
                    {career.difficulty}
                  </dt>
                  <dd className="text-xs text-slate-300">Difficulty </dd>
                </div>

                <div className="flex flex-col-reverse ml-3 sm:ml-6 self-start">
                  <dt className="text-md font-medium text-slate-200">
                    {career.education}
                  </dt>
                  <dd className="text-xs text-slate-300">
                    Education/Requirements
                  </dd>
                </div>
                <div className="flex flex-col-reverse ml-3 sm:ml-6 self-start">
                  <dt className="text-md font-medium text-slate-200">
                    {career.salary}
                  </dt>
                  <dd className="text-xs text-slate-300">Average salary</dd>
                </div>
              </dl>
            </div>
            <div className="flex flex-col justify-center bg-white dark:bg-gray-900 pr-5 gap-5">
              <a
                href={`https://en.wikipedia.org/wiki/${career.key_word}`}
                className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-100 border-2 border-indigo-600 rounded-xl hover:text-white group hover:bg-gray-900"
                target="_blank"
                rel="noreferrer"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">More info</span>
              </a>
              <a
                href={`https://www.infojobs.net/jobsearch/search-results/list.xhtml?keyword=${career.key_word}`}
                className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-100 border-2 border-indigo-600 rounded-xl hover:text-white group hover:bg-gray-900"
                target="_blank"
                rel="noreferrer"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Search in Infojobs</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Fade>
  );
}
