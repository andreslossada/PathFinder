import { mockRoadmap } from "../store/mocks";
import { useStore } from "../store/zustand";
export default function Roadmap() {
  const roadMap = useStore((state) => state.roadMap);
  // const roadMap = mockRoadmap;
  console.log(`🚀 ~ roadMap:`, roadMap);
  return (
    <section className="h-screen grid place-content-center ">
      <div className="my-5 grid-cols-1 gap-4 m-auto rounded-xl overflow-hidden  relative">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">
              Roadmap
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                {/* This is a roadmap for the career of{" "} */}
                <span className="text-xl font-bold">{roadMap.title}</span>
              </p>
            </div>
            <div className="mt-5">
              <div className="flex  flex-col">
                {roadMap?.steps.map((step, i) => (
                  <li key={i} className="list-none my-3">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <span className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center ring-4 ring-white">
                          {i + 1}
                        </span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg leading-6 font-medium text-gray-900">
                          {step.step}
                        </h4>
                        <p className="mt-2 text-sm text-gray-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
