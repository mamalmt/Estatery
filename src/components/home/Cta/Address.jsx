function Address() {
  return (
    <div className="flex flex-col gap-6">
      <div className=" flex flex-col gap-3">
        <input
          className=" bg-white w-[300px] h-14 rounded-xl text-PaleBlue focus:outline-none placeholder:text-lg placeholder:px-5"
          placeholder="Enter your email address"
          type="email"
        />
        <button className=" text-center rounded-lg h-12 w-[300px] bg-PaleBlue text-2xl text-white">
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
