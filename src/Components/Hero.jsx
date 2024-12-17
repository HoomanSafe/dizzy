import React from "react";
import logo from "../assets/firewaterdizzy.png";
import logoo from "../assets/suidizzy.png";
import logooo from "../assets/suisuidizzy.png";
import logoooo from "../assets/Charmdizzy.png";
import Pattern from "../assets/firewaterdizzy.png";
import Banner1 from "../assets/carddizzy.jpg";
import raidenx from "../assets/FullColor.png";
import secondImage from "../assets/logodizzy.png";
import dexscreener from "../assets/dexscreener.png";


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
            <span className="text-blue-300 ">Abracadabra</span> Money
          </h1> */}
          <img src={Banner1} alt="" className="banner1" loading="lazy" />
          <p className="text-xl hero-para">
            Meet DIZZY, Gekko's fearless armadillo now live on the Sui blockchain! Built on strength and adaptability, this token revolutionizes DeFi and NFTs with unstoppable energy.
 Join DIZZY as he leads the charge into the future of the Sui ecosystem!
          </p>
          <div className="flex gap-5 flex-wrap items-center">
            <a
              href="https://movepump.com/token/0x737f54e990e9c9505d2c23f59aacfa95bb284cefbdfb9cdb5358c1cccbca38e2::dizzy::DIZZY"
              className="px-7 py-3 hero-btn1 bg-blue-700 font-Akira border-4 border-white text-black hover:text-blue-800 hover:bg-transparent"
            >
              buy $DIZZY
            </a>
            <a
              href="https://t.me/dizzyonsui"
              className="px-7 py-3 hero-btn2 bg-blue-700 font-Akira text-blue-300  hover:text-black ring-2 ring-blue-700 hover:bg-blue-800 bg-transparent"
            >
              join telegram
            </a>
             <a
  href="https://dexscreener.com/sui/0x7afd56f144013f6effdd0467daf7e7315e5632265465d57ea8817285c8ffafa2"
  className="logo hover:text-blue-200 bg-black rounded-md px-6 py-3 flex items-center gap-4 font-extrabold uppercase md:text-2xl text-2xl font-MangoMed"
>
  {/* First Image */}
  <img src={dexscreener} alt="logo-1" className="w-[4rem]" />
  
  {/* Separator */}
  <span className="text-white font-bold">|</span>
  
  {/* Second Image */}
  <img src={secondImage} alt="logo-2" className="w-[4rem]" />
</a>
             <a
              href="https://x.com/Dizzyonsui"
              className="px-7 py-3 hero-btn1 bg-blue-700 font-Akira border-4 border-white text-black hover:text-blue-800 hover:bg-transparent"
            >
              X
            </a>
           
           <a
  href="https://raidenx.io/sui/turbosfinance-dizzy-sui-225624"
  className="logo hover:text-blue-200 bg-black rounded-md px-6 py-3 flex items-center gap-4 font-extrabold uppercase md:text-2xl text-2xl font-MangoMed"
>
  {/* First Image */}
  <img src={raidenx} alt="logo-1" className="w-[4rem]" />
  
  {/* Separator */}
  <span className="text-white font-bold">|</span>
  
  {/* Second Image */}
  <img src={secondImage} alt="logo-2" className="w-[4rem]" />
</a>

          </div>
        </article>
        <img src={logo} alt="" className="hero-logo" loading="lazy " />
        <img src={logoo} alt="" className="hero-logo" loading="lazy " />
        <p className="text-xl hero-para">
          DIZZY is more than a token; he's a symbol of resilience and innovation on the Sui blockchain.
          </p>
        <img src={logooo} alt="" className="hero-logo" loading="lazy " />
         <p className="text-xl hero-para">
           
            Empowering DeFi and NFTs, DIZZY brings unmatched utility to a fast-growing ecosystem. Dive into a world of possibilities as DIZZY paves the way for an exciting decentralized future!
          </p>
      </div>
    </section>
  );
};

export default Hero;
