import React from "react";

import { Navigate, useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const NavRoute = ({ children }) => {
  //const auth = getAuth();
  const [user, setUser] = useState(null);

  const location = useLocation();
  useEffect(() => {
    // Update user state when auth changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  if (user) {
    return <Navigate to="/browse" state={{ from: location }} replace />;
  }
  return children;
};

export default NavRoute;
