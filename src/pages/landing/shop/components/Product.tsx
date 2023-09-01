import { useParams } from "react-router-dom";

import FooterContent from "../../../../components/FooterContent";
import NavBar from "../../../../components/NavBar";
import SuscribeBoreal from "../../../../components/SuscribeBoreal";

import { productsList } from "../../../../constants/productsList";

function Product() {
  const { id } = useParams();

  const productFound = productsList.find(
    (product) => product.id == parseInt(`${id}`)
  );

  return (
    <>
      <NavBar />
      <div className="h-24 "></div>

      <div className="flex flex-col md:flex-row px-24">
        <div className="w-1/2 items-center p-4">
          <img
            src={productFound?.image}
            alt={productFound?.name}
            className="h-screen bg-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col items-start py-10">
          <h3 className="uppercase text-3xl font-bold mb-2">
            {productFound?.name}
          </h3>
          <h4 className="text-[#f78f1e] text-2xl font-semibold mb-4">
            {productFound?.price} CH
          </h4>
          <p className="text-lg font-medium mb-4">OVERWIEW</p>
          <p className="bg-none">{productFound?.description}</p>
        </div>
        {/* <div className="flex flex-row gap-4">
          <button>+</button>
          <button>-</button>
          <button>Add to cart</button>
        </div> */}
      </div>

      <SuscribeBoreal />

      <FooterContent />
    </>
  );
}
export default Product;
