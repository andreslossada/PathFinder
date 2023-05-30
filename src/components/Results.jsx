import { WikiButton } from "./WikiButton";
import { InfoJobsButton } from "./InfoJobsButton";
import { Searching } from "./Searching";
import Fade from "react-reveal/Fade";
import { useStore } from "../store/zustand";
import CardSkeleton from "./CardSkeleton";
import { mock, mockRoadmap } from "../store/mocks";
import { processMessageToChatGPT } from "../utils/service";
import { ROADMAP_INITIAL_MESSAGES } from "../utils/prompts";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const navigate = useNavigate();
  //TODO:CHANGE TO REAL DATA
  const results = useStore((state) => state.results);
  const setRoadMap = useStore((state) => state.setRoadMap);

  const setLoading = useStore((state) => state.setLoading);
  const loading = useStore((state) => state.loading);

  const handleRoadMap = (career) => {
    navigate("/roadmap");
    setLoading(true);
    processMessageToChatGPT(career, ROADMAP_INITIAL_MESSAGES)
      .then((res) => {
        setRoadMap(JSON.parse(res));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fade bottom cascade>
      <div className=" grid  place-content-center w-[95vw] xl:w-[70vw]  mt-12  mx-auto   ">
        <button
          className="absolute top-12 left-12 z-10  p-3   text-white rounded-lg  h-9 w-9 flex justify-center items-center  transition duration-300 ease-in-out transform border-2 hover:drop-shadow-glow [&>*]:hover:-translate-x-1   "
          onClick={() => navigate("/")}
        >
          <ArrowBackIosNewIcon fontSize="xs" className="transform" />
        </button>
        {loading &&
          Array.from({ length: 3 }, (_, i) => {
            return (
              <div key={i}>
                <CardSkeleton key={i} />
                {i === 2 && <Searching label="Searching" />}
              </div>
            );
          })}
        {!loading &&
          results?.results.map((career, i) => (
            <>
              <div
                key={i}
                className="flex justify-between my-5 rounded-xl p-px bg-gradient-to-b   from-blue-800 to-purple-800  overflow-hidden pb-2  mt-7 relative"
              >
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                <div className=" bg-gray-900 flex-1 px-8 lg:py-4 ">
                  <header>
                    <h2 className=" lg:text-3xl font-bold  text-white pt-4">
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
                <div className="flex flex-col justify-center  bg-gray-900 pr-5 gap-5 ">
                  <WikiButton career={career?.career} />
                  <InfoJobsButton career={career?.key_word} />
                  <button
                    className=" shadow__btn px-3 py-2 lg:px-12 text-lg font-medium text-indigo-100 rounded-xl hover:text-white"
                    onClick={() => handleRoadMap(career?.career)}
                  >
                    Roadmap
                  </button>
                </div>
              </div>
            </>
          ))}
      </div>
    </Fade>
  );
}


