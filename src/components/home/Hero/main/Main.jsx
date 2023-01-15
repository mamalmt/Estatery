import Headline from "./Headline";
import CartSearch from "./CartSearch";
import Numbers from "./Numbers";
import Testimonial from "./Testimonial";

function Main() {
  return (
    <>
      <div className=" flex flex-col gap-20  bg-none lg:gap-6  lg:bg-no-repeat lg:bg-right lg:-z-0 ">
        <div className=" hiddenDiv lg:flex   lg:absolute  lg:mb-[100px] lg:ml-[800px] lg:-z-10">
          <img
            className="lg:w-[710px] lg:h-[630px] "
            src={require("../../../../assets/img/home-page/maine/Frame14265.png")}
            alt=""
          />
        </div>

        <div className="lg:flex lg:justify-start lg:-z-0">
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
