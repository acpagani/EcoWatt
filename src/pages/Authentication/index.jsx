import { useState } from "react";
import Footer from "../LandingPage/components/Footer";
import Header from "../LandingPage/components/Header";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SigninForm from "./components/SigninForm";

export default function Authentication() {
  const [authMethod, setAuthMethod] = useState("login");

  return (
    <>
      <Header />
      <main>
        <section
          className="w-full min-h-[70vh] bg-repeat bg-eWhite relative"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        >
          <div className="container px-20 mx-auto flex justify-center py-20">
            <div className="bg-eWhite w-[30rem] drop-shadow-lg rounded-md flex flex-col divide-y-2">
              <div className="flex divide-x-2">
                <button
                  className={`w-full py-3 text-xl font-bold transition-colors duration-300 ${
                    authMethod === "register"
                      ? "text-eGreen"
                      : "text-gray-400 hover:text-eGray"
                  }`}
                  onClick={() => setAuthMethod("register")}
                >
                  Cadastro
                </button>
                <button
                  className={`w-full py-3 text-xl font-bold transition-colors duration-300 ${
                    authMethod === "login"
                      ? "text-eGreen"
                      : "text-gray-400 hover:text-eGray"
                  }`}
                  onClick={() => setAuthMethod("login")}
                >
                  Login
                </button>
              </div>
              <div className="w-full flex items-center justify-center py-10 px-10">
                {authMethod === "login" ? <LoginForm /> : <SigninForm />}
              </div>
            </div>
          </div>
          <Link
            to={"/"}
            className="hover:bg-gray-400/30 transition-all rounded-xl absolute top-10 left-10 group"
          >
            <MdOutlineKeyboardArrowLeft className="text-eGray text-4xl group-hover:-translate-x-2 transition-all" />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
