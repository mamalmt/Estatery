import Headline from "./Headline";
import LinkCartPlus from "./LinkCartPlus";
import ListCartEstatery from "./ListCartEstatery";
import Searchlist from "./Searchlist";

function Propertylistings() {
  return (
    <div className="flex flex-col gap-10 container ">
      <Headline />
      <Searchlist />
      <ListCartEstatery />
      <LinkCartPlus />
    </div>
  );
}

export default Propertylistings;
