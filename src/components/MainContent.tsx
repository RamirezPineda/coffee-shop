import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import FooterContent from "./FooterContent";

function MainContent() {
  return (
    <>
      <NavBar />

      <Outlet />

      <FooterContent />
    </>
  );
}
export default MainContent;
