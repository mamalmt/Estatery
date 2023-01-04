function Features() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-5 p-4 bg-white bg-opacity-50 rounded-xl">
        <a href="">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28" cy="28" r="28" fill="#100A55" />
            <path
              d="M24.5002 39.6667H31.5002C37.3335 39.6667 39.6668 37.3333 39.6668 31.5V24.5C39.6668 18.6667 37.3335 16.3333 31.5002 16.3333H24.5002C18.6668 16.3333 16.3335 18.6667 16.3335 24.5V31.5C16.3335 37.3333 18.6668 39.6667 24.5002 39.6667Z"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.6167 27.9999V26.2732C24.6167 24.0449 26.1917 23.1465 28.1167 24.2549L29.61 25.1182L31.1034 25.9815C33.0284 27.0899 33.0284 28.9099 31.1034 30.0182L29.61 30.8815L28.1167 31.7449C26.1917 32.8532 24.6167 31.9432 24.6167 29.7265V27.9999Z"
              stroke="white"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <h1 className="text-2xl text-white font-bold ">Virtual home tour</h1>
        <p className="text-lg  text-Gray font-normal  lg:bg-opacity-100">
          You can communicate directly with landlords and we provide you with
          virtual tour before you buy or rent the property.
        </p>
      </div>
      <div className="flex flex-col gap-5 p-4 bg-white  rounded-xl">
        <a href="">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32" cy="32" r="31.5" fill="white" stroke="#E0DEF7" />
            <circle cx="32" cy="32" r="28" fill="#E8E6F9" />
            <g clip-path="url(#clip0_361_23142)">
              <path
                d="M21.6295 32H18.6665L31.9998 18.6667L45.3332 32H42.3702"
                stroke="#7065F0"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.6294 32V42.3704C21.6294 43.1562 21.9416 43.9098 22.4972 44.4655C23.0529 45.0212 23.8065 45.3333 24.5924 45.3333H39.4072C40.193 45.3333 40.9466 45.0212 41.5023 44.4655C42.058 43.9098 42.3701 43.1562 42.3701 42.3704V32"
                stroke="#7065F0"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28 34.0002L30.6667 36.6668L36 31.3335"
                stroke="#7065F0"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_361_23142">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="translate(16 16)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
        <h1 className="text-2xl text-Dork font-bold ">Find the best deal</h1>
        <p className="text-lg  text-Sea opacity-75 font-normal  lg:bg-opacity-100">
          Browse thousands of properties, save your favorites and set up search
          alerts so you don’t miss the best home deal!
        </p>
      </div>
      <div className="flex flex-col gap-5 p-4 bg-PaleBlue  rounded-xl">
        <a href="">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="32"
              cy="32"
              r="31"
              fill="white"
              stroke="#E0DEF7"
              stroke-width="2"
            />
            <path
              d="M44 25.3334V38.6667C44 42.6667 42 45.3334 37.3333 45.3334H26.6667C22 45.3334 20 42.6667 20 38.6667V25.3334C20 21.3334 22 18.6667 26.6667 18.6667H37.3333C42 18.6667 44 21.3334 44 25.3334Z"
              stroke="#7065F0"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M35.3335 22V24.6667C35.3335 26.1333 36.5335 27.3333 38.0002 27.3333H40.6668"
              stroke="#7065F0"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.6665 33.3333H31.9998"
              stroke="#7065F0"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.6665 38.6667H37.3332"
              stroke="#7065F0"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <h1 className="text-2xl text-white font-bold ">Get ready to apply</h1>
        <p className="text-lg  text-Gray font-normal  lg:bg-opacity-100">
          Find your dream house? You just need to do a little to no effort and
          you can start move in to your new dream home!
        </p>
      </div>
      <hr />
      <br />
    </div>
  );
}

export default Features;
