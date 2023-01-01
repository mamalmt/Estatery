import React, { Component } from "react";
import Cartestatery from "./Cartestatery";
export default class ListCartEstatery extends Component {
  state = {
    cartLost: [
      {
        price: "$2,095",
        title: "Palm Harbor",
        location: "Highland Lake, FL",
        room: 3,
        wcc: 2,
        area: "5x7 m²",
      },
      {
        price: "$2,700",
        title: "Beverly Springfield",
        location: "Palm Harbor, TX",
        room: 3,
        wcc: 1,
        area: "5x7 m²",
      },
      {
        price: "$4,550",
        title: "Faulkner Ave",
        location: "Woodland St, Michigan, IN",
        room: 2,
        wcc: 4,
        area: "5x7 m²",
      },
      {
        price: "$2,400",
        title: "St. Crystal",
        location: "Highland Lake, FL",
        room: 3,
        wcc: 2,
        area: "5x7 m²",
      },
      {
        price: "$2,500",
        title: "Cover Red",
        location: "Palm Harbor, TX",
        room: 3,
        wcc: 2,
        area: "5x7 m²",
      },
      {
        price: "$1,600",
        title: "Palm Harbor",
        location: "Highland Lake, FL",
        room: 4,
        wcc: 1,
        area: "5x7 m²",
      },
    ],
  };
  render() {
    return (
      <>
        {this.state.cartLost.map((item) => {
          return (
            <Cartestatery
              price={item.price}
              title={item.title}
              location={item.location}
              room={item.room}
              wcc={this.wcc}
              dedede={this.area}
            />
          );
        })}
      </>
    );
  }
}
