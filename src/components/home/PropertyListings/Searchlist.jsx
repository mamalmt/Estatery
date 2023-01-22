function Searchlist() {
  return (
    <div className=" flex flex-col  lg:flex-row-reverse lg:justify-between gap-4 lg:gap-0">
      <div className="flex justify-start  gap-5  p-3 w-full lg:w-[352px]  h-14  rounded-lg border-2 border-Gray   bg-PaleGray">
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="#7065F0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 22L20 20"
              stroke="#7065F0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <input
          type="text"
          className="    bg-PaleGray lg:focus:placeholder:text-PaleBlue placeholder:text-PaleDork  text-xlfont-bold focus:outline-none"
          placeholder="Search..."
        />
      </div>
      <div className="flex justify-center  items-center gap-5    w-full lg:w-1/3  h-16  rounded-lg border-2 border-Gray   bg-PaleGray">
        <button className="rent-btn" type="button">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4917 12.4416C14.775 14.1499 12.3167 14.6749 10.1584 13.9999L6.23337 17.9166C5.95004 18.2083 5.39171 18.3833 4.99171 18.3249L3.17504 18.0749C2.57504 17.9916 2.01671 17.4249 1.92504 16.8249L1.67504 15.0083C1.61671 14.6083 1.80837 14.0499 2.08337 13.7666L6.00004 9.84994C5.33337 7.68327 5.85004 5.22494 7.56671 3.5166C10.025 1.05827 14.0167 1.05827 16.4834 3.5166C18.95 5.97494 18.95 9.98327 16.4917 12.4416Z"
              stroke="#807CA8"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.7417 14.5752L7.65837 16.4919"
              stroke="#807CA8"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.0835 9.1665C12.7739 9.1665 13.3335 8.60686 13.3335 7.9165C13.3335 7.22615 12.7739 6.6665 12.0835 6.6665C11.3931 6.6665 10.8335 7.22615 10.8335 7.9165C10.8335 8.60686 11.3931 9.1665 12.0835 9.1665Z"
              stroke="#807CA8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Rent
        </button>
        <button className=" rent-btn" type="button">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1665 17.0832H5.83317C3.33317 17.0832 1.6665 15.8332 1.6665 12.9165V7.08317C1.6665 4.1665 3.33317 2.9165 5.83317 2.9165H14.1665C16.6665 2.9165 18.3332 4.1665 18.3332 7.08317V12.9165C18.3332 15.8332 16.6665 17.0832 14.1665 17.0832Z"
              stroke="#807CA8"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
              stroke="#807CA8"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.5835 7.9165V12.0832"
              stroke="#807CA8"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.4165 7.9165V12.0832"
              stroke="#807CA8"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Buy
        </button>
        <button className="rent-btn" type="button">
          <svg
            className="hover:text-PaleBlue "
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_178_280)">
              <path
                d="M17.2603 6.56848L11.705 2.25163C11.2175 1.87272 10.6175 1.66699 9.99984 1.66699C9.38218 1.66699 8.78214 1.87272 8.29463 2.25163L2.73838 6.56848C2.40447 6.82791 2.13431 7.16015 1.94854 7.53982C1.76277 7.91949 1.6663 8.33656 1.6665 8.75916V16.2522C1.6665 16.8043 1.886 17.3337 2.2767 17.724C2.6674 18.1144 3.1973 18.3337 3.74984 18.3337H16.2498C16.8024 18.3337 17.3323 18.1144 17.723 17.724C18.1137 17.3337 18.3332 16.8043 18.3332 16.2522V8.75916C18.3332 7.90266 17.9373 7.09403 17.2603 6.56848Z"
                stroke="#807CA8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_178_280">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Sell
        </button>
      </div>
    </div>
  );
}

export default Searchlist;
