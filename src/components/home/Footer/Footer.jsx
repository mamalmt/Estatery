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
    <div className="flex flex-col gap-5">
      <div className="px-5 gap-8 ">
        <Logo />
      </div>
      <div className="flex py-6">
        <div className="flex flex-col gap-9 px-5">
          <SelHome />
          <BuyHome />
          <Br />
        </div>
        <div className="flex flex-col gap-9">
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
