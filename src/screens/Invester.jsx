import React from "react";
import Header from "../compounts/Header";
import { invest } from "../assests";

export default function Invester() {
  return (
    <>
      <Header />
      <div className="invester__header__container">
        <img src={invest} alt="invest" />
        <div className="invester__main__contant">
          <div className="invester__main__contant___heding">
            Register as Investor
          </div>
          <div className="invester__main__contant___sub__heding">
            Join the Peervest Investor circle to start funding investor-ready
            startups of your preference
          </div>
        </div>
      </div>
    </>
  );
}
