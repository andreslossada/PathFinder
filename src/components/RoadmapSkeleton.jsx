import { Skeleton } from "@mui/material";
import { Searching } from "./Searching";

export default function RoadmapSkeleton() {
  return (
    <section className="h-screen grid place-content-center mx-auto">
      <div className="my-5 grid-cols-1 gap-4 m-auto w-[50vw]  relative overflow-hidden rounded-xl">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="bg-white overflow-hidden shadow rounded-lg ">
          <div className="px-4 py-5 sm:p-6">
            <Skeleton height={50} />
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <Skeleton height={50} />
            </div>
            <div className="mt-5">
              <div className="flex  flex-col">
                {Array.from({ length: 4 }, (_, i) => (
                  <div key={i} className="my-5 flex gap-7 items-center">
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton width={"90%"} height={50} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Searching label="Generaring Roadmap" />
    </section>
  );
}
