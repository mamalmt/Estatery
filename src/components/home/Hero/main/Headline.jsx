function Headline() {
  return (
    <>
      <div className=" flex flex-col gap-5 container w-full items-center lg:items-start lg:max-w-[700px]">
        <div className=" lg:max-w-[550px] leading-tight   text-center lg:text-left text-[40px] lg:text-[64px] lg:leading-tight font-bold">
          <h1>
            Buy, rent, or sell <br />
            your property <br />
            easily
          </h1>
        </div>

        <div className=" w-[320px]  lg:w-fit text-center lg:text-left text-[20px] font-normal">
          <h3>
            A great platform to buy, sell, or even rent your
            <h1 className="max-sm:hidden " />
            properties without any commisions.
          </h3>
        </div>
      </div>
    </>
  );
}

export default Headline;
