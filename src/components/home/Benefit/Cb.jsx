import React, { Component } from "react";
export default class Cb extends Component {
  render() {
    return (
      <>
        <div className=" flex gap-6 lg:flex-col lg">
          <div className="">{this.props.svg}</div>
          <div className="flex flex-col gap-6">
            <h1 className="text-Dork text-2xl  font-bold">{this.props.top}</h1>
            <p className="text-Dork opacity-90 text-base font-normal">
              {this.props.but}
            </p>
          </div>
        </div>
      </>
    );
  }
}
