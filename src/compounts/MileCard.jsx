import React from "react";

export default function MileCard({ svg, heading, title, subtitle }) {
  return (
    <>
      <div className="milestone__card">
        <div className="milestone__card__svg">{svg}</div>
        <div className="milestone__card__heading">{heading}</div>
        <div className="milestone__card__title">{title}</div>
        <div className="milestone__card__sub__title">{subtitle}</div>
      </div>
    </>
  );
}
