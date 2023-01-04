function Stats() {
  return (
    <div className="flex flex-col gap-10">
      <div className=" flex flex-col items-center gap-5  justify-center text-center">
        <h1 className="text-white  text-4xl font-bold ">7.4%</h1>
        <p className="text-lg  text-Gray font-normal  opacity-100">
          Property Return Rate
        </p>
        <hr className="text-white  bg-white w-16 text-center " />
      </div>
      <div className=" flex flex-col items-center gap-5 justify-center text-center">
        <h1 className="text-white  text-4xl font-bold ">3,856</h1>
        <p className="text-lg  text-Gray font-normal  opacity-100">
          PProperty in Sell & Rent
        </p>
        <hr className="text-white  bg-white w-16 text-center " />
      </div>
      <div className=" flex flex-col items-center gap-5  justify-center text-center">
        <h1 className="text-white  text-4xl font-bold ">2,540</h1>
        <p className="text-lg  text-Gray font-normal  opacity-100">
          Daily Completed Transactions
        </p>
        <hr className="text-white  bg-white w-16 text-center " />
      </div>

      <br />
      <br />
    </div>
  );
}

export default Stats;
