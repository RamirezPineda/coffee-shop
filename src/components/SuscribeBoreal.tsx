function SuscribeBoreal() {
  return (
    <section>
      <div className="flex flex-col md:flex-row h-60 w-full">
        <div className="bg-[#f78f1e] w-1/2 flex justify-center items-center">
          <div className="flex flex-col text-white">
            <h4 className="font-medium">BOREAL NEWSLETTER</h4>
            <h2 className="text-2xl font-bold mb-4">
              Subscribe to our newsletter for more content
            </h2>
            <div className="w-full">
              <input
                className="placeholder-white bg-[#f78f1e] border border-white focus:border-black focus:outline-none px-4 py-4 w-3/4"
                type="email"
                placeholder="name@gmail.com"
              />
              <button className="w-1/4 text-[#f78f1e] font-medium bg-gray-100 border border-gray-100 px-4 py-4">
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
          <div className="flex flex-col">
            <div className="flex flex-col text-center">
              <h4 className="text-lg font-medium mb-1">
                You prefer to buy your coffee in person?
              </h4>
              <h2 className="uppercase text-3xl font-bold mb-2">
                just visit one of our shops
              </h2>
            </div>
            <div className="flex justify-center items-center">
              <button className="border border-white hover:bg-[#f78f1e] hover:border-[#f78f1e] transition-colors font-semibold px-4 py-2 rounded-sm">
                DISCOVER BOREAL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SuscribeBoreal;
