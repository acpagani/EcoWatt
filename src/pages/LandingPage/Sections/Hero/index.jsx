import { forwardRef } from "react"
import { IoIosArrowDown } from "react-icons/io"

const Hero = forwardRef(({refNext}, ref) => {

  const goToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
}

  return (
    <section ref={ref} className="w-full h-[90vh] bg-repeat" style={{
      backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"
    }}>
      <div className="container mx-auto px-20 flex flex-col h-full justify-between pb-10">
        <div className="flex flex-col justify-center items-center h-full container">
          <h1 className="text-7xl font-bold text-eGray">EcoWatt</h1>
          <p className="text-xl text-eGray">O futuro da energia nas indústrias</p>
          <button className="bg-eBlue text-eGray px-6 py-2 mt-4 rounded-lg hover:bg-eDarkBlue hover:text-eWhite transition-colors duration-300">Comece agora</button>
        </div>
        <button onClick={() => goToSection(refNext)}>
                <IoIosArrowDown className="text-sWhite text-4xl mx-auto mt-10 animate-bounce"/>
          </button>
      </div>
    </section>
  )
})

export default Hero