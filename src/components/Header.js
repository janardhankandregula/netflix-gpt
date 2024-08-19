import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utilis/userSlice";
import { setGptToggle } from "../utilis/gptSlice";
import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { logo } from "../utilis/constants";
import { setLanguage } from "../utilis/userSlice";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");
  const languageDispatch = useDispatch();
  const gptButton = useSelector((store) => store.gpt.gptToggle);
  //console.log(gptButton);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    languageDispatch(setLanguage(language));
    setIsDropdownOpen(false);
  };

  const toggledispatch = useDispatch();
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

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // console.error("Sign out error:", error.message);
      });
  };

  const toggleGpt = () => {
    toggledispatch(setGptToggle());
  };

  return (
    <div className="w-full bg-gradient-to-b from-black flex justify-between z-20">
      <div>
        <img className="w-44 py-2 px-8 " src={logo} alt="logo" />
      </div>
      <div>
        {user && (
          <>
            {gptButton ? (
              ""
            ) : (
              <div className="relative inline-block text-left">
                <button
                  onClick={toggleDropdown}
                  className="bg-blue-950 py-2 px-4 m-4 rounded-lg text-white font-bold hover:bg-blue-500"
                >
                  {selectedLanguage}
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <ul className="py-1">
                      {["Hindi", "English", "Telugu"].map((language) => (
                        <li key={language}>
                          <button
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => handleLanguageSelect(language)}
                          >
                            {language}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <button
              className="bg-blue-950 py-2 px-4 m-4 rounded-lg text-white font-bold  hover:bg-blue-500"
              onClick={toggleGpt}
            >
              {/* GPT Search */}
              {gptButton ? "GPT Search" : "Home"}
            </button>
            <button
              className="bg-blue-950 py-2 px-4 m-4 rounded-lg text-white font-bold hover:bg-blue-500"
              onClick={handleSignOut}
            >
              sign-out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
