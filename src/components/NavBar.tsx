import { Link } from "react-router-dom";
import { PublicRoutes } from "../routes/routes";

function NavBar() {
  return (
    <header
      style={{ fontFamily: "Bebas Neue" }}
      className="z-10 fixed flex-col md:flex-row px-8 py-4 gap-4 backdrop-blur-sm bg-transparent border-b border-white  text-white text-sm w-full flex items-center justify-between"
    >
      {/* bg-[#121212]  border-b border-white  */}
      <nav className="w-full px-4 py-3  font-semibold  tracking-widest text-xl bg-opacity-60">
        <div className="flex justify-between items-center gap-2 ">
          <div>
            <Link
              to="/"
              className="items-center gap-4 hover:text-white transition-colors"
            >
              MOCCA
            </Link>
          </div>
          {/* Center backdrop-blur-sm  Bebas Neue",cursive */}
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center relative">
              <Link
                to={PublicRoutes.wheWeAre}
                className="hover:text-[#ce7533] p-2 transition-colors"
              >
                WHO WE ARE?
              </Link>
            </div>
            <div>|</div>
            <div className="flex items-center relative">
              <Link
                to={PublicRoutes.landing}
                className="hover:text-[#ce7533] p-2 transition-colors"
              >
                CAFES
              </Link>
            </div>
            <div>|</div>
            <div className="flex items-center relative">
              <Link
                to={PublicRoutes.shop}
                className="hover:text-[#ce7533] p-2 transition-colors"
              >
                SHOP
              </Link>
            </div>
            <div>|</div>
            <div>
              <Link
                to={PublicRoutes.landing}
                className="hover:text-[#ce7533] p-2 transition-colors"
              >
                SHOP
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
