import Benefit from "./Benefit/Benefit";


import Hero from "./Hero/Hero";

function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Benefit />
    
    </div>
  );
}

export default HomePage;
