function Address() {
  return (
    <div className="flex flex-col gap-6 lg:justify-center  lg:items-center   ">
      <div className=" flex flex-col lg:flex-row  lg:justify-between  lg:p-3  lg:items-center   lg:w-[543px]  lg:h-[80px] lg:bg-white lg:rounded-xl lg:gap-0 gap-3">
        <input
          className=" bg-white w-[300px] h-14 rounded-xl text-PaleBlue focus:outline-none placeholder:text-lg placeholder:px-5"
          placeholder="Enter your email address"
          type="email"
        />
        <button className=" text-center rounded-lg h-12 w-[300px] lg:w-[140px] bg-PaleBlue text-2xl lg:text-base  text-white">
          Submit
        </button>
      </div>

      <div className="">
        <p className="text-lg  text-Sea font-normal text-center opacity-60">
          Join <span className="text-PaleBlue  opacity-100">10,000+</span> other
          landlords in our estatery community.
        </p>
      </div>
    </div>
  );
}

export default Address;
