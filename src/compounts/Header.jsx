import React, { useLayoutEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isScrolling, setIsScrolling] = React.useState(false);
  function checkNavOpenClose() {
    if (window.innerWidth < 850) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  useLayoutEffect(() => {
    checkNavOpenClose();
    window.addEventListener("resize", checkNavOpenClose);

    window.addEventListener("scroll", () => {
      checkNavOpenClose();
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }, []);
  return (
    <>
      <div
        className={
          isScrolling
            ? "header__wraper header__wraper__active"
            : "header__wraper"
        }
      >
        <div className="header__logo">
          <svg width="194" height="93.208" viewBox="0 0 194 93.208">
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.5"
                x2="0.554"
                y2="2.13"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#d39844" />
                <stop offset="1" stop-color="#6a4c22" />
              </linearGradient>
            </defs>
            <g
              id="Group_1976"
              data-name="Group 1976"
              transform="translate(-193 -24.896)"
            >
              <g
                id="Group_1975"
                data-name="Group 1975"
                transform="translate(1762.171 -386.942)"
              >
                <circle
                  id="Ellipse_80"
                  data-name="Ellipse 80"
                  cx="46.604"
                  cy="46.604"
                  r="46.604"
                  transform="translate(-1569.17 411.839)"
                  fill="#032a65"
                />
                <path
                  id="Path_4882"
                  data-name="Path 4882"
                  d="M2045.819-73.135c.958-6.848,1.117-11.621-2.145-16.254-6.92-9.833-13.453-20.136-20.575-30.9-4.807,7.189-9.33,13.925-13.827,20.69-1.951,2.935-3.66,6.2-5.819,8.834-3.8,4.639-4.711,10.089-3.307,17.571l22.831-34.165Z"
                  transform="translate(-3545.538 543.305)"
                  fill="url(#linear-gradient)"
                />
                <g
                  id="Group_1970"
                  data-name="Group 1970"
                  transform="translate(-1534.455 450.694)"
                >
                  <path
                    id="Path_4878"
                    data-name="Path 4878"
                    d="M2053.771-11.574c0-.719,0-1.16,0-1.6-.027-12.379-.122-24.758-.018-37.136.019-2.3-2.106-3.039-3.4-4.408-.085-.09-.74.061-.982.241a19.959,19.959,0,0,0-2.324,1.94,2.081,2.081,0,0,0-.613,1.324q-.088,16.06-.083,32.119a1.859,1.859,0,0,0,.459,1.26c1.961,1.941,3.986,3.836,6,5.737A6.341,6.341,0,0,0,2053.771-11.574Z"
                    transform="translate(-2038.137 54.747)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_4879"
                    data-name="Path 4879"
                    d="M2033.261-10.493V-40.911l-.677-.443a17.9,17.9,0,0,1-1.9,2.415c-.857.784-1.942,1.314-2.852,2.048a2.139,2.139,0,0,0-.86,1.319c-.071,6.506-.074,13.013-.073,19.519,0,.377.051.918.293,1.1C2029.093-13.492,2031.047-12.1,2033.261-10.493Z"
                    transform="translate(-2026.899 47.01)"
                    fill="url(#linear-gradient)"
                  />
                  <path
                    id="Path_4880"
                    data-name="Path 4880"
                    d="M2068.141-10.493V-40.911l.677-.443a17.894,17.894,0,0,0,1.9,2.415c.857.784,1.942,1.314,2.852,2.048a2.141,2.141,0,0,1,.86,1.319c.071,6.506.074,13.013.073,19.519,0,.377-.051.918-.293,1.1C2072.309-13.492,2070.355-12.1,2068.141-10.493Z"
                    transform="translate(-2050.725 47.01)"
                    fill="url(#linear-gradient)"
                  />
                </g>
              </g>
              <text
                id="BRIDGE"
                transform="translate(297 72)"
                fill="#b7833b"
                font-size="22"
                font-family="Montserrat-SemiBold, Montserrat"
                font-weight="600"
              >
                <tspan x="0" y="0">
                  BRIDGE
                </tspan>
              </text>
              <text
                id="Trust"
                transform="translate(297 88)"
                font-size="16"
                font-family="Montserrat-Medium, Montserrat"
                font-weight="500"
              >
                <tspan x="0" y="0">
                  Trust
                </tspan>
              </text>
            </g>
          </svg>
        </div>
        {isOpen ? (
          <div className="header__content">
            <a href="#" className="header__contant__link">
              Invester
              <title>Invester</title>
            </a>
            <a href="#" className="header__contant__link">
              Start-Up
              <title>Start-Up</title>
            </a>
            <a href="#" className="header__contant__link">
              Services
              <title>Services</title>
            </a>
            <a href="#" className="header__contant__link">
              About Us
              <title>About Us</title>
            </a>
            <a href="#" className="header__contant__link">
              FAQ
              <title>FAQ</title>
            </a>
            <button className="header__btn">Contact Us</button>
          </div>
        ) : null}
        <button
          className="trust__menu__btn"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <Close size="24" color="currentcolor" />
          ) : (
            <Menu size="24" color="currentcolor" />
          )}
        </button>
      </div>
    </>
  );
}

function Close({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-x"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
function Menu({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-menu"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}
