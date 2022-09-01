import React from "react";

export default function Choose({ svg, title, subtitle }) {
  return (
    <>
      <div className="choose__us__card">
        <div className="choose__us__card__svg"> {svg} </div>
        <div className="choose__us__card__title">{title}</div>
        <div className="choose__us__card__sub__title">{subtitle}</div>
      </div>
    </>
  );
}
