import { forwardRef } from "react";

const Tokenization = forwardRef(({}, ref) => {
  return (
    <section ref={ref} className="w-full min-h-[70vh] bg-eGreen flex">
      <div className="container mx-auto px-10 sm:px-10 lg:px-20 pb-10 flex flex-col gap-10">
        <div className="flex justify-between gap-10 items-center pt-20">
          <svg
            className="fill-eDarkBlue size-52 hidden md:block lg:ml-20"
            width="94"
            height="94"
            viewBox="0 0 94 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M47 94C72.9574 94 94 72.9574 94 47C94 21.0426 72.9574 0 47 0C21.0426 0 0 21.0426 0 47C0 72.9574 21.0426 94 47 94ZM47 74.26C62.0553 74.26 74.26 62.0553 74.26 47C74.26 31.9447 62.0553 19.74 47 19.74C31.9447 19.74 19.74 31.9447 19.74 47C19.74 62.0553 31.9447 74.26 47 74.26Z"
            />
          </svg>
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl text-eWhite font-bold">Tokenização</h2>
            <p className="text-xl text-eWhite max-w-prose mt-5">
              Nossos tokens de blockchain são mais do que apenas uma moeda
              digital, são <span className="font-bold">chaves</span> para um
              mundo emocionante de <span className="font-bold">benefícios</span>
              . Troque-os por{" "}
              <span className="font-bold">descontos, bônus e muito mais</span>.
              Ao abraçar o EcoWatt, você não está apenas optando por energia
              sustentável, você está escolhendo um{" "}
              <span className="font-bold">
                caminho cheio de recompensas para o futuro
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Tokenization;
