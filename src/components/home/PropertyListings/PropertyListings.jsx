import Headline from "./Headline";
import ListCartEstatery from "./ListCartEstatery";
import Searchlist from "./Searchlist";

function Propertylistings() {
  return (
    <div className="flex flex-col gap-8 container ">
      <Headline />
      <Searchlist />

      <ListCartEstatery />
    </div>
  );
}

export default Propertylistings;
