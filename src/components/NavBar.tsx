import { Link } from "react-router-dom";
import { PublicRoutes } from "../routes/routes";
import { useEffect } from "react";

function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector("header");
      if (window.scrollY > 0) {
        navBar?.classList.remove("text-white");
        navBar?.classList.add("bg-white");
        navBar?.classList.add("text-black");
      } else {
        navBar?.classList.add("text-white");
        navBar?.classList.remove("bg-white");
        navBar?.classList.remove("text-black");
      }
      // navBar?.classList.toggle("prueba", window.screenY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => window.scrollTo(0, 0);

  // backdrop-blur-sm
  return (
    <header
      style={{ fontFamily: "Bebas Neue" }}
      className="text-white z-10 fixed flex-col md:flex-row px-8 py-4 gap-4 transition-colors duration-300 border-b border-white text-sm w-full flex items-center justify-between"
    >
      {/* bg-[#121212]  border-b border-white  */}
      <nav className="w-full px-4 py-3  font-semibold  tracking-widest text-xl bg-opacity-60">
        <div className="flex justify-between items-center gap-2 ">
          <div>
            <Link
              to="/"
              onClick={handleScroll}
              className="items-center gap-4 hover:text-[#ce7533] transition-colors"
            >
              MOCCA
            </Link>
          </div>
          {/* Center backdrop-blur-sm  Bebas Neue",cursive */}
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center relative">
              <Link
                to={PublicRoutes.wheWeAre}
                onClick={handleScroll}
                className="hover:text-[#ce7533] p-2 transition-colors"
              >
                WHO WE ARE?
              </Link>
            </div>
            <div>|</div>
            <div className="flex items-center relative">
              <Link
                to={PublicRoutes.locations}
                onClick={handleScroll}
                className="hover:text-[#ce7533] p-2 transition-colors"
              >
                LOCATIONS
              </Link>
            </div>
            <div>|</div>
            <div className="flex items-center relative">
              <Link
                to={PublicRoutes.shop}
                onClick={handleScroll}
                className="hover:text-[#ce7533] p-2 transition-colors"
              >
                SHOP
              </Link>
            </div>
            <div>|</div>
            <div>
              <Link
                to={PublicRoutes.catering}
                onClick={handleScroll}
                className="hover:text-[#ce7533] p-2 transition-colors"
              >
                CATERING
              </Link>
            </div>
          </div>

          {/* Rigth */}
          <div className="flex justify-center items-center">
            <Link
              to={PublicRoutes.landing}
              className="hover:text-[#ce7533] p-2 transition-colors"
            >
              LOGIN
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
