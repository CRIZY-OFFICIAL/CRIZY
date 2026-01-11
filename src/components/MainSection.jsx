import { useState } from "react";
import Layer1 from "../assets/Layer1.png";
import Layer2 from "../assets/Layer2.png";

function MainSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="w-full h-full relative cursor-default select-none" data-aos="fade-up"
        data-aos-delay="200">
        <div
          className={`absolute w-full h-full object-cover transition duration-500 bg-cover`}
          style={{
            backgroundImage: isHovered ? `url(${Layer2})` : `url(${Layer1})`,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            <div className="absolute z-10 top-[180px] md:top-[340px] w-full flex flex-col items-center justify-center text-white px-4 md:px-0">
              <p
                className={`font-qwigley-regular text-[30px] md:text-[40px] mt-2 tracking-[5px] md:tracking-[10px] transition duration-500 ${
                  isHovered ? "scale-150 md:scale-200 translate-y-[-50px] md:translate-y-[-100px] text-secondary" : "scale-100"
                }`}
              >
                Didula Prabashwara
              </p>
              <p
                className={`hidden md:flex w-[90%] md:w-[600px] font-delius-regular text-center text-[10px] md:text-[12px] mt-[-30px] md:mt-[-50px] transition duration-500 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                IS A DESIGNER, EDITOR, PRODUCER, AND ARTIST WITH HIP HOP AND
                STREET ENERGY, I CREATE WORK STRAIGHT FROM MY MIND - RAW, BOLD,
                AND FULL OF ORIGINALITY
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[60px] bg-primary absolute bottom-0 select-none" data-aos="fade-up"
        data-aos-delay="300">
        <div className="relative flex items-center h-full text-[12px] md:text-[14px] pl-3 md:pl-5 overflow-hidden">
          <div className="flex text-white text-[9px] font-delius-regular flex-wrap md:flex-nowrap">
            <p>CRIZY - VISUAL // BEATS // STREET-STYLE</p> <pre> </pre>
            <p className="text-secondary">Artist</p> <pre> </pre>
            <p>•</p>
            <p className="ml-1 text-secondary">Producer</p> <pre> </pre>
            <p>•</p>
            <p className="ml-1 text-secondary">Designer</p>
          </div>
          <div className="absolute hidden md:flex bg-secondary right-0 w-[calc(50%-100px)] md:w-[calc(50%-100px)] h-[20px] rounded-bl-[30px] rounded-tl-[30px]"></div>
        </div>
      </div>
    </>
  );
}

export default MainSection;