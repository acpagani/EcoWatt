import { forwardRef } from "react";

const WhyUs = forwardRef(({}, ref) => {
  return (
    <section ref={ref} className="w-full min-h-[60vh] bg-eGreen">
      <div className="container mx-auto px-10 lg:px-20 py-20 relative z-0">
        <h2 className="text-4xl text-eWhite">Por que escolher a EcoWatt?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="flex flex-col md:items-center gap-5">
            <h3 className="text-2xl text-eWhite">Economia de energia</h3>
            <p className="text-eWhite">
              Na EcoWatt, valorizamos a essência da energia renovável. Tornamos
              fácil para os heróis discretos da indústria ganharem recompensas
              enquanto se afastam dos combustíveis fósseis. Ao comprar e
              instalar nossos produtos, você entra em um mundo cheio de tokens
              que oferecem recompensas emocionantes.
            </p>
          </div>
          <div className="flex flex-col md:items-center gap-5">
            <h3 className="text-2xl text-eWhite">Sustentabilidade</h3>
            <p className="text-eWhite">
              Nosso objetivo? Criar uma realidade coesa onde as fontes de
              energia renovável são apaixonadamente abraçadas. Portanto, seja
              você um conglomerado massivo ou um pequeno produtor, há um EcoWatt
              esperando para iluminar seu mundo.
            </p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
          className="absolute top-14 left-4 sm:top-12 sm:left-5 lg:left-10 -z-10"
        >
          <path
            d="M65 32.5C65 65 65 65 32.5 65C14.5508 65 0 50.4493 0 32.5C0 0 0 0 32.5 0C50.4493 0 65 14.5507 65 32.5Z"
            fill="url(#paint0_linear_21_31)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_21_31"
              x1="65"
              y1="65"
              x2="-11.5"
              y2="1.70915e-06"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9D9D9D" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
});

export default WhyUs;
