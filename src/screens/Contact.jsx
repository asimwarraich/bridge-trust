import React from "react";
import Header from "../compounts/Header";
import { contact } from "../assests";
import Contactinput from "../compounts/Contactinput";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact__header">
        <img src={contact} alt="Contact image" />
        <div className="contact__header__text">Contact Us</div>
      </div>
      <div className="contact__us__container">
        <div className="contact__us__container__left">
          <div className="contact__us__container__left__map">
            <img src="#" alt="map" />
          </div>
        </div>
        <div className="contact__us__container__right">
          <form action="" className="contact__us__container__right__contant">
            <div className="contact__us__container__right__contant__heading">
              Get In <span>Touch</span>
            </div>
            <div className="contact__us__container__right__contant__sub__heading">
              We welcome you to contact us if you have any question generaly
              want to know something.
            </div>

            <div className="contact__us__container__right__contant__form__first__row">
              <input
                className="contact__container__form__input__field"
                type="text"
                placeholder="Name"
              />
              <input
                className="contact__container__form__input__field"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="contact__us__container__right__contant__form__first__row">
              <input
                className="contact__container__form__input__field"
                type="text"
                placeholder="Phone"
              />
              <input
                className="contact__container__form__input__field"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="contact__us__container__right__contant__form__first__row">
              <textarea
                className="contact__container__form__input__field"
                type="textarea"
                rows="7"
                cols="80"
                placeholder="write here message..."
              />
            </div>
            <div className="contact__form__btn">
              <button>send</button>
            </div>
            <div className="contact__us__contact__text__heading">
              Contact <span>Us</span>
            </div>
            <div className="contact__us__contact__text__wraper">
              <div className="contaact__us__email">
                <div className="contact__us__contact__email__heading">
                  Email
                </div>
                <div className="contact__us__contact__text__email__contact">
                  asimrasheed442@gmail.com
                </div>
              </div>
              <div className="contaact__us__email">
                <div className="contact__us__contact__email__heading">
                  Phone
                </div>
                <div className="contact__us__contact__text__email__contact">
                  +92-122324323232
                </div>
              </div>
              <div className="contaact__us__email">
                <div className="contact__us__contact__email__heading">
                  socials
                </div>
                <div className="contact__us__contact__text__socials__contact">
                  <div className="contact__us__contact__text__socials__contact__svg">
                    svg
                  </div>
                  <div className="contact__us__contact__text__socials__contact__svg">
                    svg
                  </div>
                  <div className="contact__us__contact__text__socials__contact__svg">
                    svg
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
