function Headline() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-Dork w-60 lg:w-[544px]  lg:text-4xl   text-center text-3xl font-bold">
          Based on your location
        </h1>
        <h3 className="text-Dork opacity-95  text-center text-base font-normal">
          Some of our picked properties near you location.
        </h3>
      </div>
    </>
  );
}

export default Headline;
