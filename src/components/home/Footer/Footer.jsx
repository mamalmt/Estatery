import Logo from "../Hero/nav/Logo";
import About from "./Aout";
import Br from "./Br";
import BuyHome from "./BuyHome";
import Copyright from "./Copyright";
import Resources from "./Resources";
import SelHome from "./SelHome";
import Termes from "./Termes";

function Footer() {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex flex-col lg:flex-row container lg:justify-around ">
        <div className=" gap-8 ">
          <Logo />
        </div>
        <div className="  py-6 gap-7 lg:gap-x-40 grid grid-cols-2   lg:grid-cols-3">
          <SelHome />
          <BuyHome />
          <Br />

          <Termes />
          <About />
          <Resources />
        </div>
      </div>

      <Copyright />
      <br />
    </div>
  );
}

export default Footer;
