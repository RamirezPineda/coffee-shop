import { useState } from "react";

import SuscribeBoreal from "../../../components/SuscribeBoreal";

import { Product, productsList } from "../../../constants/productsList";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../../routes/routes";

function Shop() {
  const [categorySelected, setCategorySelected] = useState("");

  const productsListFilter = (): Product[] => {
    return categorySelected === ""
      ? productsList
      : productsList.filter((product) => product.category === categorySelected);
  };

  return (
    <>
      {/* background */}
      <div className="h-24 bg-black"></div>

      <section className="container">
        <div className="flex flex-col items-center gap-2 mt-10">
          {/* header section */}
          <div className="flex justify-center items-center">
            <div className="text-center">
              <h4 className="font-medium text-[#e67e22] mb-1">
                Our dear coffee loving customer, perhaps you would be
              </h4>
              <h2 className="text-4xl font-bold mb-2">
                interested in some of our amazing coffees?
              </h2>
            </div>
          </div>

          {/* Filter */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <p className="hidden font-medium md:block">SORT PRODUCTS BY: </p>
            <div className="flex flex-row text-gray-500 font-medium">
              <button
                onClick={() => setCategorySelected("")}
                className="px-3 hover:text-[#ce7533]"
              >
                ALL
              </button>
              <div>|</div>
              <button
                onClick={() => setCategorySelected("BEANS")}
                className="px-3 hover:text-[#ce7533]"
              >
                BEANS
              </button>
              <div>|</div>
              <button
                onClick={() => setCategorySelected("MERCHANDISE")}
                className="px-3 hover:text-[#ce7533]"
              >
                MERCHANDISE
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="px-20 mt-10 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {productsListFilter().map((product) => (
              <Link
                to={`${PublicRoutes.product}/${product.id}`}
                key={product.id}
                className="p-4"
              >
                <img
                  className="mb-4 bg-cover"
                  src={product.image}
                  alt={product.name}
                />
                <div className="text-center uppercase">
                  <h3 className="text-base font-medium mb-11.5">
                    {product.name}
                  </h3>
                  <p className="text-[#f78f1e] font-medium">
                    {product.price} CHF
                  </p>
                  <p className="text-sm text-gray-600">{product.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SuscribeBoreal />
    </>
  );
}
export default Shop;
