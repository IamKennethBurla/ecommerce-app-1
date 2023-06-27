export function RoomCardImageNav() {
  return (
    <div className="flex border-white justify-between w-full h-7 absolute top-[45%] px-3">
      <div className="flex items-center drop-shadow-lg justify-center rounded-full w-7 h-7 cursor-pointer   bg-white opacity-0 group-hover:opacity-100 ease-in-out duration-300">
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Arrow / Chevron_Left_MD">
              <path
                id="Vector"
                d="M14 16L10 12L14 8"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div className="flex items-center drop-shadow-lg justify-center rounded-full w-7 h-7 cursor-pointer bg-white opacity-0 group-hover:opacity-100 ease-in-out duration-300 ">
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Arrow / Chevron_Right_MD">
              <path
                id="Vector"
                d="M10 8L14 12L10 16"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
