import { productsList } from "../../../constants/productsList";

function Cart() {
  return (
    <>
      <section className="pt-36">
        <div className="px-24">
          <h1 className="text-3xl font-semibold ">CART CONTENTS</h1>
        </div>
        <div className="px-24 pt-10">
          <table className="table-auto border-collapse border border-zinc-300">
            <thead className="text-xl font-medium text-start">
              <th>PRODUCT</th>
              <th>UNIT PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL PRICE</th>
            </thead>
            <tbody>
              {productsList?.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="flex flex-row gap-4">
                      <img
                        src={product.image}
                        alt="product image"
                        className="w-16 bg-center bg-cover"
                      />
                      <div>
                        <h3>{product.name}</h3>
                      </div>
                    </div>
                  </td>
                  <td>{product.price}</td>
                  <td>{product.price}</td>
                  <td>{product.price * product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-4 gap-4"></div>
      </section>
    </>
  );
}
export default Cart;
