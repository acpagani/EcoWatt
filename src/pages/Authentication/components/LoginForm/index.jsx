import { useState } from "react";
import { login } from "../../../../api/auth";
import Swal from "sweetalert2";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.showLoading();
    const response = await login(email, password);
    
    if (response.data.length === 0) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Erro!",
        text: "E-mail ou senha incorretos!",
      });
      return
    }

    Swal.close();
    localStorage.setItem("user", JSON.stringify(response.data[0]));
    window.location.replace("/service");
  };

  return (
    <form
      className="flex flex-col gap-5 w-full sm:max-w-80"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-1">
        <label className="font-bold text-eGray" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          placeholder="Ex: nome@email.com"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-gray-300 text-eGreen focus:outline-eGreen rounded-md p-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:outline-pink-500"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold text-eGray" htmlFor="senha">
          Senha
        </label>
        <input
          id="senha"
          type="password"
          placeholder="*******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          className="border-2 border-gray-300 text-eGreen focus:outline-eGreen rounded-md p-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:outline-pink-500"
        />
      </div>
      <button
        type="submit"
        className="bg-eGreen text-eWhite font-bold h-12 rounded-md hover:bg-eDarkBlue hover:text-eGreen transition-colors flex items-center justify-center disabled:bg-eGreen disabled:opacity-70"
      >
        Entrar
      </button>
    </form>
  );
}
