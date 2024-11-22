import { forwardRef } from "react";

const Tokenization = forwardRef(({}, ref) => {
  return (
    <section ref={ref} className="w-full min-h-[70vh] bg-eGreen flex">
      <div className="container px-20 mx-auto flex flex-col gap-10">
        <div className="flex justify-between items-center pt-20">
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
