import { useState } from "react";
import { PatternFormat } from "react-number-format";
import { signup } from "../../../../api/auth";
import Swal from 'sweetalert2'

export default function SigninForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  let auth = JSON.parse(localStorage.getItem("auth")) || [];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("As senhas não coincidem");
      return;
    }
    let alreadyExists = false;
    auth.forEach((user) => {
      if (user.email === email) {
        alert("E-mail já cadastrado");
        alreadyExists = true;
      }
    });
    if (alreadyExists) return;
    const user = {
      name,
      email,
      phone,
      password,
      points: 0,
    };
    try {
      const response = await signup(email, name, password, phone);
  
      if (response?.error) {
        alert(response.error.message || "Erro ao realizar o cadastro");
        return;
      }
  
      Swal.fire({
        icon: "success",
        title: "Cadastro realizado com sucesso!",
        text: "Usuário cadastrado com sucesso!",
        confirmButtonText: "Ok",
      }).then(() => window.location.replace("/service"));
    } catch (error) {
      console.error("Erro durante o cadastro:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado ao realizar o cadastro!",
      });
    }
  };

  return (
    <form
      className="flex flex-col gap-5 w-full sm:max-w-80"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-1">
        <label className="font-bold text-eGray" htmlFor="name">
          Nome
        </label>
        <input
          id="name"
          type="text"
          placeholder="Ex.: João da Silva"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-300 caret-eGreen text-eGreen focus:outline-eGreen rounded-md p-2"
        />
      </div>
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
        <label className="font-bold text-eGray" htmlFor="phone">
          Celular
        </label>
        <PatternFormat
          id="phone"
          name="phone"
          mask="_"
          format="(##) #####-####"
          placeholder="(00) 00000-0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border-2 border-gray-300 text-eGreen focus:outline-eGreen rounded-md p-2"
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
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-gray-300 text-eGreen focus:outline-eGreen rounded-md p-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:outline-pink-500"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold text-eGray" htmlFor="senha-confirm">
          Confirmar Senha
        </label>
        <input
          id="senha-confirm"
          type="password"
          placeholder="*******"
          name="passowrdConfirm"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
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
