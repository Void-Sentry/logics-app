import InputField from "components/fields/InputField";
// import Checkbox from "components/checkbox";
import { Endpoint, Method } from "constants/api";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { SIGNUP_REQUEST } from "store/actions";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { http } from "utils/http";
import { ComplexTable } from 'components/table/ComplexTable';

export const SignUp = () => {
  const [isTableAtt, setTableAtt] = useState(false);
  const [items, setItems] = useState([]);
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const fetchDeliveryByMail = async () => {
    const response = await http(`${Endpoint.FETCH_ORDER}/${email}`, { method: Method.GET });
    response ? setItems([response]) : setItems([]);
  };

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Rastreamento de pedidos
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Acompanhe em tempo-real o andamento das suas encomendas
        </p>
        {/* Nome */}
        {/* <InputField
          variant="auth"
          extra="mb-3"
          label="Nome completo*"
          onChange={setName}
          placeholder="Rodolfo Rodriguez Pacheco"
          id="name"
          type="text"
        /> */}
        {/* Email */}
        {/* <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          onChange={setEmail}
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
        /> */}

        {/* Password */}
        {/* <InputField
          variant="auth"
          extra="mb-3"
          label="Senha*"
          onChange={setPassword}
          placeholder="Min. 8 caracteres"
          id="password"
          type="password"
        /> */}
        <div className="relative mt-[3px] flex h-[61px] w-full flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:flex-grow-0 md:gap-1 xl:gap-2">
          <div className="flex h-full w-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white">
            <p className="pl-3 pr-2 text-xl">
              <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
            </p>
            <input
              type="text"
              placeholder="Informe o CPF"
              onChange={(event) => setEmail(event.target.value)}
              className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
            />
          </div>
        </div>
        {items.length !== 0 && (
          <div className="linear mt-2 w-full rounded-xl py-[12px] text-base font-medium text-white">
            <ComplexTable endpoint={Endpoint.FETCH_DELIVERY} isAtt={isTableAtt} setAtt={setTableAtt} tableData={items} />
          </div>
        )}
        <button
          onClick={fetchDeliveryByMail}
          disabled={!Boolean(email)}
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Localizar
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Voltar para a página de
          </span>
          <Link to="/auth/sign-in" className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white">
            login
          </Link>
        </div>
      </div>
    </div>
  );
}
