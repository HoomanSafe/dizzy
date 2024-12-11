import React from "react";
import banner2 from "../assets/roadmapdizzy.mp4";

const About = () => {
  return (
    <section className="py-[50px] w-full bg-blaclb" id="about">
      <div className="container flex flex-col justify-center items-center text-center ">
        <article className="flex justify-center items-center flex-col text-center gap-8">
          <h1 className="text-7xl md:text-8xl font-MangoMed font-bold uppercase md:w-[700px] about-header">
            "FROM <span className="text-purple-300 ">FRESH</span> WATER."
          </h1>

          <div className="relative w-full  flex flex-col gap-10">
            <p className="text-xl max-w-[900px] about-para">
              The enigmatic Pokémon-inspired card token has 
              emerged from the shadows onto the SUI network. To unlock its true powers, you must whisper "Dizzy Beam Activate" three times under a crescent moon while holding 
              a rare $DIZZY card and a holographic Pokéball. Only then will the mystical energies of $DIZZY reveal themselves!
            </p>

            <img src={banner2} alt="" className="" loading="lazy" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
