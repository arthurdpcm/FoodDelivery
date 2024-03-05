import { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import DeliveryGuy from "/delivery_guy.png";
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("isSmallScreen");
    return storedValue ? JSON.parse(storedValue) : window.innerWidth <= 1150;
  });

  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth <= 1150;
      setIsSmallScreen(newSize);
      localStorage.setItem("isSmallScreen", JSON.stringify(newSize));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex py-5 items-center bg-zinc-100 sticky top-0">
      <div className={`sm:mb-0 flex flex-row items-center`}>
        {!isSmallScreen && (
          <button onClick={() => navigate("/")}>
            <img alt="Delivery Guy" src={DeliveryGuy} className="ml-20 md:ml-40 h-24" />
          </button>
        )}

        <button onClick={() => navigate("/")} className={`text-4xl ${isSmallScreen ? "flex py-5 ml-20 " : null}`}>
          <strong className="text-blue-600">Food</strong>Dev
        </button>

        {isSmallScreen ? null : (
          <ul className="flex flex-row text-sm sm:text-xl ml-20 font-normal gap-5">
            <li>
              <button onClick={() => navigate("/restaurants")} className="hover:underline">
                Restaurants
              </button>
            </li>

          </ul>
        )}
      </div>
      <div className="flex justify-end ml-auto mr-4">
        {isSmallScreen ? (
          <div className="flex gap-4">
            {user && (
              <button onClick={() => navigate(`/cart`)} className="hover:bg-zinc-200 p-3 rounded-full">
                <ShoppingCart className="text-blue-700" size={24} />
              </button>
            )}
            <MenuButton />
          </div>
        ) : (
          <nav className="sm:mr-20 mr-16">
            <ul className="flex flex-row gap-4 text-sm sm:text-xl items-center">
              <li className="w-20">
                <button onClick={() =>!user ? navigate( `/signUp`): setUser(null)} className="hover:underline font-normal">
                  {!user ? "Sign Up" : "Log out"}{" "}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate(user ? `/profile` : `/Login`)}
                  className="p-3  mb-1 bg-gradient-to-r from-blue-500 to-blue-600 text-zinc-200 font-normal h-12 w-24 rounded-md
                    hover:from-blue-400 hover:to-blue-500 hover:text-zinc-100 transition duration-300"
                >
                  {!user ? "Login" : "Profile"}
                </button>
              </li>
              {user ? (
                <li>
                  <button onClick={() => navigate(`/cart`)} className="hover:bg-zinc-200 p-3 rounded-full">
                    <ShoppingCart size={24} />
                  </button>
                </li>
              ) : null}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
