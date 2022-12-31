import React, { Component } from "react";

class CartSearch extends Component {
  render() {
    return (
      <div className=" flex flex-col justify-center lg:container  lg:justify-start  items-center lg:items-start ">
        <div className="flex  justify-center  ">
          <button
            className="w-24 h-12 lg:h-14 bg-white  text-Dork font-normal text-lg hover:font-medium   hover:text-PaleBlue  border-b-2   hover:border-b-4 border-Gray  hover:border-b-PaleBlue rounded-tl-lg"
            type="button"
          >
            Rent
          </button>
          <button
            className="w-24 h-12 lg:h-14 bg-white text-Dork  font-normal hover:font-medium text-lg  hover:text-PaleBlue  border-b-2  hover:border-b-4 border-Gray  hover:border-b-PaleBlue   "
            type="button"
          >
            Buy
          </button>
          <button
            className="w-24  h-12l g:h-14 bg-white text-Dork  font-normal hover:font-medium text-lg    rounded-tr-lg border-b-2 hover:text-PaleBlue    hover:border-b-4 border-Gray  hover:border-b-PaleBlue"
            type="button"
          >
            Sell
          </button>
        </div>
        <div className="flex justify-around lg:justify-around w-72 lg:w-[783px]  h-14 lg:h-[90px] p-1  bg-white  lg:rounded-tr-lg rounded-b-lg  ">
          <input
            type="text"
            placeholder="Search location"
            className="  text-Dork text-sm font-semibold lg:hidden   focus:placeholder:text-PaleBlue   focus:outline-none"
          />
          <button className="  w-8 h-8 ml-3 lg:hidden  ">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="8" fill="#7065F0" />
              <path
                d="M23.5832 31.5001C27.9554 31.5001 31.4998 27.9557 31.4998 23.5834C31.4998 19.2112 27.9554 15.6667 23.5832 15.6667C19.2109 15.6667 15.6665 19.2112 15.6665 23.5834C15.6665 27.9557 19.2109 31.5001 23.5832 31.5001Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M32.3332 32.3334L30.6665 30.6667"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className=" hidden lg:none lg:flex  lg:justify-around  lg:w-[783px]   lg:h-[90px]   lg:bg-white  lg:rounded-tr-lg lg:rounded-b-lg lg:p-5">
            <div className="   lg:flex lg:flex-col lg:h-48 ">
              <label htmlFor="" className=" lg:text-base">
                Location
              </label>
              <input
                type="text"
                className="  lg:w-36 lg:text-PaleDork lg:focus:placeholder:text-PaleBlue  lg:text-xl lg:font-bold focus:outline-none"
                placeholder="Barcelona, Spain"
              />
            </div>
            <button className=" ">
              <svg
                width="1"
                height="40"
                viewBox="0 0 1 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499998"
                  y2="40"
                  stroke="#E0DEF7"
                />
              </svg>
            </button>
            <div className=" lg:flex lg:flex-col lg:h-48 ">
              <label htmlFor="" className=" lg:text-base">
                When
              </label>
              <div className="  lg:flex">
                <input
                  type="text"
                  className=" lg:w-48 lg:text-PaleDork lg:focus:placeholder:text-PaleBlue lg:text-xl lg:font-bold  lg:focus:outline-none"
                  placeholder="Select Move-in Date "
                />
                <input
                  type="month"
                  className="  lg:w-7 lg:text-Gray lg:text-xl lg:font-bold  lg:focus:outline-none "
                  placeholder="Select Move-in Date "
                />
              </div>
            </div>
            <button className="   ">
              <svg
                width="1"
                height="40"
                viewBox="0 0 1 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499998"
                  y2="40"
                  stroke="#E0DEF7"
                />
              </svg>
            </button>
            <button className="  lg:w-52  lg:h-14 lg:text-white border-2 hover:text-Dork hover:font-bold lg:text-base lg:font-semibold lg:bg-PaleBlue  lg:rounded-xl  lg:hover:bg-white  lg:hover:border-2  lg:hover:border-Dork  lg:hover:rounded-xl  lg:active:text-white  lg:active:bg-Dork  lg:active:duration-700   lg:duration-500 ">
              Browse Properties
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSearch;
