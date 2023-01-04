import Features from "./Features";
import Headline from "./Headline";
import Stats from "./Stats";

function Landlords() {
  return (
    <div className="flex flex-col container bg-Sea gap-7">
      <Headline />
      <Features />
      <Stats />
    </div>
  );
}

export default Landlords;
