function Headline() {
  return (
    <div className=" flex flex-col lg:flex-row  lg:justify-between    gap-5  lg:gap-0  py-9 ">
      <h1 className=" text-white text-4xl font-semibold   text-center lg:w-[550px] lg:leading-relaxed lg:text-start ">
        We make it easy for <span className="text-PaleBlue"> tenants</span> and
        <span className="text-PaleBlue">landlords</span>.
      </h1>
      <p className="text-center   text-Gray font-normal opacity-75  lg:text-start  p-1 lg:w-[408px]">
        Whether it’s selling your current home, getting financing, or buying a
        new home, we make it easy and efficient. The best part? you’ll save a
        bunch of money and time with our services.
      </p>
    </div>
  );
}

export default Headline;
