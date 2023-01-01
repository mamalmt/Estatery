import Benefit from "./Benefit/Benefit";
import Hero from "./Hero/Hero";
import Propertylistings from "./PropertyListings/PropertyListings";

function HomePage() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <Benefit />
      <Propertylistings />
    </div>
  );
}

export default HomePage;
