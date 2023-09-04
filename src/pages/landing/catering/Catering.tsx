function Catering() {
  // color para las letras: #f78f1e
  return (
    <div>
      <section
        style={{
          backgroundImage: `url('https://www.borealcoffee.ch/images/thumbnails/1600/700/page/1/header-caterings.jpg')`,
        }}
        className="min-h-screen bg-center bg-cover flex justify-center items-center relative"
      >
        {/* filter background image */}
        <div className="absolute inset-0 z-0 bg-black opacity-50"></div>

        <div className="flex flex-col items-center z-10 mt-20">
          <h3 className="text-[#f78f1e] text-lg font-semibold uppercase">
            Boréal at your next event
          </h3>
          <h2 className="text-white text-xl font-medium">
            Make specialty coffee a feature of your next trade show or personal
            event
          </h2>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img
              src="https://www.borealcoffee.ch/images/thumbnails/1600/492/promo/1/14_a0m6-a3.04.11_FD_33.0002-2.jpg"
              alt="boreal location"
              className="object-cover object-center w-full h-[800px]"
            />
          </div>

          <div className="w-full md:w-1/2 leading-normal text-center md:text-start">
            <div className="p-4 md:px-20 md:py-10 ">
              <h4 className="text-[#f78f1e] font-semibold mb-1 uppercase">
                From inception to execution
              </h4>
              <h2 className="text-zinc-800 text-4xl font-bold mb-2">
                Bespoke event caterings
              </h2>
              <hr className="w-5 border-solid border-2 border-[#f78f1e] mb-5" />
              <p>
                You are organizing an event and wish to offer your guests good
                coffee ? Then, you knocked on the right door !
              </p>
              <br />
              <p>
                Whether planning a conference, corporate off-site or a wedding,
                Boreal is a coffee specialist and offers only the best in terms
                of coffee-catering. Also thanks to its experience in this field
                since 2009, Boréal is highly qualified for serving all the
                coffee-based beverages (Espresso, Americano, Flat White, Latte
                Macchiato...)
              </p>
              <br />
              <p>
                The coffees that we provide for your event are freshly roasted
                by our roasters in our roastery house located in Carouge. By the
                way, all our coffees are officially Organic certified since
                April 2018.
              </p>
              <br />
              <p>
                The baristi attending your event have been preselected and have
                a real know-how when it comes to coffee brewing and servicing.
                Regarding our equipment, we have always been working on La
                Marzocco coffee machines - these machines are to coffeemaking
                what Rolex is to watchmaking.
              </p>
              <br />
              <p>
                We are also happy to arrange a brew bar and an opportunity for
                guests to cup different coffees for a unique experience. Boreal
                manages everything, from logistics to transport, installation
                and removal of the machines to ensure quality and
                professionalism are the highest possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row">
          <img
            src="https://www.borealcoffee.ch/images/thumbnails/800/532/promo/1/IMG_7626-2.jpg"
            alt="boreal merchandise"
            className="object-cover object-center w-full md:w-1/2 order-first md:order-last"
          />
          <div className="w-full md:w-1/2 text-center md:text-start leading-normal">
            <div className="p-4 md:px-20 md:py-10 ">
              <h4 className="text-[#f78f1e] font-semibold mb-1 uppercase">
                Working only with the best since 2008
              </h4>
              <h2 className="text-zinc-800 text-4xl font-bold mb-2">
                La Marzocco
              </h2>
              <hr className="w-5 border-solid border-2 border-[#f78f1e] mb-5" />
              <p>
                La Marzocco is our partner for coffee machines. These hand-made
                machines in Florence are amongst the best in the Specialty
                Coffee world.
              </p>
              <br />
              <p>
                La Marzocco was from 2000 to 2008 the official sponsor for the
                World Barista Championship (WBC), the most prestigious
                international competition that celebrates the coffee culture
                around the world.
              </p>
              <br />
              <p>
                We set up our coffee machines in your environment. All the
                technical specifications regarding the coffee machines will be
                provided to you prior to the event.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row">
          <img
            src="https://www.borealcoffee.ch/images/thumbnails/800/532/promo/1/13_0911-0229_NatashaCarrion.jpg"
            alt="boreal coffee"
            className="object-cover object-center w-full md:w-1/2"
          />
          <div className="w-full md:w-1/2 text-center md:text-start leading-normal">
            <div className="p-4 md:px-20 md:py-10 ">
              <h4 className="text-[#f78f1e] font-semibold mb-1 uppercase">
                Explore our complete offering
              </h4>
              <h2 className="text-zinc-800 text-4xl font-bold mb-2">
                Boréal Caterings
              </h2>
              <hr className="w-5 border-solid border-2 border-[#f78f1e] mb-5" />
              <p>
                We provide all of our catering clients with direct sourced,
                freshly roasted coffee beans of high quality.
              </p>
              <br />
              <p>
                We always select coffee beans in our offers. On request, we can
                also work with pure specific origins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col">
          {/* header */}
          <div className="p-4 md:p-14 flex flex-col items-center">
            <img
              src="data:image/png;base64,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"
              alt="boreal logo"
              className="bg-center bg-cover mb-2 w-14"
            />
            <div className="flex justify-center items-center">
              <div className="text-zinc-800  text-center uppercase">
                <h4 className="font-semibold text-[#f78f1e] text-sm mb-1">
                  Photos from our caterings
                </h4>
                <h2 className="text-3xl font-semibold mb-2">
                  happy customers, successful events
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="bg-[#f78f1e] h-96 w-full md:w-5/12 text-white">
            <div className="flex flex-col py-20 px-10 text-center md:text-start items-start">
              <h2 className="text-3xl font-semibold uppercase mb-2">
                Request an offer
              </h2>
              <hr className="w-5 border-solid border-2 border-white mb-6" />
              <p className="mb-5">
                We are super flexible and can cater to your specific needs -
                from building a complete coffee stand to providing 'only'
                Geneva's best baristas for professional coffee extraction and
                late art.
              </p>
              <button className="font-medium hover:text-zinc-900">
                EMAIL US HERE FOR A QUOTATION {"->"}
              </button>
            </div>
          </div>

          {/* images */}
          <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-7/12">
            <img
              src="https://www.borealcoffee.ch/images/thumbnails/800/800/detailed/1/_JBW8031.jpg"
              alt="boreal merchandise"
              className="h-full md:h-48 w-full bg-cover bg-center"
            />
            <img
              src="https://www.borealcoffee.ch/images/thumbnails/800/800/detailed/1/14.02.21_FD_29.0004-2.jpg"
              alt="boreal merchandise"
              className="h-full md:h-48 w-full bg-cover bg-center"
            />
            <img
              src="https://www.borealcoffee.ch/images/thumbnails/800/800/detailed/1/IMG_7626-2.jpg"
              alt="boreal merchandise"
              className="h-full md:h-48 w-full bg-cover bg-center"
            />
            <img
              src="https://www.borealcoffee.ch/images/thumbnails/800/800/detailed/1/13_0911-0828_NatashaCarrion_300dpi.jpg"
              alt="boreal merchandise"
              className="h-full md:h-48 w-full bg-cover bg-center"
            />
            <img
              src="https://www.borealcoffee.ch/images/thumbnails/800/800/detailed/1/_TES1703.jpg"
              alt="boreal merchandise"
              className="h-full md:h-48 w-full bg-cover bg-center"
            />
            <img
              src="https://www.borealcoffee.ch/images/thumbnails/800/800/detailed/1/14.05.22_FD_35.0018-2.jpg"
              alt="boreal merchandise"
              className="h-full md:h-48 w-full bg-cover bg-center"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row gap-4 bg-zinc-800 h-32">
          <div className="w-1/4 items-center px-4 pt-3 pb-1 ml-20">
            <img
              src="https://www.borealcoffee.ch/design/themes/boreal/assets/dist/images/content/boreal-coffee.png"
              alt="product coffee"
              className="bg-cover"
            />
          </div>
          <div className="w-3/4 py-8 items-center text-center uppercase">
            <h2 className="text-[#e67e22] text-base font-semibold">
              Like what you see? Curious to taste our lovingly roasted beans?
            </h2>
            <h4 className="text-white text-xl font-bold">
              Take a piece of Boreal home with you. This way to our e-shop
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Catering;
