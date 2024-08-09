import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const toggleSignIn = () => {
    setSignIn(!signIn);
  };
  return (
    <div className="relative">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
          alt="Des"
        />
      </div>
      <form className="p-12  w-4/12 absolute top-20 left-1/2 transform -translate-x-1/2 mt-28 bg-black  bg-opacity-85">
        <div className="flex flex-col">
          <label className="p-2 m-2 text-white font-bold text-4xl">
            {signIn ? "Sign In" : "Sign Up"}
          </label>
          {signIn ? (
            ""
          ) : (
            <input
              type="text"
              placeholder="Full name"
              className="p-2 m-2 h-14 bg-slate-500 bg-opacity-30 rounded-md"
            />
          )}
          <input
            type="text"
            placeholder="Email or Mobile number"
            className="p-2 m-2 h-14 bg-slate-500 bg-opacity-30 rounded-md"
          />
          <input
            type="password"
            placeholder="password"
            className="p-2 m-2 h-14 bg-slate-500 bg-opacity-30 rounded-md"
          />
          <button className="px-4 py-2 m-4 bg-red-600 text-white font-bold text-lg rounded-md">
            {signIn ? "Sign-In" : "Sign-up"}
          </button>
          {signIn ? (
            <p className="text-white">
              New to Netflix ?{" "}
              <span className="font-bold cursor-pointer" onClick={toggleSignIn}>
                Sign up now
              </span>
            </p>
          ) : (
            <p className="text-white">
              Already have an account ?{" "}
              <span className="font-bold cursor-pointer" onClick={toggleSignIn}>
                Sign-In
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
