export function HeaderNav() {
  return (
    <div className="flex items-center justify-center">
      <p className="mr-6">Airbnb you home</p>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C12 21 16 18 16 12C16 6 12 3 12 3M12 21C12 21 8 18 8 12C8 6 12 3 12 3M3 12C3 7.02944 7.02944 3 12 3"
            stroke="#000000"
            stroke-width="1.5"
          ></path>
        </g>
      </svg>
      <div className="border-gray-300 border-[.5px] cursor-pointer drop-shadow-lg hover:drop-shadow-lg rounded-full w-fit px-2 h-[50px] flex items-center">
        <svg
          viewBox="0 -5.5 21 21"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          className="w-[15px] h-8 mr-3 ml-2"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>menu_list [#1527]</title>
            <desc>Created with Sketch.</desc> <defs> </defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-179.000000, -205.000000)"
                fill="#000000"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M123,55 L144,55 L144,53 L123,53 L123,55 Z M123,47 L144,47 L144,45 L123,45 L123,47 Z M123,51 L144,51 L144,49 L123,49 L123,51 Z"
                    id="menu_list-[#1527]"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <div className="flex items-center justify-center rounded-full w-8 h-8 bg-gray-500 p-[3px]">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="w-full h-full text-white rounded-full"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g
                color="#FFF"
                font-weight="400"
                font-family="Ubuntu"
                letter-spacing="0"
                word-spacing="0"
                white-space="normal"
                fill="white"
              >
                <path d="M8 2a2.84 2.84 0 0 0-1.12.221c-.345.141-.651.348-.906.615v.003l-.001.002c-.248.269-.44.592-.574.96-.137.367-.203.769-.203 1.2 0 .435.065.841.203 1.209.135.361.327.68.574.95l.001.002c.254.267.558.477.901.624v.003c.346.141.723.21 1.12.21.395 0 .77-.069 1.117-.21v-.002c.343-.147.644-.357.892-.625.255-.268.45-.59.586-.952.138-.368.204-.774.204-1.21h.01c0-.43-.065-.831-.203-1.198a2.771 2.771 0 0 0-.585-.963 2.5 2.5 0 0 0-.897-.618A2.835 2.835 0 0 0 7.999 2zM8.024 10.002c-2.317 0-3.561.213-4.486.91-.462.35-.767.825-.939 1.378-.172.553-.226.975-.228 1.71L8 14.002h5.629c-.001-.736-.052-1.159-.225-1.712-.172-.553-.477-1.027-.94-1.376-.923-.697-2.124-.912-4.44-.912z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
