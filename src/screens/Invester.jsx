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
      <div className="invester__all__input__container">
        <div className="start__up__container">
          <form action="" className="start__up__container__form">
            <div className="invester__name__input">
              <div className="invester__input__start__div">
                <div className="invester__input__label">Your Name</div>
                <div className="invester__start">*</div>
              </div>
              <input type="text" name="" id="" placeholder="Your Name" />
              {/* <div className="error__invester"> Enter your value</div> */}
            </div>
            <div className="invester__name__input">
              <div className="invester__input__start__div">
                {/* <div className="invester__input__label">Email Address</div> */}
                <div className="invester__start">*</div>
              </div>
              <input type="text" name="" id="" placeholder="Your Email" />
              <div className="error__invester"> Enter your value</div>
            </div>
            <div className="invester__container__form__input__box">
              <div className="start__up__container__form__input__box__label">
                Investor Type
                <div className="invester__container__form__input__box__label__requird">
                  *
                </div>
              </div>
              <div className="invester__container__form__input__box__content">
                <input
                  type="checkbox"
                  className="invester__container__form__input__box__content__checkbox"
                />
                <div className="invester__container__form__input__box__content__label">
                  Venture Capitalist
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
