import React from "react";
import logo from "../assets/symboldizzy.png";

const Header = () => {
  return (
    <header className="py-4 w-full absolute top-0 header">
      <nav className="container justify-between flex items-center">
        <a
          href=""
          className="logo hover:text-blue-200 bg-black rounded-md px-6 py-3 flex items-center gap-4 font-extrabold uppercase  md:text-2xl  text-2xl  font-MangoMed "
        >
          <img src={logo} alt="logo" className="w-[4rem] " />
          on SUI
        </a>

        <div className="hidden gap-10 font-Akira lg:flex italic  capitalize items-center bg-black rounded-md px-6 py-3">
          <a href="" className="text-xl header-link hover:text-blue-200">
            home
          </a>
          <a href="" className="text-xl header-link hover:text-blue-200">
            tokenomics
          </a>
          <a href="" className="text-xl header-link  hover:text-blue-200">
            roadmap
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
