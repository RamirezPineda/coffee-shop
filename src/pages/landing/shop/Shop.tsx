import FooterContent from "../../../components/FooterContent";
import NavBar from "../../../components/NavBar";

function Shop() {
  return (
    <div>
      <NavBar />

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
              <button className="px-3 hover:text-[#ce7533]">ALL</button>
              <div>|</div>
              <button className="px-3 hover:text-[#ce7533]">BANS</button>
              <div>|</div>
              <button className="px-3 hover:text-[#ce7533]">MERCHANDISE</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="px-20 mt-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4">
              <img
                className="mb-4 bg-cover"
                src="https://www.borealcoffee.ch/images/thumbnails/900/1394/detailed/1/Yesid_Galindo.png"
                alt="product"
              />
              <div className="text-center uppercase">
                <h2 className="text-xl font-medium hover:text-[#ce7533] mb-2">
                  Yesid Galindo, Colombie
                </h2>
                <p className="text-lg mb-2">29.50 CHF</p>
                <p className=" text-gray-500">OMNI-ROAST L 350G</p>
              </div>
            </div>

            <div className="p-4">
              <img
                className="mb-4 bg-cover"
                src="https://www.borealcoffee.ch/images/thumbnails/900/1394/detailed/1/Yesid_Galindo.png"
                alt="product"
              />
              <div className="text-center uppercase">
                <h2 className="text-xl font-medium hover:text-[#ce7533] mb-2">
                  Yesid Galindo, Colombie
                </h2>
                <p className="text-lg mb-2">29.50 CHF</p>
                <p className=" text-gray-500">OMNI-ROAST L 350G</p>
              </div>
            </div>

            <div className="p-4">
              <img
                className="mb-4 bg-cover"
                src="https://www.borealcoffee.ch/images/thumbnails/900/1394/detailed/1/Yesid_Galindo.png"
                alt="product"
              />
              <div className="text-center uppercase">
                <h2 className="text-xl font-medium hover:text-[#ce7533] mb-2">
                  Yesid Galindo, Colombie
                </h2>
                <p className="text-lg mb-2">29.50 CHF</p>
                <p className=" text-gray-500">OMNI-ROAST L 350G</p>
              </div>
            </div>

            <div className="p-4">
              <img
                className="mb-4 bg-cover"
                src="https://www.borealcoffee.ch/images/thumbnails/900/1394/detailed/1/Yesid_Galindo.png"
                alt="product"
              />
              <div className="text-center uppercase">
                <h2 className="text-xl font-medium hover:text-[#ce7533] mb-2">
                  Yesid Galindo, Colombie
                </h2>
                <p className="text-lg mb-2">29.50 CHF</p>
                <p className=" text-gray-500">OMNI-ROAST L 350G</p>
              </div>
            </div>

            {/* <div className="p-4">
              <img
                src="https://www.borealcoffee.ch/images/thumbnails/440/460/detailed/1/chemex_anse_grande.jpeg"
                alt="product"
              />
              <div className="text-center uppercase">
                <h2 className="text-xl font-medium hover:text-[#ce7533] mb-2">
                  CHEMEX WITH HANDLE
                </h2>
                <p className="text-lg mb-2">57.50 CHF</p>
                <p className=" text-gray-500">MERCHANDISE</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row h-60 w-full">
          <div className="bg-[#f78f1e] w-1/2 flex justify-center items-center">
            <div className="flex flex-col text-white">
              <h4 className="font-medium">BOREAL NEWSLETTER</h4>
              <h2 className="text-2xl font-bold">
                Subscribe to our newsletter
              </h2>
              <div className="w-full">
                <input
                  className="placeholder-white bg-[#f78f1e] border border-white focus:border-black focus:outline-none px-4 py-4 w-3/4"
                  type="email"
                  placeholder="name@gmail.com"
                />
                <button className="w-1/4 text-[#f78f1e] bg-gray-100 border border-gray-100 px-4 py-4">
                  Suscribe
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url('https://www.borealcoffee.ch/design/themes/boreal/assets/dist/images/content/blocks/block-listing-bottom.jpg')`,
            }}
            className="text-white w-1/2 bg-center bg-cover flex justify-center items-center"
          >
            <div className="flex flex-col text-center">
              <h4 className="font-medium mb-1">
                You prefer to buy your coffee in person?
              </h4>
              <h2 className="uppercase text-2xl font-bold mb-2">
                just visit one of our shops
              </h2>
              <button className="border border-white hover:bg-[#f78f1e] hover:border-[#f78f1e] transition-colors font-semibold px-4 py-2 rounded-sm">
                DISCOVER BOREAL
              </button>
            </div>
          </div>
        </div>
      </section>

      <FooterContent />
    </div>
  );
}
export default Shop;
