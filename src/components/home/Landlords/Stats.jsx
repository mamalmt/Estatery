function Stats() {
  return (
    <div className="flex flex-col  lg:flex-row lg:justify-around gap-10">
      <div className=" flex flex-col items-center gap-5  justify-center text-center">
        <h1 className="text-white  text-4xl font-bold ">7.4%</h1>
        <p className="text-lg  text-Gray font-normal  opacity-100">
          Property Return Rate
        </p>
        <hr className="text-white lg:hidden bg-white w-16 text-center " />
      </div>
      <div className="lg:flex hiddenDiv">
        <svg
          width="2"
          height="64"
          viewBox="0 0 2 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.75"
            y1="-3.27835e-08"
            x2="0.750003"
            y2="64"
            stroke="white"
            stroke-width="1.5"
          />
        </svg>
      </div>

      <div className=" flex flex-col items-center gap-5 justify-center text-center">
        <h1 className="text-white  text-4xl font-bold ">3,856</h1>
        <p className="text-lg  text-Gray font-normal  opacity-100">
          PProperty in Sell & Rent
        </p>
        <hr className="text-white lg:hidden bg-white w-16 text-center " />
      </div>
      <div className="lg:flex hiddenDiv">
        <svg
          width="2"
          height="64"
          viewBox="0 0 2 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.75"
            y1="-3.27835e-08"
            x2="0.750003"
            y2="64"
            stroke="white"
            stroke-width="1.5"
          />
        </svg>
      </div>

      <div className=" flex flex-col items-center gap-5  justify-center text-center">
        <h1 className="text-white  text-4xl font-bold ">2,540</h1>
        <p className="text-lg  text-Gray font-normal  opacity-100">
          Daily Completed Transactions
        </p>
        <hr className="text-white lg:hidden bg-white w-16 text-center " />
      </div>
      <br />
      <br />
    </div>
  );
}

export default Stats;
