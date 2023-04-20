import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import { http } from "utils/http";
import { Endpoint, headers, Method } from "constants/api";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = async () => {
    await http(Endpoint.AUTH_REGISTER, {
      method: Method.POST,
      headers,
      body: new URLSearchParams({
        name,
        email,
        password,
        tipo_usuario_id: "1"
      }),
    });
  };

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Registre-se
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Uma conta LOGICS para decolar sua empresa
        </p>
        {/* Nome */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Nome completo*"
          onChange={setName}
          placeholder="Rodolfo Rodriguez Pacheco"
          id="name"
          type="text"
        />
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          onChange={setEmail}
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Senha*"
          onChange={setPassword}
          placeholder="Min. 8 caracteres"
          id="password"
          type="password"
        />
        <button
          onClick={handleRegister}
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Cadastrar
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Possui uma conta?
          </span>
          <Link to="/auth/sign-in" className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white">
            Acesse-a
          </Link>
        </div>
      </div>
    </div>
  );
}
