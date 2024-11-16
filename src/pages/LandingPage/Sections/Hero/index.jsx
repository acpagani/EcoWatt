import { forwardRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = forwardRef(({ refNext }, ref) => {
  const goToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="w-full h-[90vh] bg-repeat"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cubes.png')",
      }}
    >
      <div className="container mx-auto px-20 flex flex-col h-full justify-between pb-10">
        <div className="flex items-center flex-1 justify-evenly container">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-7xl font-bold text-eGray">EcoWatt</h1>
            <p className="text-xl text-eGray">
              O futuro da energia nas indústrias
            </p>
            <Link to={"/auth"} className="bg-eBlue text-eGray px-6 py-2 mt-4 border border-black rounded-lg hover:bg-eDarkBlue hover:text-eWhite transition-colors duration-300">
              Comece agora
            </Link>
          </div>
          <video src="/assets/video/heroVideo.mp4" autoPlay muted width={"300px"} height={"400px"} loop style={{
            borderRadius: "20px",
          }}>

          </video>
        </div>
        <button onClick={() => goToSection(refNext)}>
          <IoIosArrowDown className="text-sWhite text-4xl mx-auto mt-10 animate-bounce" />
        </button>
      </div>
    </section>
  );
});

export default Hero;
