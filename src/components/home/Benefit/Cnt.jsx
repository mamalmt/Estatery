import Btn from "./Btn";
import Txt from "./Txt";
const bg = require("../../../assets/img/home-page/Betefit/HomeBetefit.png");
function Cnt() {
  return (
    <div className=" ">
      <div
        className="flex flex-col gap-4    bg-PaleGray w-full lg:w-[416px] h-[580px] lg:h-[500px] rounded-2xl border-2 border-Gray  bg-no-repeat bg-right-bottom"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Txt />
        <Btn />
      </div>
    </div>
  );
}

export default Cnt;
