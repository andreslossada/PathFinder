// eslint-disable-next-line react/prop-types
export function WikiButton({ career }) {
  return (
    <a
      href={`https://en.wikipedia.org/wiki/${career}`}
      className="relative  items-center px-3 py-2 flex justify-center overflow-hidden text-lg font-medium text-indigo-100 border-2 border-[#9333ea] rounded-xl hover:text-white group hover:bg-gray-900"
      target="_blank"
      rel="noreferrer"
    >
      <span className="absolute left-0 block w-full h-0 transition-all bg-[#9333ea] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
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
  );
}
