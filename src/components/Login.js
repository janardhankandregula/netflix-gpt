import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [nameValid, setnameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setpasswordValid] = useState(true);

  const toggleSignIn = () => {
    setSignIn(!signIn);
  };

  const emailRef = useRef(null);

  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const validate = (emailRef, passwordRef) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const nameRegex = /([a-zA-Z0-9_\s]+)/;

    if (!emailRegex.test(emailRef.current.value)) {
      setEmailValid(false);
      //return "Email is not valid";
    } else {
      setEmailValid(true);
    }

    if (!passwordRegex.test(passwordRef.current.value)) {
      setpasswordValid(false);
      //return "Password is not valid";
    } else {
      setpasswordValid(true);
    }
    if (!nameRegex.test(nameRef.current.value)) {
      setnameValid(false);
    } else {
      setnameValid(true);
    }
    return null;
  };

  const handleClick = () => {
    const validationResult = validate(emailRef, passwordRef);
    // console.log(result);
    // if (validationResult) {
    //   console.log(validationResult); // Output validation error message
    // }
    // else {
    //   console.log("Email and password are valid");
    // }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12  w-4/12 absolute top-20 left-1/2 transform -translate-x-1/2 mt-28 bg-black  bg-opacity-85 text-white"
      >
        <div className="flex flex-col">
          <label className="p-2 m-2 text-white font-bold text-4xl">
            {signIn ? "Sign In" : "Sign Up"}
          </label>
          {signIn ? null : (
            <>
              <input
                ref={nameRef}
                type="text"
                placeholder="Full name"
                className="p-2 m-2 h-14 bg-slate-500 bg-opacity-30 rounded-md"
              />
              {!nameValid && (
                <p className="ml-2 text-sm text-red-600">
                  Full name is required
                </p>
              )}
            </>
          )}
          <input
            ref={emailRef}
            type="text"
            placeholder="Email or Mobile number"
            className="p-2 m-2 h-14 bg-slate-500 bg-opacity-30 rounded-md"
          />
          {/* {isValid ? (
            ""
          ) : (
            <p className="ml-2 text-sm text-red-600">Email is not valid</p>
          )} */}
          {!emailValid && (
            <p className="ml-2 text-sm text-red-600">Email is not valid</p>
          )}
          <input
            ref={passwordRef}
            type="password"
            placeholder="password"
            className="p-2 m-2 h-14 bg-slate-500 bg-opacity-30 rounded-md"
          />
          {/* {passwordValid ? (
            ""
          ) : (
            <p className="ml-2 text-sm text-red-600">Password is not valid</p>
          )} */}
          {!passwordValid && (
            <p className="ml-2 text-sm text-red-600">Password is not valid</p>
          )}
          <button
            onClick={handleClick}
            className="px-4 py-2 m-4 bg-red-600 text-white font-bold text-lg rounded-md"
          >
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
