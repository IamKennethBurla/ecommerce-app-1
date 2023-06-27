export function RoomCard() {
  return (
    <div className="group rounded-lg w-[320px] h-fit">
      <div className="rounded-[15px] relative bg-gray-500 w-full h-[300px] overflow-hidden">
        <div className="">
          <img
            className="max-w-[430px] h-[300px] object-left"
            src="https://a0.muscache.com/im/pictures/2aac6bf8-5c7a-4f52-8e14-b98426c86ff2.jpg?im_w=720"
            alt=""
          />
        </div>
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
        <div className="flex absolute w-full bottom-4 justify-center">
          <div className="w-[7px] h-[7px] rounded-full opacity-50 bg-white mr-2 last-of-type:mr-0 "></div>
          <div className="w-[7px] h-[7px] rounded-full opacity-50 bg-white mr-2 last-of-type:mr-0"></div>
          <div className="w-[7px] h-[7px] rounded-full bg-white mr-2 last-of-type:mr-0"></div>
          <div className="w-[7px] h-[7px] rounded-full opacity-50 bg-white mr-2 last-of-type:mr-0"></div>
          <div className="w-[7px] h-[7px] rounded-full opacity-50 bg-white mr-2 last-of-type:mr-0"></div>
        </div>
        <svg
          fill="#ffffff"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          className="w-6 h-5 absolute right-4 top-4"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M8.999 3.567c0.98 0 2.753 0.469 5.628 3.301l1.425 1.403 1.404-1.426c1.996-2.028 4.12-3.288 5.543-3.288 1.919 0 3.432 0.656 4.907 2.128 1.39 1.386 2.156 3.23 2.156 5.191 0.001 1.962-0.764 3.807-2.169 5.209-0.114 0.116-6.156 6.634-11.218 12.097-0.238 0.227-0.511 0.26-0.656 0.26-0.143 0-0.412-0.032-0.65-0.253-1.233-1.372-10.174-11.313-11.213-12.351-1.391-1.388-2.157-3.233-2.157-5.194s0.766-3.804 2.158-5.192c1.353-1.352 2.937-1.885 4.842-1.885zM8.999 1.567c-2.392 0-4.5 0.715-6.255 2.469-3.659 3.649-3.659 9.566 0 13.217 1.045 1.045 11.183 12.323 11.183 12.323 0.578 0.578 1.336 0.865 2.093 0.865s1.512-0.287 2.091-0.865c0 0 11.090-11.97 11.208-12.089 3.657-3.652 3.657-9.57 0-13.219-1.816-1.813-3.845-2.712-6.319-2.712-2.364 0-5 1.885-6.969 3.885-2.031-2-4.585-3.874-7.031-3.874v0z"></path>
          </g>
        </svg>
      </div>
      <div className="relative">
        <div className="absolute top-0 right-0 flex items-center">
          <svg
            fill="#000000"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 mr-1"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>star</title>
              <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path>
            </g>
          </svg>
          <p>4.87</p>
        </div>
        <h2 className="mt-3 font-medium mb-[-3px]">El Nido, Philippines</h2>
        <p className="text-gray-500 mb-[-3px]">410 kilometers away</p>
        <p className="text-gray-500">6 nights</p>
        <p className="underline mt-1">
          <span className="font-medium">₱51,353</span> total before taxes
        </p>
      </div>
    </div>
  );
}
