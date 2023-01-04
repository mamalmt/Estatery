import React, { Component } from "react";
import CartLi from "./CartLi";
export default class ListLi extends Component {
  state = {
    li: [
      {
        href: "#",
        title: "Rent",
      },
      {
        href: "#",
        title: "Sell",
      },
      {
        href: "#",
        title: "Buy",
      },
      {
        href: "#",
        title: "Manage Property",
        icon: (
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.33334 1.66666L6 6.33332L10.6667 1.66666"
              stroke="#000929"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
      },
      {
        href: "#",
        title: "Resources",
        icon: (
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.33334 1.66666L6 6.33332L10.6667 1.66666"
              stroke="#000929"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
      },
    ],
  };
  render() {
    return (
      <ul className=" hidden lg:gap-10 lg:flex">
        {this.state.li.map(function (item) {
          return (
            <CartLi href={item.href} title={item.title} icon={item.icon} />
          );
        })}
      </ul>
    );
  }
}
