import { useState } from "react";
import Footer from "../LandingPage/components/Footer";
import Header from "../LandingPage/components/Header";

export default function Authentication() {
  const [authMethod, setAuthMethod] = useState("login");

  return (
    <>
      <Header />
      <main>
        <section
          className="w-full min-h-[70vh] bg-repeat"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        >
          <div className="container px-20 mx-auto flex justify-center py-20">
            <div className="bg-eWhite w-[30rem] h-96 drop-shadow-lg rounded-md flex flex-col divide-y-2">
              <div className="flex divide-x-2">
                <button
                  className={`w-full py-3 text-xl font-bold transition-colors duration-300 ${
                    authMethod === "login" ? "text-eGreen" : "text-gray-400 hover:text-eGray"
                  }`}
                  onClick={() => setAuthMethod("login")}
                >
                  Login
                </button>
                <button
                  className={`w-full py-3 text-xl font-bold transition-colors duration-300 ${
                    authMethod === "register" ? "text-eGreen" : "text-gray-400 hover:text-eGray"
                  }`}
                  onClick={() => setAuthMethod("register")}
                >
                  Cadastro
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
