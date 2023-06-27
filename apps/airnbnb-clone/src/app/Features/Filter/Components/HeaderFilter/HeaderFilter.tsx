export function HeaderFilter() {
  return (
    <div className="border-gray-300 border-[.5px] cursor-pointer drop-shadow-lg hover:drop-shadow-lg rounded-full w-fit p-2 h-[48px] flex items-center">
      <p className="border-gray-300 text-[15px] font-medium border-r-[.5px] last-of-type:border-r-0 px-4">
        Anywhere
      </p>
      <p className="border-gray-300 border-r-[.5px] last-of-type:border-r-0 px-4 font-medium text-[15px]">
        Any week
      </p>
      <p className="border-gray-300 text-[15px] border-r-[.5px] last-of-type:border-r-0 px-4 text-gray-400">
        Add guests
      </p>
      <div className="rounded-full w-[32px] h-[32px] flex items-center justify-center  bg-rose-500">
        <svg
          className="w-[13px] h-[13px]"
          fill="#ffffff"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z"
              fill-rule="evenodd"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
