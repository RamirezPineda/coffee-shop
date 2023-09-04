function WhoWeAre() {
  return (
    <div className="min-h-screen w-full">
      <section
        style={{
          backgroundImage: `url('https://www.borealcoffee.ch/images/thumbnails/1600/700/page/1/20032018-_DCS5408.png')`,
        }}
        className="min-h-screen relative flex justify-center items-center bg-center bg-cover"
      >
        {/* filtro background */}
        <div className="absolute inset-0 bg-black opacity-50 z-0 "></div>

        <div
          style={{ fontFamily: "Bebas Neue" }}
          className="absolute text-center -tracking-tighter"
        >
          <h2 className="text-2xl text-[#e67e22] font-medium r mb-1">
            Who we are?
          </h2>
          <p className="text-xl text-gray-100 font-medium mb-1">
            Find out more about Boréal
          </p>
        </div>
      </section>

      {/* News */}
      <section>
        <div className="flex flex-col justify-center p-4 leading-normal w-full md:w-1/2 md:px-40 mt-20">
          <div className="text-center md:text-start">
            <h4 className="text-xl font-medium text-[#e67e22] mb-1">
              Boréal Coffee
            </h4>
            <h2 className="text-4xl font-bold mb-2">BORN IN GENEVA</h2>
            <hr className="w-5 border-solid border-2 border-[#e67e22] mb-4" />
          </div>
          <p className="font-normal mb-3">
            Article and photo : © Clément Grandjean
          </p>
        </div>
        <div className="p-4 md:px-40">
          <img
            className=""
            src="http://www.borealcoffee.ch/images/companies/1/article.jpg?1528105891071"
            alt="boreal - who we are"
          />
        </div>
      </section>
    </div>
  );
}
export default WhoWeAre;
