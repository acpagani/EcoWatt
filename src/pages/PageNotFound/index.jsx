import { Link } from "react-router-dom";
import Header from "../LandingPage/components/Header";

export default function PageNotFound() {
  return (
    <>
      <Header/>
      <main className="h-[90vh] w-screen flex items-center justify-center">
        <section className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-7xl md:text-9xl text-center font-bold">404</h1>
          <p className="text-center text-3xl md:text-5xl">Ops! Parece que você se perdeu...</p>
          <Link to={"/"} className="bg-eDarkBlue px-5 py-3 rounded-lg font-bold text-eWhite md:text-3xl hover:bg-eGreen hover:scale-110 transition-all duration-300">Voltar para página de início</Link>
        </section>
      </main>
    </>
  )
}