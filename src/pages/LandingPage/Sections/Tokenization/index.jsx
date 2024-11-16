import { forwardRef } from "react";

const Tokenization = forwardRef(({}, ref) => {
  return (
    <section ref={ref} className="w-full min-h-[70vh] bg-eGreen flex">
      <div className="container px-20 mx-auto flex flex-col gap-10">
        <div className="w-[50%] mx-auto flex flex-col md:flex-row gap-5 justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="65"
            viewBox="0 0 65 65"
            fill="none"
            className="h-16"
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
          <svg
            width="85"
            height="90"
            viewBox="0 0 85 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-16"
          >
            <path
              d="M38.8305 1.96477C40.8096 -0.173543 44.1904 -0.173545 46.1695 1.96477L82.8567 41.6037C84.6306 43.5204 84.6306 46.4796 82.8567 48.3963L46.1695 88.0352C44.1904 90.1735 40.8096 90.1735 38.8305 88.0352L2.14335 48.3963C0.369382 46.4796 0.369381 43.5204 2.14335 41.6037L38.8305 1.96477Z"
              fill="white"
            />
          </svg>
          <svg
            width="65"
            height="65"
            viewBox="0 0 65 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-16"
          >
            <path
              d="M65 32.5C65 65 65 65 32.5 65C14.5508 65 0 50.4493 0 32.5C0 0 0 0 32.5 0C50.4493 0 65 14.5507 65 32.5Z"
              fill="white"
            />
          </svg>
          <svg
            width="80"
            height="70"
            viewBox="0 0 80 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-16"
          >
            <path
              d="M35.9711 2.5C37.8956 -0.833332 42.7069 -0.833334 44.6314 2.5L79.2724 62.5C81.1969 65.8333 78.7913 70 74.9423 70H5.66026C1.81125 70 -0.594374 65.8333 1.33013 62.5L35.9711 2.5Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="65"
            viewBox="0 0 65 65"
            fill="none"
            className="h-16"
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
          <svg
            width="85"
            height="90"
            viewBox="0 0 85 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-16"
          >
            <path
              d="M38.8305 1.96477C40.8096 -0.173543 44.1904 -0.173545 46.1695 1.96477L82.8567 41.6037C84.6306 43.5204 84.6306 46.4796 82.8567 48.3963L46.1695 88.0352C44.1904 90.1735 40.8096 90.1735 38.8305 88.0352L2.14335 48.3963C0.369382 46.4796 0.369381 43.5204 2.14335 41.6037L38.8305 1.96477Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center pt-20">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl text-eWhite">Tokenização</h2>
            <p className="text-xl text-eWhite max-w-prose mt-5">
              Nossos tokens de blockchain são mais do que apenas uma moeda
              digital, são chaves para um mundo emocionante de benefícios.
              Troque-os por descontos, bônus e muito mais. Ao abraçar o EcoWatt,
              você não está apenas optando por energia sustentável, você está
              escolhendo um caminho cheio de recompensas para o futuro.
            </p>
          </div>
          <svg
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-eDarkBlue w-72 h-60"
        >
          <path d="M65 32.5C65 65 65 65 32.5 65C14.5508 65 0 50.4493 0 32.5C0 0 0 0 32.5 0C50.4493 0 65 14.5507 65 32.5Z" />
        </svg>
        </div>
      </div>
    </section>
  );
});

export default Tokenization;
