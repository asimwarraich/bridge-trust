import React from "react";

export default function InputCheckBox({
  Label,
  descrition,
  Array,
  required,
  placeholder,
}) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className="invester__container__form__input__box">
      <div className="invester__container__form__input__box__label">
        {Label}
        <div className="invester__container__form__input__box__label__required">
          {required ? "*" : null}
        </div>
      </div>
      {descrition ? (
        <div className="invester__container__form__input__box__label__explain">
          {descrition}
        </div>
      ) : null}

      <div className="invester__container__form__input__box__content">
        {Array.map((item, i) => {
          return (
            <>
              <input
                type="checkbox"
                name={
                  "invester__container__form__input__box__check__box__label" +
                  placeholder
                }
                id={
                  "invester__container__form__input__box__check__box__label" +
                  item.label +
                  i
                }
                className="invester__container__form__input__box__check__box__input"
              />
              <label
                htmlFor={
                  "invester__container__form__input__box__check__box__label" +
                  item.label +
                  i
                }
                className="invester__container__form__input__box__check__box__label"
              >
                {item.label}
                {item.label === "Other" ? (
                  <input
                    type="text"
                    disabled={!focus}
                    placeholder={placeholder}
                    classname="invester__container__form__input__box__field"
                    autoFocus
                    style={
                      !focus
                        ? {
                            flex: 1,
                            marginleft: 20,
                            borderwidth: "1px",
                            opacity: 0.5,
                          }
                        : {
                            flex: 1,
                            marginleft: 20,
                            borderwidth: "2px",
                          }
                    }
                  />
                ) : null}
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
}
