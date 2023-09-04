import { Link } from "react-router-dom";
import { PublicRoutes } from "../routes/routes";
import { useEffect } from "react";

function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector("header");
      const logo = document.getElementById("logo") as HTMLInputElement;

      if (window.scrollY > 0) {
        navBar?.classList.remove("text-white");
        navBar?.classList.add("bg-white");
        navBar?.classList.add("text-black");

        logo.src =
          "data:image/png;base64,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";
      } else {
        navBar?.classList.add("text-white");
        navBar?.classList.remove("bg-white");
        navBar?.classList.remove("text-black");

        logo.src =
          "data:image/png;base64,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";
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
      className="text-white z-20 fixed flex-col md:flex-row px-20 py-3 gap-4 transition-colors duration-500 border-b border-gray-200 text-sm w-full flex items-center justify-between"
    >
      {/* bg-[#121212]  border-b border-white  */}
      <nav className="w-full px-4 py-3  font-medium tracking-wide text-xl">
        <div className="flex justify-between items-center gap-2">
          <div>
            <Link
              to="/"
              onClick={handleScroll}
              className="items-center gap-4 hover:text-[#ce7533] transition-colors"
            >
              <img
                id="logo"
                src="data:image/png;base64,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"
                alt="boreal logo"
                className="w-24"
              />
            </Link>
          </div>
          {/* Center backdrop-blur-sm  Bebas Neue",cursive */}
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center relative">
              <Link
                to={PublicRoutes.wheWeAre}
                onClick={handleScroll}
                className="hover:text-[#ce7533] p-2"
              >
                WHO WE ARE?
              </Link>
            </div>
            <div>|</div>
            <div className="flex items-center relative">
              <Link
                to={PublicRoutes.locations}
                onClick={handleScroll}
                className="hover:text-[#ce7533] p-2"
              >
                LOCATIONS
              </Link>
            </div>
            <div>|</div>
            <div className="flex items-center relative">
              <Link
                to={PublicRoutes.shop}
                onClick={handleScroll}
                className="hover:text-[#ce7533] p-2"
              >
                SHOP
              </Link>
            </div>
            <div>|</div>
            <div>
              <Link
                to={PublicRoutes.catering}
                onClick={handleScroll}
                className="hover:text-[#ce7533] p-2"
              >
                COFFEE CATERING
              </Link>
            </div>
            <div>|</div>
            <div>
              <Link
                to={PublicRoutes.contact}
                onClick={handleScroll}
                className="hover:text-[#ce7533] p-2"
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* Rigth */}
          <div className="flex justify-center items-center">
            <Link
              to={PublicRoutes.landing}
              className="hover:text-[#ce7533] p-2"
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
