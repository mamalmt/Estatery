import Features from "./Features";
import Headline from "./Headline";
import Stats from "./Stats";

function Landlords() {
  return (
    <div className="flex flex-col container bg-Sea  lg:gap-11 gap-7 lg:h-[800px]">
      <Headline />
      <Features />
      <hr className="hiddenDiv lg:flex " />
      <Stats />
    </div>
  );
}

export default Landlords;
