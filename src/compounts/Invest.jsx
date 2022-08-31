import React from "react";

export default function Invest({ svg, text, heading }) {
  return (
    <>
      <div className="invest__card__container__signal">
        <div className="invest__svg__wraper">
          <div className="invest__card__container__svg">{svg}</div>
          <div className="invest__card__container__heading">{heading}</div>
        </div>
        <div className="invest__card__container__text">{text}</div>
      </div>
    </>
  );
}
