import Logo from "./Logo";
import Navigation from "./Navigation";
import ListLi from "./ListLi";
import Ctv from "./Ctv";
function NavBor() {
  return (
    <div className="w-full   bg-gradient-to-t from-Palewhite py-3 backdrop-blur-2xl flex justify-between pl-7 pr-7 items-center  gap-16">
      <div className=" flex gap-9 items-center">
        <Logo />
        <ListLi />
      </div>
      <div className="">
        <Navigation />
        <Ctv />
      </div>
    </div>
  );
}

export default NavBor;
