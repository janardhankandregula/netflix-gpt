import React, { useRef } from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { auth } from "../utilis/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

import { addUser, removeUser } from "../utilis/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Browse from "./Browse";
import { bgImage } from "../utilis/constants";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [nameValid, setnameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setpasswordValid] = useState(true);

  const auth = getAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    if (!emailRegex.test(emailRef?.current?.value)) {
      setEmailValid(!emailValid);
    } else {
      setEmailValid(true);
    }

    if (!passwordRegex.test(passwordRef?.current?.value)) {
      setpasswordValid(false);
    } else {
      setpasswordValid(true);
    }
    if (!nameRegex.test(nameRef?.current?.value)) {
      setnameValid(false);
    } else {
      setnameValid(true);
    }
    return null;
  };

  const handleClick = () => {
    if (signIn) {
      validate(emailRef, passwordRef);
      if (!emailValid || !passwordValid || !nameValid) {
        console.log("Please fix validation errors before signing up.");
        return;
      }

      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(
            addUser({
              email: user.email,
              uid: user.uid,
            })
          );
          navigate("/Browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      if (emailRef.current && passwordRef.current) {
        emailRef.current.value = "";
        passwordRef.current.value = "";
      }
    } else {
      validate(emailRef, passwordRef);

      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then(async (userCredential) => {
          const user = userCredential.user;
          const updatedUser = auth.currentUser;

          await updateProfile(updatedUser, {
            displayName: nameRef.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          });
          await updatedUser.reload();

          dispatch(
            addUser({
              email: updatedUser.email,
              uid: updatedUser.uid,
              name: updatedUser.displayName,
              photo: updatedUser.photoURL,
            })
          );
          navigate("/Browse");
          //console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }
    if (emailRef.current && passwordRef.current && nameRef.current) {
      emailRef.current.value = "";
      passwordRef.current.value = "";
      nameRef.current.value = "";
    }
  };
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      navigate("/browse");
    }
  }, [auth, navigate]);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       navigate("/browse");
  //     }
  //   });
  //   return () => unsubscribe(); // Clean up subscription on unmount
  // }, [auth, navigate]);

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative">
      <Header />
      <div>
        <img src={bgImage} alt="Des" />
      </div>
      <form
        onSubmit={handleSignUp}
        className="p-12  w-4/12 absolute top-20 left-1/2 transform -translate-x-1/2 mt-28 bg-black  bg-opacity-85 text-white"
      >
        <div className="flex flex-col">
          <label className="p-2 m-2 text-white font-bold text-4xl">
            {signIn ? "Sign In" : "Sign Up"}
          </label>
          {/* {signIn ? null : (
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
          )} */}
          {!signIn && (
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
            type="email"
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
