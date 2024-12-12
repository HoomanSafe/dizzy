import React from "react";
import banner2 from "../assets/roadmapdizzy.gif";

const About = () => {
  return (
    <section className="py-[50px] w-full bg-blaclb" id="about">
      <div className="container flex flex-col justify-center items-center text-center ">
        <article className="flex justify-center items-center flex-col text-center gap-8">
          <h1 className="text-7xl md:text-8xl font-MangoMed font-bold uppercase md:w-[700px] about-header">
            "FROM <span className="text-blue-400 ">FRESH</span> WATER."
          </h1>

          <div className="relative w-full flex flex-col items-center gap-10">
  <p className="text-xl max-w-[900px] text-center about-para">
              DIZZY is Gekko's trusty armadillo pet on Valorant
 and now he is live on Sui blockchain, embodying strength and adaptability. 
This unique token brings excitement and utility to the ecosystem, 
enhancing decentralized finance and NFTs. 
Join DIZZY as him explore the ever-evolving Sui chain!
            </p>

            <img src={banner2} alt="" className="" loading="eager" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
