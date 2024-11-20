import { forwardRef } from "react";
import { Link } from "react-router-dom";

const JoinUs = forwardRef(({}, ref) => {
  return (
    <section
      ref={ref}
      className="w-full min-h-[100vh] bg-eWhite flex bg-repeat"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cubes.png')",
      }}
    >
      <div className="container mx-auto flex flex-col gap-10 items-center self-center">
        <svg
          width="147"
          height="147"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_3)">
            <path
              d="M73.5 147C114.093 147 147 114.093 147 73.5C147 32.9071 114.093 0 73.5 0C32.9071 0 0 32.9071 0 73.5C0 114.093 32.9071 147 73.5 147Z"
              fill="#10D48E"
            />
            <path
              d="M89.0469 52.9045H75.0104L82.3264 31.7472L58.0741 61.2617H72.1115L64.7956 82.4185L89.0469 52.9045Z"
              fill="#132A3A"
            />
            <path
              d="M40.0029 98.5303C42.2243 98.5303 45.3307 100.206 44.7094 104.63H37.8755C38.2144 105.647 39.0992 106.174 40.2853 106.174C41.4901 106.174 41.8667 105.91 42.5444 105.628L44.1823 107.209C43.3163 108.056 42.149 108.678 40.1723 108.678C37.7437 108.678 34.8445 107.002 34.8445 103.632C34.8445 100.206 37.7814 98.5303 40.0029 98.5303ZM40.0029 101.072C39.1557 101.072 38.2897 101.561 37.9132 102.54H42.0737C41.7725 101.561 40.85 101.072 40.0029 101.072ZM51.2233 98.5303C53.0118 98.5303 54.5178 99.2833 55.4403 100.865L53.1812 101.938C52.6917 101.524 52.2964 101.147 51.2609 101.147C50.1313 101.147 48.9829 102.013 48.9829 103.613C48.9829 105.195 50.1313 106.023 51.2609 106.023C52.2964 106.023 52.6917 105.684 53.1812 105.27L55.478 106.343C54.5178 107.925 53.0494 108.64 51.2233 108.64C49.0394 108.64 46.1025 107.077 46.1025 103.613C46.1025 100.206 49.0394 98.5303 51.2233 98.5303ZM61.8601 98.5303C64.0815 98.5303 67.0184 100.206 67.0184 103.632C67.0184 107.077 64.0815 108.678 61.8601 108.678C59.6386 108.678 56.7017 107.077 56.7017 103.632C56.7017 100.206 59.6386 98.5303 61.8601 98.5303ZM61.8601 101.147C60.7305 101.147 59.5821 102.013 59.5821 103.632C59.5821 105.195 60.7305 106.061 61.8601 106.061C62.9896 106.061 64.1569 105.195 64.1569 103.632C64.1569 102.013 62.9896 101.147 61.8601 101.147ZM82.2112 98.6621H85.1669L81.6652 108.489H78.8036L76.6574 102.371L74.5113 108.489H71.6497L68.148 98.6621H71.1037L73.1181 104.95L75.3584 98.6621H77.9564L80.1968 104.95L82.2112 98.6621ZM93.6387 98.6997H96.6132V108.489H93.6387V107.51C93.5069 107.849 92.622 108.678 91.116 108.678C88.8756 108.678 86.2965 107.077 86.2965 103.576C86.2965 100.206 88.8756 98.5303 91.116 98.5303C92.622 98.5303 93.5069 99.3963 93.6387 99.6034V98.6997ZM91.549 106.061C92.7727 106.061 93.7704 105.214 93.7704 103.576C93.7704 101.994 92.7727 101.147 91.549 101.147C90.2688 101.147 89.1769 102.013 89.1769 103.576C89.1769 105.195 90.2688 106.061 91.549 106.061ZM103.297 106.004C103.824 106.004 104.2 105.929 104.614 105.816V108.282C104.2 108.471 103.522 108.602 102.525 108.602C100.887 108.602 99.5124 108.056 99.5124 105.044V101.147H98.1381V98.6997H99.5124V96.4029H102.487V98.6997H104.577V101.147H102.487V105.044C102.487 105.477 102.6 106.004 103.297 106.004ZM110.959 106.004C111.486 106.004 111.862 105.929 112.277 105.816V108.282C111.862 108.471 111.185 108.602 110.187 108.602C108.549 108.602 107.175 108.056 107.175 105.044V101.147H105.8V98.6997H107.175V96.4029H110.149V98.6997H112.239V101.147H110.149V105.044C110.149 105.477 110.262 106.004 110.959 106.004Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_3">
              <rect width="147" height="147" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div className="flex flex-col gap-8 items-center max-md:px-10">
          <h2 className="text-4xl text-eGray">Junte-se a nós</h2>
          <p className="text-xl text-eGray max-w-[30rem]">
            Ama o som da EcoWatt? Nós achamos que sim! Clique abaixo e faça a
            mudança hoje. Você não estará apenas se juntando a uma revolução
            energética, você estará liderando-a.
          </p>
          <Link
            to={"/auth"}
            className="bg-eDarkBlue text-eWhite py-2 px-5 rounded-lg hover:bg-eGreen transition-colors duration-500"
          >
            Entrar
          </Link>
        </div>
      </div>
    </section>
  );
});

export default JoinUs;
