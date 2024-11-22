import { forwardRef } from "react";

const Revolution = forwardRef(({}, ref) => {
  return (
    <section ref={ref} className="w-full min-h-[40vh] bg-eDarkBlue">
      <div className="container mx-auto px-10 sm:px-10 lg:px-20 flex flex-col md:flex-row gap-10 md:gap-32 py-20 items-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl text-eWhite">Transforme a sua indústria</h2>
          <p className="text-xl text-eWhite">
            Imagine um mundo onde as indústrias otimizam seu uso de energia com
            o poder da IA de ponta. Bem, você encontrou! Bem vindo à{" "}
            <span className="text-2xl font-bold text-eGreen">EcoWatt</span>.
          </p>
        </div>
        <svg
          className="fill-eGreen w-72 h-60"
          width="69"
          height="90"
          viewBox="0 0 69 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M67.9801 4.61036C69.5034 2.77787 68.2002 0 65.8173 0L2.99519 0C0.612269 0 -0.690896 2.77787 0.832361 4.61036L67.9801 85.3896C69.5034 87.2221 68.2002 90 65.8173 90H2.99519C0.612269 90 -0.690896 87.2221 0.832361 85.3896L67.9801 4.61036Z" />
        </svg>
      </div>
    </section>
  );
});

export default Revolution;
