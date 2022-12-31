import Headline from "./Headline";
import CartSearch from "./CartSearch";
import Numbers from "./Numbers";
import Testimonial from "./Testimonial";
const ba = require("../../../../assets/img/home-page/maine/Frame14265.png");
function Main() {
  return (
    <>
      <div
        className=" flex flex-col gap-20  bg-none lg:gap-6  lg:bg-no-repeat lg:bg-right  "
        style={{ backgroundImage: `url(${ba})` }}
      >
        <div className="lg:flex lg:justify-start ">
          <Headline />
          <Testimonial />
        </div>

        <CartSearch />
        <Numbers />
      </div>
    </>
  );
}
export default Main;
