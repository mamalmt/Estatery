import Main from "./main/Main";
import NavBor from "./nav/NavBor";

function Hero() {
  return (
    <div className=" flex flex-col gap-10  bg-gradient-to-b from-PalePurple to-Beige  w-full h-full  ">
      <NavBor />
      <Main />
    </div>
  );
}

export default Hero;
