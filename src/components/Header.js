import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utilis/userSlice";

import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { logo } from "../utilis/constants";

const Header = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       navigate("/browse");
  //     }
  //   });
  //   return () => unsubscribe(); // Clean up subscription on unmount
  // }, [auth, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error.message);
      });
  };
  return (
    <div className="absolute w-full bg-gradient-to-b from-black flex justify-between">
      <div>
        <img className="w-44 py-2 px-8 " src={logo} alt="logo" />
      </div>
      <div>
        {user && (
          <button
            className="bg-black text-red-600 rounded-sm p-4 m-4"
            onClick={handleSignOut}
          >
            sign-out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
