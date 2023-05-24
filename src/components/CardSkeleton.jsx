import { Skeleton } from "@mui/material";

export default function CardSkeleton() {
  return (
    <div className="flex justify-between my-5 rounded-xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800  overflow-hidden pb-2  relative">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      <div className=" bg-gray-900  flex-1 px-8 py-4">
        <Skeleton
          variant="text"
          animation="wave"
          width={"50%"}
          height={50}
          sx={{ bgcolor: "grey.900" }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          width={"100%"}
          height={130}
          sx={{ bgcolor: "grey.900" }}
        />

        <dl className="flex gap-10 ">
          {Array.from({ length: 3 }, (_, i) => (
            <Skeleton
              key={i}
              variant="text"
              sx={{ bgcolor: "grey.900" }}
              width={100}
              height={50}
              animation="wave"
            />
          ))}
        </dl>
      </div>
    </div>
  );
}
