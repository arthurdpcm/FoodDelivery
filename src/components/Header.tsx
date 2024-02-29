import { useEffect, useState } from "react";
import MenuButton from "./MenuButton";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("isSmallScreen");
    return storedValue ? JSON.parse(storedValue) : window.innerWidth <= 900;
  });

  const isLogged = false
  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth <= 900;
      setIsSmallScreen(newSize);
      localStorage.setItem("isSmallScreen", JSON.stringify(newSize));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex gap-20 items-start justify-between mt-20">
      <div className={`mb-2 sm:mb-0 flex flex-row gap-20 items-center`}>
        <a href='/' className={`text-4xl ml-16`}><strong>Food</strong>Delivery</a>
        {isSmallScreen ? null : (
          <ul className="flex flex-row text-sm sm:text-xl ml-4 font-light gap-5">
            <li><a href="#" className="hover:underline">Restaurants</a></li>
            <li><a href="#" className="hover:underline">Orders</a></li>
          </ul>
        )}
      </div>
      <div className="flex">
        {isSmallScreen ? (
          <MenuButton />
        ) : (
          <nav className="sm:mr-20 mr-16">
            <ul className="flex flex-row gap-4 text-sm sm:text-xl items-center">
            {!isLogged ? (
                <>
                  <li><a href="#" className="hover:underline font-light">Sign Up</a></li>
                  <li>
                    <a href="#" className="hover:underline">
                      <button
                        className="p-3 bg-yellow-400 text-zinc-800 font-light h-12 w-24 rounded-md hover:bg-yellow-600 hover:text-zinc-200 transition duration-300">
                        Sign In
                      </button>
                    </a>
                  </li>
                  </>
              ):(
                <>
                  <li><a href="#" className="hover:underline font-light">Log out</a></li>
                  <li>
                    <a href="#" className="hover:underline">
                      <button
                        className="p-3 bg-yellow-400 text-zinc-800 font-light h-12 w-24 rounded-md hover:bg-yellow-600 hover:text-zinc-200 transition duration-300">
                        Profile
                      </button>
                    </a>
                  </li>
                </>
              )}

            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
