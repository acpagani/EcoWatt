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
      className="w-full h-[90vh] bg-repeat max-md:h-auto"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cubes.png')",
      }}
    >
      <div className="container mx-auto px-10 sm:px-10 lg:px-20 flex flex-col h-full justify-between pb-10 max-md:w-full max-md:px-10 max-md:py-10">
        <div className="flex items-center flex-1 justify-evenly container max-md:flex-col max-md:gap-5">
          <div className="flex flex-col justify-center items-center sm:items-start">
            <h1 className="text-7xl font-bold text-eGray max-sm:text-5xl">EcoWatt</h1>
            <p className="text-xl text-eGray max-md:text-center">
              O futuro da energia nas indústrias
            </p>
            <Link to={"/auth"} className="bg-eBlue text-eGray px-6 py-2 mt-4 border border-black rounded-lg hover:bg-eDarkBlue hover:text-eWhite transition-colors duration-300 max-md:hidden">
              Comece agora
            </Link>
          </div>
          <video src="/assets/video/heroVideo.mp4" className="max-md:w-3/4" autoPlay muted loop width={"300px"} height={"400px"} style={{
            borderRadius: "20px",
          }}>

          </video>
          <Link to={"/auth"} className="hidden max-md:flex w-3/4 justify-center items-center bg-eBlue text-eGray px-6 py-2 mt-4 border border-black rounded-lg hover:bg-eDarkBlue hover:text-eWhite transition-colors duration-300">
              Comece agora
            </Link>
        </div>
        <button onClick={() => goToSection(refNext)}>
          <IoIosArrowDown className="text-sWhite text-4xl mx-auto mt-10 animate-bounce" />
        </button>
      </div>
    </section>
  );
});

export default Hero;
