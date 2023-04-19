import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAuthClientRequest } from "store/actions";
import { BASE_URL, Endpoint, HEADERS, Method } from "constants/api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthResponse, rootState } from "types/store";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [isPress, setPress] = useState(false);
  const [password, setPassword] = useState('');
  const handleLogin = useCallback(() => { 
    setPress(!isPress);
  }, [setPress]);
  const { user } = useSelector((state: rootState) => state);
  const fetchLogin = useCallback(() => {
    if (isPress)
      dispatch(fetchAuthClientRequest({
        url: `${BASE_URL}${Endpoint.AUTH_LOGIN}`,
        options: {
          method: Method.POST,
          headers: HEADERS,
          body: new URLSearchParams({
            email: email,
            password: password
          }),
        }
      }));
    setPress(false);
  }, [isPress, email, password]);
  
  useEffect(() => {
    console.log(user)
    if (user)
      navigate('/admin/dashboard');
  }, [user, navigate]);

  useEffect(() => {
    if (isPress)
      fetchLogin();
  }, [isPress, email, password])

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div>
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
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
          label="Password*"
          onChange={setPassword}
          placeholder="Min. 8 characters"
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
          onClick={handleLogin}
        >
          Sign In
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <a
            href=" "
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
}
