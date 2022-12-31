function Ctv() {
  return (
    <div className="hidden  sm:hidden lg:flex lg: gap-5 ">
      <button
        className="   h-12  w-24 text-center   font-semibold    hover:font-bold   active:font-normal  duration-500  text-PaleBlue hover:text-white    bg-PaleGray   hover:bg-PaleBlue   active:bg-Dork  border-2   border-Gray  rounded-lg"
        type="button"
      >
        Login
      </button>
      <button
        className="   h-12  w-28  text-center  font-semibold    hover:font-bold   active:font-medium   duration-500   text-white   hover:text-PaleBlue  bg-PaleBlue hover:bg-PaleGray      active:text-Dork        hover:border-2    hover:border-Gray rounded-lg "
        type="button"
      >
        Sign up
      </button>
    </div>
  );
}

export default Ctv;
