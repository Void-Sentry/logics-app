import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Endpoint, Method } from "constants/api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { rootState } from "store/types/store/state/root";
import { SIGNIN_REQUEST } from "store/actions";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [res, setRes] = useState<any>({ error: '' });
  const { auth } = useSelector((state: rootState) => state);

  const fetchLogin = () => {
    dispatch(SIGNIN_REQUEST({
      url: Endpoint.AUTH_LOGIN,
      options: {
        method: Method.POST,
        body: new URLSearchParams({
          email,
          password
        })
      }
    }));
  };
  
  useEffect(() => {
    if (auth.message !== '') navigate('/admin/dashboard');
  }, [auth, navigate]);

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          LOGICS
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Entre com a sua conta LOGICS
        </p>
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          onChange={setEmail}
          placeholder="mail@simmmple.com"
          id="email"
          type="email"
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
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div>
          <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href=" "
          >
            Forgot Password?
          </a>
        </div>
        <button
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={fetchLogin}
        >
          Continue
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <Link to="/auth/sign-up" className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
