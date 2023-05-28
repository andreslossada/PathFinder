import { WikiButton } from "./WikiButton";
import { InfoJobsButton } from "./InfoJobsButton";
import { Searching } from "./Searching";
import Fade from "react-reveal/Fade";
import { useStore } from "../store/zustand";
import CardSkeleton from "./CardSkeleton";
import { mock } from "../store/mocks";

export default function Results() {
  const results = useStore((state) => state.results);
  const showRoadMap = true;

  return (
    <Fade bottom cascade>
      <div className=" grid  place-content-center w-[95vw] xl:w-[70vw] ">
        {mock?.results.length === 0 &&
          Array.from({ length: 3 }, (_, i) => {
            return (
              <div key={i}>
                <CardSkeleton key={i} />
                {i === 2 && <Searching />}
              </div>
            );
          })}
        {!showRoadMap &&
          mock?.results.map((career, i) => (
            <div
              key={i}
              className="flex justify-between my-5 rounded-xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800  overflow-hidden pb-2 static"
            >
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
              <div className=" bg-white dark:bg-gray-900 flex-1 px-8 lg:py-4 ">
                <header>
                  <h2 className=" lg:text-3xl font-bold text-gray-800 dark:text-white pt-4">
                    {career.career}
                  </h2>
                </header>
                <p className="text-md text-slate-300 my-4">
                  {career.description}
                </p>
                <p className="text-sm text-slate-400 my-4">{career.avoid}</p>
                <dl className="flex mt-4 mb-2 gap-10 justify-start">
                  <div className="flex flex-col-reverse self-start">
                    <dt className="lg:text-md font-medium text-slate-200">
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
              <div className="flex flex-col justify-center bg-white dark:bg-gray-900 pr-5 gap-5 ">
                <WikiButton career={career?.career} />
                <InfoJobsButton career={career?.key_word} />
              </div>
            </div>
          ))}
        {showRoadMap && <div>aqui va el roadmap</div>}
      </div>
    </Fade>
  );
}
