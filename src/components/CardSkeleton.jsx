import { Skeleton } from "@mui/material";

export default function CardSkeleton() {

  return (
    <div className=" flex justify-between my-5 rounded-xl p-px bg-gradient-to-b   from-blue-800 to-purple-800  overflow-hidden pb-2  relative">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      <div className="bg-gray-900  flex-1 px-8  h-[20vh]">
        <Skeleton
          variant="text"
          animation="wave"
          width={"50%"}
          height={"5vh"}
          sx={{ bgcolor: "grey.900" }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          width={"50vw"}
          height={"10vh"}
          sx={{ bgcolor: "grey.900" }}
        />

        <dl className="flex gap-10 ">
          {Array.from({ length: 3 }, (_, i) => (
            <Skeleton
              key={i}
              variant="text"
              sx={{ bgcolor: "grey.900" }}
              width={"10vw"}
              height={"5vh"}
              animation="wave"
            />
          ))}
        </dl>
      </div>
    </div>
  );
}
