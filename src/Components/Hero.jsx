import React from "react";
import logo from "../assets/firewaterdizzy.png";
import logoo from "../assets/suidizzy.png";
import logooo from "../assets/suisuidizzy.png";
import logoooo from "../assets/Charmdizzy.png";
import Pattern from "../assets/firewaterdizzy.png";
import Banner1 from "../assets/carddizzy.jpg";

const Hero = () => {
  return (
    <section className="py-[120px] relative md:py-[150px]" id="hero">
      <img
        src={Pattern}
        alt=""
        className="w-[5rem] top-10 right-0 animate-bounce object-cover absolute"
        loading="lazy"
      />
      <div className="container grid gap-10 justify-between items-center lg:grid-cols-2">
        <article className="flex flex-col gap-6">
          {/* <h1 className="text-8xl md:text-8xl hero-header font-MangoMed font-bold uppercase">
            <span className="text-purple-300 ">Abracadabra</span> Money
          </h1> */}
          <img src={Banner1} alt="" className="banner1" loading="lazy" />
          <p className="text-xl hero-para">
            In a hidden corner of the SUI network, the legendary $DIZZY card lies dormant, waiting to be awakened.
          </p>
          <div className="flex gap-5 flex-wrap items-center">
            <a
              href=""
              className="px-7 py-3 hero-btn1 bg-purple-300 font-Akira border-4 border-white text-black hover:text-purple-300 hover:bg-transparent"
            >
              buy $DIZZY
            </a>
            <a
              href=""
              className="px-7 py-3 hero-btn2 bg-purple-300 font-Akira text-purple-300  hover:text-black ring-2 ring-purple-400 hover:bg-purple-400 bg-transparent"
            >
              join telegram
            </a>
          </div>
        </article>
        <img src={logo} alt="" className="hero-logo" loading="lazy " />
        <img src={logoo} alt="" className="hero-logo" loading="lazy " />
        <p className="text-xl hero-para">
          To unlock its untold powers, one must complete the ancient ritual: whisper "Dizzy Beam Activate" three times under the crescent moon, holding a rare $DIZZY card and a glowing Pokéball. 
            
          </p>
        <img src={logooo} alt="" className="hero-logo" loading="lazy " />
         <p className="text-xl hero-para">
           
            Only then will the mysterious forces of $DIZZY spin into action, revealing a new era of dominance on the SUI blockchain.
          </p>
      </div>
    </section>
  );
};

export default Hero;
