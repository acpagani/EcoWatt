import { forwardRef } from "react";

const AiLogs = forwardRef(({}, ref) => {
  return (
    <section ref={ref} className="w-full min-h-[70vh] bg-eGreen flex">
      <div className="container mx-auto px-10 lg:px-20 sm:px-10 flex flex-col gap-10">
        <div className="w-[50%] mx-auto flex gap-5 justify-center items-center">
          <div className="flex flex-col md:flex-row gap-5">
            <svg
              className="size-20"
              width="85"
              height="90"
              viewBox="0 0 94 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M47 94C72.9574 94 94 72.9574 94 47C94 21.0426 72.9574 0 47 0C21.0426 0 0 21.0426 0 47C0 72.9574 21.0426 94 47 94ZM47 74.26C62.0553 74.26 74.26 62.0553 74.26 47C74.26 31.9447 62.0553 19.74 47 19.74C31.9447 19.74 19.74 31.9447 19.74 47C19.74 62.0553 31.9447 74.26 47 74.26Z"
                fill="white"
              />
            </svg>
            <svg
              className="size-20"
              width="85"
              height="90"
              viewBox="0 0 85 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.8305 1.96477C40.8096 -0.173543 44.1904 -0.173545 46.1695 1.96477L82.8567 41.6037C84.6306 43.5204 84.6306 46.4796 82.8567 48.3963L46.1695 88.0352C44.1904 90.1735 40.8096 90.1735 38.8305 88.0352L2.14335 48.3963C0.369382 46.4796 0.369381 43.5204 2.14335 41.6037L38.8305 1.96477Z"
                fill="white"
              />
            </svg>
            <svg
              className="size-20"
              width="65"
              height="65"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M65 32.5C65 65 65 65 32.5 65C14.5508 65 0 50.4493 0 32.5C0 0 0 0 32.5 0C50.4493 0 65 14.5507 65 32.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <svg
              className="size-20"
              width="95"
              height="95"
              viewBox="0 0 95 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 47.1296C0 47.1296 21.7111 41.1096 31.4104 31.4104C41.1096 21.7111 47.1296 -8.58747e-07 47.1296 -8.58747e-07C47.1296 -8.58747e-07 53.1284 21.7111 62.8208 31.4104C72.5235 41.12 94.2592 47.1296 94.2592 47.1296C94.2592 47.1296 72.5235 53.118 62.8208 62.8207C53.118 72.5235 47.1296 94.2592 47.1296 94.2592C47.1296 94.2592 41.12 72.5235 31.4104 62.8207C21.7111 53.1284 0 47.1296 0 47.1296Z"
                fill="white"
              />
            </svg>
            <svg
              className="size-20"
              width="69"
              height="90"
              viewBox="0 0 69 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M67.9801 4.61036C69.5034 2.77787 68.2002 0 65.8173 0L2.99519 0C0.612269 0 -0.690896 2.77787 0.832361 4.61036L67.9801 85.3896C69.5034 87.2221 68.2002 90 65.8173 90H2.99519C0.612269 90 -0.690896 87.2221 0.832361 85.3896L67.9801 4.61036Z"
                fill="white"
              />
            </svg>

            <svg
              className="size-20"
              width="85"
              height="90"
              viewBox="0 0 85 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.8305 1.96477C40.8096 -0.173543 44.1904 -0.173545 46.1695 1.96477L82.8567 41.6037C84.6306 43.5204 84.6306 46.4796 82.8567 48.3963L46.1695 88.0352C44.1904 90.1735 40.8096 90.1735 38.8305 88.0352L2.14335 48.3963C0.369382 46.4796 0.369381 43.5204 2.14335 41.6037L38.8305 1.96477Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center pt-20">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl text-eWhite font-bold">
              Análise de Dados com IA
            </h2>
            <p className="text-xl text-eWhite max-w-prose mt-5">
              Nossa plataforma utiliza{" "}
              <span className="font-bold">inteligência artificial</span> para
              analisar dados e fornecer insights sobre o desempenho das
              indústrias. Receba{" "}
              <span className="font-bold">logs crescentes</span> e{" "}
              <span className="font-bold">pontuações</span> baseadas nos{" "}
              <span className="font-bold">resultados</span>. Ao adotar nossa
              solução, você está optando por um futuro de{" "}
              <span className="font-bold">eficiência e inovação</span>.
            </p>
          </div>
          <svg
            className="fill-eDarkBlue size-52 lg:mr-20"
            width="95"
            height="95"
            viewBox="0 0 95 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 47.1296C0 47.1296 21.7111 41.1096 31.4104 31.4104C41.1096 21.7111 47.1296 -8.58747e-07 47.1296 -8.58747e-07C47.1296 -8.58747e-07 53.1284 21.7111 62.8208 31.4104C72.5235 41.12 94.2592 47.1296 94.2592 47.1296C94.2592 47.1296 72.5235 53.118 62.8208 62.8207C53.118 72.5235 47.1296 94.2592 47.1296 94.2592C47.1296 94.2592 41.12 72.5235 31.4104 62.8207C21.7111 53.1284 0 47.1296 0 47.1296Z" />
          </svg>
        </div>
      </div>
    </section>
  );
});

export default AiLogs;
