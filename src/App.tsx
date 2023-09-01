import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./routes/routes";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

const Landing = lazy(() => import("./pages/landing/Landing"));
const WhoWeAre = lazy(() => import("./pages/landing/whoWeAre/WhoWeAre"));
const Shop = lazy(() => import("./pages/landing/shop/Shop"));
const Product = lazy(() => import("./pages/landing/shop/components/Product"));

function App() {
  return (
    <>
      <Suspense fallback={<>Loading ....</>}>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Landing />} />
            <Route path={PublicRoutes.landing} element={<Landing />} />
            <Route path={PublicRoutes.wheWeAre} element={<WhoWeAre />} />
            <Route path={PublicRoutes.shop} element={<Shop />} />
            <Route path={`${PublicRoutes.product}/:id`} element={<Product />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
