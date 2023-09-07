import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import SuscribeBoreal from "../../../../components/SuscribeBoreal";

import { productsList } from "../../../../constants/productsList";
import { RootState } from "../../../../redux/store";
import {
  addOneProduct,
  addToCart,
  removeOneProduct,
} from "../../../../redux/states/cart.state";

function Product() {
  const { id } = useParams();
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  console.log(cart);

  const productFound = productsList.find(
    (product) => product.id == parseInt(`${id}`)
  );

  const productCart = cart.find((product) => product.id == parseInt(`${id}`));

  return (
    <>
      <div className="flex flex-col md:flex-row px-24 pt-24">
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
          <div className="flex justify-center items-center mt-10">
            <p className="px-10 py-5 border-[0.5px] border-zinc-300">
              QUANTITY:
            </p>
            <input
              type="text"
              defaultValue={productCart ? productCart.quantity : 0}
              disabled
              className="px-3 py-[1.1rem] text-xl text-center w-16 border-[0.5px] border-zinc-300 focus:border-black focus:outline-none "
            />
            <div className="flex flex-col mx-0">
              <button
                onClick={() => {
                  const existProduct = cart.find(
                    (product) => product.id == productFound!.id
                  );

                  if (!existProduct) {
                    dispatch(
                      addToCart({
                        id: productFound!.id,
                        image: productFound!.image,
                        price: productFound!.price,
                        name: productFound!.name,
                        quantity: 1,
                      })
                    );
                  } else {
                    dispatch(addOneProduct(productFound!));
                  }
                }}
                className="px-10 py-[0.09rem] text-xl hover:bg-[#f78f1e] hover:text-white border-[1px] border-zinc-300 hover:border-[#f78f1e] outline-none transition-colors duration-300"
              >
                +
              </button>
              <button
                onClick={() => dispatch(removeOneProduct(productFound!))}
                className="px-10 py-[0.09rem] text-xl hover:bg-[#f78f1e] hover:text-white border-[1px] border-zinc-300 hover:border-[#f78f1e] outline-none transition-colors duration-300"
              >
                -
              </button>
            </div>
            <button
              onClick={() => dispatch(addOneProduct(productFound!))}
              className=" font-semibold px-10 py-5 hover:text-white hover:bg-[#f78f1e] border-[0.5px] border-zinc-300 hover:border-[#f78f1e] foutline-none transition-colors duration-300"
            >
              ADD TO CART {"->"}
            </button>
          </div>
        </div>
      </div>

      <SuscribeBoreal />
    </>
  );
}
export default Product;
