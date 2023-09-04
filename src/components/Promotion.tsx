function Promotion() {
  return (
    <section>
      <div className="flex flex-col items-center md:items-start  md:flex-row gap-4 bg-zinc-800 h-64 md:h-32">
        <div className="w-1/2 md:w-1/4 px-4 pt-3 pb-1 ml-0 md:ml-20">
          <img
            src="https://www.borealcoffee.ch/design/themes/boreal/assets/dist/images/content/boreal-coffee.png"
            alt="product coffee"
            className="bg-cover bg-center"
          />
        </div>
        <div className="w-3/4 py-0 md:py-8 items-center text-center uppercase">
          <h2 className="text-[#e67e22] text-sm font-semibold mb-2 md:mb-0 ">
            Like what you see? Curious to taste our lovingly roasted beans?
          </h2>
          <h4 className="text-white text-lg font-bold">
            Take a piece of Boreal home with you. This way to our e-shop
          </h4>
        </div>
      </div>
    </section>
  );
}
export default Promotion;
