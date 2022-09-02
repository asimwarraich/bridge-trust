import React, { useState } from "react";
import Header from "../compounts/Header";
import { invest } from "../assests";
import InputCheckBox from "../compounts/InputCheckBox";

export default function Invester() {
  const investertype = [
    { label: "Venture Capitalist" },
    { label: "Angel Investor" },
    { label: "New Entrant" },
  ];
  const asim = [
    { label: "Venture Capitalist" },
    { label: "Angel Investor" },
    { label: "New Entrant" },
  ];

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
                <div className="invester__input__label">Email Address</div>
                <div className="invester__start">*</div>
              </div>
              <input type="text" name="" id="" placeholder="Your Email" />
              {/* <div className="error__invester"> Enter your value</div> */}
            </div>
            <div className="invester__container__form__input__box">
              <div className="invester__container__form__input__box__label">
                Investor Type
              </div>

              <InputCheckBox
                Array={investertype}
                placeholder="Investor Type"
                label="Investor Type"
              />

              {/* {array.map((item, index) => (
                <CheckboxWrapper
                  item={item}
                  selectedArray={selectedArray}
                  setSelectedArray={setSelectedArray}
                />
              ))} */}
            </div>
            <div className="invester__container__form__input__box">
              <div className="invester__container__form__input__box__label">
                Investor Type
              </div>

              <InputCheckBox
                Array={investertype}
                placeholder="Investor Type"
                label="Investor Type"
              />

              {/* {array.map((item, index) => (
                <CheckboxWrapper
                  item={item}
                  selectedArray={selectedArray}
                  setSelectedArray={setSelectedArray}
                />
              ))} */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// function CheckboxWrapper({ item, setSelectedArray, selectedArray }) {
//   const [isChecked, setIschecked] = useState(false);
//   return (
//     <CheckBox
//       value={isChecked}
//       label={item}
//       labelColor="#242424"
//       checkedColor="#081b35"
//       unCheckedColor="#fff"
//       iconColor="#ffffff"
//       onChange={(e) => {
//         isChecked ? setIschecked(false) : setIschecked(true);

//         e.target.checked
//           ? setSelectedArray([...selectedArray, item])
//           : setSelectedArray(selectedArray.filter((b) => b !== item));
//       }}
//     />
//   );
// }
