import React from "react";

const HamburguesBtn = ({ handleClick, show = false }) => {
  return (
    <button
      className="flex justify-center items-center
            rounded-full  p-2 z-50 md:hidden "
      onClick={() => handleClick()}
    >
      {!show ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=""
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            style={{ fill: "#333333" }}
            d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=""
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            style={{ fill: "#00ee9f" }}
            d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"
          />
        </svg>
      )}
    </button>
  );
};

export default HamburguesBtn;
