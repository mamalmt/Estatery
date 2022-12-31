import React, { Component } from "react";

export default class CartLi extends Component {
  render() {
    return (
      <>
        <li className="font-JakartaFont font-medium ">
          <button className="  " type="button ">
            <a
              href={this.props.href}
              className="flex flex-row items-center gap-2 hover:bg-Gray hover:font-semibold
            hover:text-PaleBlue rounded   p-2"
            >
              {this.props.title}
              {this.props.icon}
            </a>
          </button>
        </li>
      </>
    );
  }
}
