import Benefit from "./Benefit/Benefit";
import Cta from "./Cta/Cta";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Landlords from "./Landlords/Landlords";
import Propertylistings from "./PropertyListings/PropertyListings";

function HomePage() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <Benefit />
      <Propertylistings />
      <div className="">
        <Landlords />
        <Cta />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
