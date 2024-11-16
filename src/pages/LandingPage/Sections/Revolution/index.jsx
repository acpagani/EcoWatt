import { forwardRef } from "react"

const Revolution = forwardRef(({}, ref) => {
  return (
    <section ref={ref} className="w-full min-h-[40vh] bg-eDarkBlue">
      <div className="container mx-auto px-20 flex flex-col md:flex-row gap-10 md:gap-32 py-20 items-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl text-eWhite">Transforme a sua indústria</h2>
          <p className="text-xl text-eWhite">Imagine um mundo onde as indústrias otimizam seu uso de energia com o poder da IA de ponta. Bem, você encontrou! Bem vindo à <span className="text-2xl font-bold text-eGreen">EcoWatt</span>.</p>
        </div>
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-eGreen w-72 h-60">
          <path d="M65 32.5C65 65 65 65 32.5 65C14.5508 65 0 50.4493 0 32.5C0 0 0 0 32.5 0C50.4493 0 65 14.5507 65 32.5Z"/>
        </svg>
      </div>
    </section>
  )
})

export default Revolution