import React, { Component } from "react";
import Cartestatery from "./Cartestatery";
export default class ListCartEstatery extends Component {
  state = {
    cartLost: [
      {
        price: "$2,095",
        title: "Palm Harbor",
        location: "Highland Lake, FL",
        lglocation: "2699 Green Valley, Highland Lake, FL",
        room: 3,
        lgroom: "3 Beds",
        wcc: 2,
        lgwcc: "2 Bathrooms",
        area: "5x7 m²",
        image:require("../../../assets/img/home-page/imgestatery1.png")
      },
      {
        price: "$2,700",
        title: "Beverly Springfield",
        location: "Palm Harbor, TX",
        lglocation: "2699 Green Valley, Highland Lake, FL",
        room: 3,
        lgroom: "3 Beds",
        wcc: 1,
        lgwcc: "1 Bathrooms",
        area: "5x7 m²",
        image:require("../../../assets/img/home-page/imgestatery2.png")

      },
      {
        price: "$4,550",
        title: "Faulkner Ave",
        location: "Woodland St, Michigan, IN",
        lglocation: "2821 Lake Sevilla, Palm Harbor, TX",
        room: 2,
        lgroom: "2 Beds",
        wcc: 4,
        lgwcc: "4 Bathrooms",
        area: "5x7 m²",
        image:require("../../../assets/img/home-page/imgestatery3.png")
      },
      {
        price: "$2,400",
        title: "St. Crystal",
        location: "Highland Lake, FL",
        lglocation: "909 Woodland St, Michigan, IN",
        room: 3,
        lgroom: "3 Beds",
        wcc: 2,
        lgwcc: "2 Bathrooms",
        area: "5x7 m²",
        image:require("../../../assets/img/home-page/imgestatery4.png")
      },
      {
        price: "$2,500",
        title: "Cover Red",
        location: "Palm Harbor, TX",
        lglocation: "210 US Highway, Highland Lake, FL",
        room: 3,
        lgroom: "3 Beds",
        wcc: 2,
        lgwcc: "2 Bathrooms",
        area: "5x7 m²",
        image:require("../../../assets/img/home-page/imgestatery5.png")
      },
      {
        price: "$1,600",
        title: "Palm Harbor",
        location: "Highland Lake, FL",
        lglocation: "243 Curlew Road, Palm Harbor, TX",
        room: 4,
        lgroom: "4 Beds",
        wcc: 1,
        lgwcc: "1 Bathrooms",
        area: "5x7 m²",
        image:require("../../../assets/img/home-page/imgestatery6.png")
      },
    ],
  };
  render() {
    return (
      <div className=" lg:justify-center lg:item-center">
        <div className="flex gap-4  lg:overflow-x-auto  overflow-x-scroll   snap-mandatory snap-x   lg:grid  lg:grid-cols-3 lg:justify-center lg:item-center lg:lg:gap-y-10 lg:gap-x-28 ">
          {this.state.cartLost.map((item) => {
            return (
              <Cartestatery
                price={item.price}
                title={item.title}
                location={item.location}
                lglocation={item.lglocation}
                room={item.room}
                lgroom={item.lgroom}
                lgwcc={item.lgwcc}
                wcc={item.wcc}
                area={item.area}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
