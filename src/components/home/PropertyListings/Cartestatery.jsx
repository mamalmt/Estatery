import React, { Component } from "react";

export default class Cartestatery extends Component {
  render() {
    return (
      <div className="flex-shrink-0  snap-center">
        <div className="snap-center flex flex-col  text-center gap-3 lg:gap-2 w-[300px]  lg:w-[352px]  h-[430px] lg:h-[  424px]  border border-Sea  border-opacity-20   rounded-xl">
          <div className="w-[300px]  lg:w-[352px] h-[210px]">
            <img
              className=" rounded-t-xl cursor-not-allowed"
              src={require("../../../assets/img/home-page/imgestatery1.png")}
              alt=""
            />
            <button
              className=" flex justify-center text-center    w-[113px]  h-8 text-white bg-PaleBlue rounded-lg  rounded-bl-none     "
              type="button "
            >
              <svg
                className="w-13px"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.0001 1.59998C4.21227 1.59998 4.41575 1.68426 4.56578 1.83429C4.71581 1.98432 4.8001 2.1878 4.8001 2.39998V3.19998H5.6001C5.81227 3.19998 6.01575 3.28426 6.16578 3.43429C6.31581 3.58432 6.4001 3.7878 6.4001 3.99998C6.4001 4.21215 6.31581 4.41563 6.16578 4.56566C6.01575 4.71569 5.81227 4.79998 5.6001 4.79998H4.8001V5.59998C4.8001 5.81215 4.71581 6.01563 4.56578 6.16566C4.41575 6.31569 4.21227 6.39998 4.0001 6.39998C3.78792 6.39998 3.58444 6.31569 3.43441 6.16566C3.28438 6.01563 3.2001 5.81215 3.2001 5.59998V4.79998H2.4001C2.18792 4.79998 1.98444 4.71569 1.83441 4.56566C1.68438 4.41563 1.6001 4.21215 1.6001 3.99998C1.6001 3.7878 1.68438 3.58432 1.83441 3.43429C1.98444 3.28426 2.18792 3.19998 2.4001 3.19998H3.2001V2.39998C3.2001 2.1878 3.28438 1.98432 3.43441 1.83429C3.58444 1.68426 3.78792 1.59998 4.0001 1.59998ZM4.0001 9.59998C4.21227 9.59998 4.41575 9.68426 4.56578 9.83429C4.71581 9.98432 4.8001 10.1878 4.8001 10.4V11.2H5.6001C5.81227 11.2 6.01575 11.2843 6.16578 11.4343C6.31581 11.5843 6.4001 11.7878 6.4001 12C6.4001 12.2121 6.31581 12.4156 6.16578 12.5657C6.01575 12.7157 5.81227 12.8 5.6001 12.8H4.8001V13.6C4.8001 13.8121 4.71581 14.0156 4.56578 14.1657C4.41575 14.3157 4.21227 14.4 4.0001 14.4C3.78792 14.4 3.58444 14.3157 3.43441 14.1657C3.28438 14.0156 3.2001 13.8121 3.2001 13.6V12.8H2.4001C2.18792 12.8 1.98444 12.7157 1.83441 12.5657C1.68438 12.4156 1.6001 12.2121 1.6001 12C1.6001 11.7878 1.68438 11.5843 1.83441 11.4343C1.98444 11.2843 2.18792 11.2 2.4001 11.2H3.2001V10.4C3.2001 10.1878 3.28438 9.98432 3.43441 9.83429C3.58444 9.68426 3.78792 9.59998 4.0001 9.59998ZM9.6001 1.59998C9.77665 1.59992 9.94826 1.65827 10.0882 1.76593C10.2281 1.87358 10.3285 2.02451 10.3737 2.19518L11.3169 5.75997L14.0001 7.30718C14.1217 7.37739 14.2227 7.47838 14.2929 7.59999C14.3631 7.7216 14.4001 7.85955 14.4001 7.99998C14.4001 8.1404 14.3631 8.27835 14.2929 8.39996C14.2227 8.52157 14.1217 8.62256 14.0001 8.69278L11.3169 10.2408L10.3729 13.8048C10.3276 13.9753 10.2273 14.126 10.0874 14.2336C9.94758 14.3411 9.77611 14.3994 9.5997 14.3994C9.42329 14.3994 9.25182 14.3411 9.11198 14.2336C8.97214 14.126 8.87178 13.9753 8.8265 13.8048L7.8833 10.24L5.2001 8.69278C5.07849 8.62256 4.97751 8.52157 4.9073 8.39996C4.83709 8.27835 4.80013 8.1404 4.80013 7.99998C4.80013 7.85955 4.83709 7.7216 4.9073 7.59999C4.97751 7.47838 5.07849 7.37739 5.2001 7.30718L7.8833 5.75918L8.8273 2.19518C8.87246 2.02464 8.97272 1.87381 9.11249 1.76617C9.25226 1.65852 9.42368 1.6001 9.6001 1.59998Z"
                  fill="white"
                />
              </svg>
              POPULAR
            </button>
          </div>
          <br />
          <div className="flex justify-around ">
            <div className="flex flex-col gap-4 lg:gap-2 text-left">
              <h1 className="text-PaleBlue text-2xl font-bold">
                {this.props.price}
                <span className="text-PaleDork opacity-90 text-lg font-normal">
                  /month
                </span>
              </h1>
              <h1 className="text-Dork text-2xl font-bold">
                {this.props.title}
              </h1>
              <h3 className="text-PaleDork opacity-80 text-lg font-normal lg:hidden">
                {this.props.location}
              </h3>
              <span className="hiddenDiv lg:flex lg:text-PaleDork lg:opacity-80 lg:text-lg lg:font-norma">
                {this.props.lglocation}
              </span>
            </div>
            <div className="cursor-pointer">
              <button
                className="flex justify-center items-center w-12 h-12 rounded-full border border-Sea  border-opacity-20 "
                type="button"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.31804 6.31798C3.90017 6.73584 3.5687 7.23192 3.34255 7.77789C3.1164 8.32386 3 8.90903 3 9.49998C3 10.0909 3.1164 10.6761 3.34255 11.2221C3.5687 11.768 3.90017 12.2641 4.31804 12.682L12 20.364L19.682 12.682C20.526 11.8381 21.0001 10.6935 21.0001 9.49998C21.0001 8.3065 20.526 7.1619 19.682 6.31798C18.8381 5.47406 17.6935 4.99995 16.5 4.99995C15.3066 4.99995 14.162 5.47406 13.318 6.31798L12 7.63598L10.682 6.31798C10.2642 5.90011 9.7681 5.56864 9.22213 5.34249C8.67616 5.11634 8.09099 4.99994 7.50004 4.99994C6.90909 4.99994 6.32392 5.11634 5.77795 5.34249C5.23198 5.56864 4.7359 5.90011 4.31804 6.31798V6.31798Z"
                    stroke="#7065F0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="text-center flex justify-center">
            <svg
              width="252"
              height="2"
              viewBox="0 0 252 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="1.25"
                x2="252"
                y2="1.25"
                stroke="#F0EFFB"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="flex justify-around">
            <div className="flex gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4998 8.98317V6.6665C17.4998 5.2915 16.3748 4.1665 14.9998 4.1665H11.6665C11.0248 4.1665 10.4415 4.4165 9.99984 4.8165C9.55817 4.4165 8.97484 4.1665 8.33317 4.1665H4.99984C3.62484 4.1665 2.49984 5.2915 2.49984 6.6665V8.98317C1.9915 9.44151 1.6665 10.0998 1.6665 10.8332V15.8332H3.33317V14.1665H16.6665V15.8332H18.3332V10.8332C18.3332 10.0998 18.0082 9.44151 17.4998 8.98317ZM11.6665 5.83317H14.9998C15.4582 5.83317 15.8332 6.20817 15.8332 6.6665V8.33317H10.8332V6.6665C10.8332 6.20817 11.2082 5.83317 11.6665 5.83317ZM4.1665 6.6665C4.1665 6.20817 4.5415 5.83317 4.99984 5.83317H8.33317C8.7915 5.83317 9.1665 6.20817 9.1665 6.6665V8.33317H4.1665V6.6665ZM3.33317 12.4998V10.8332C3.33317 10.3748 3.70817 9.99984 4.1665 9.99984H15.8332C16.2915 9.99984 16.6665 10.3748 16.6665 10.8332V12.4998H3.33317Z"
                  fill="#7065F0"
                />
              </svg>
              <h1 className="lg:hidden">{this.props.room} </h1>
              <h1 className="hiddenDiv lg:flex">{this.props.lgroom}</h1>
            </div>
            <div className="flex gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4998 8.33333H5.83317V5.83333C5.83317 4.91417 6.58067 4.16667 7.49984 4.16667C8.419 4.16667 9.1665 4.91417 9.1665 5.83333H10.8332C10.8332 3.995 9.33817 2.5 7.49984 2.5C5.6615 2.5 4.1665 3.995 4.1665 5.83333V8.33333H2.49984C2.27882 8.33333 2.06686 8.42113 1.91058 8.57741C1.7543 8.73369 1.6665 8.94565 1.6665 9.16667V10.8333C1.6665 13.005 3.0615 14.8525 4.99984 15.5417V18.3333H6.6665V15.8333H13.3332V18.3333H14.9998V15.5417C16.9382 14.8525 18.3332 13.005 18.3332 10.8333V9.16667C18.3332 8.94565 18.2454 8.73369 18.0891 8.57741C17.9328 8.42113 17.7209 8.33333 17.4998 8.33333V8.33333ZM16.6665 10.8333C16.6665 12.6717 15.1715 14.1667 13.3332 14.1667H6.6665C4.82817 14.1667 3.33317 12.6717 3.33317 10.8333V10H16.6665V10.8333Z"
                  fill="#7065F0"
                />
              </svg>

              <h1 className="lg:hidden">{this.props.wcc}</h1>
              <h1 className="hiddenDiv lg:flex">{this.props.lgwcc}</h1>
            </div>
            <div className="flex gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_361_23589)">
                  <path
                    d="M8.83148 15.5437L3.45631 10.1685C2.8479 9.56011 2.8479 8.43989 3.45631 7.83148L8.83148 2.45631C9.43989 1.8479 10.5601 1.8479 11.1685 2.45631L16.5437 7.83148C17.1521 8.43989 17.1521 9.56011 16.5437 10.1685L11.1685 15.5437C10.5601 16.1521 9.43989 16.1521 8.83148 15.5437V15.5437Z"
                    stroke="#7065F0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 13.1714L6.36371 17.5351"
                    stroke="#7065F0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.6362 17.5351L17.9999 13.1714"
                    stroke="#7065F0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_361_23589">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <h1>{this.props.area}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
