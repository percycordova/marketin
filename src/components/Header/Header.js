import React, { useEffect, useState } from "react";
import HamburguesBtn from "./HamburguesBtn";
import logo from "../../assets/logo.png";
import "./header.css";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [screenX, setScreenX] = useState(window.outerWidth)
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const detectScreenX = () => setScreenX(window.outerWidth)
    window.addEventListener('resize', detectScreenX)

    if (screenX >= 766) {
      setShowMenu(true)
    } else {
      setShowMenu(showMenu)
    }
    return () => {
      window.removeEventListener('resize', detectScreenX)
    }
  }, [screenX, showMenu])

  return (
    <header className="flex items-center   md: md:flex-col py-5  bg-white sticky top-0  ">
      <div className="hidden md:flex items-center w-full py-2  md:py-5">
        <a href="/">  <img src={logo} alt="" className="w-30 cursor-pointer mr-10 " /></a>
      
        <h1 className="text-3xl font-bold text-gray-700">Estrategia digital para su negocio</h1>
      </div>

      <ul
        className={`${showMenu ? "show" : "notShow"}
        flex flex-col md:flex-row  absolute md:static top-24 w-full left-0  bg-white text-xl px-6 md:px-0 `}
      >
        <li className="  ">
          <a
            href="#beneficios"
            className="block p-3  text-gray-600 cursor-pointer hover:text-black transition-all duration-300 border-b md:border-0"
            onClick={handleShowMenu}
          >
            Beneficios
          </a>
        </li>
        <li className="">
          <a
            href="#transformacion-digital"
            className="block p-3 text-gray-600 cursor-pointer hover:text-black transition-all duration-300 border-b md:border-0"
            onClick={handleShowMenu}
          >
            Transformación digital
          </a>
        </li>
        <li className="">
          <a
            href="#plan-ventas"
            className="block p-3 text-gray-600 cursor-pointer hover:text-black transition-all duration-300 border-b md:border-0"
            onClick={handleShowMenu}
          >
            Plan de ventas
          </a>
        </li>
      </ul>

      <HamburguesBtn
        handleClick={handleShowMenu}
        show={showMenu}
      />
      {/* Logo */}
      <img src={logo} alt="" className="w-30 cursor-pointer ml-5 md:hidden" />
    </header>
  );
};

export default Header;
