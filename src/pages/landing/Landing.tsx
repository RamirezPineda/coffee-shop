import imgHomeHero from "/home-hero.png";


function Landing() {
  return (
    <div className="min-h-screen w-full">
      {/* 1600 × 936 px https://bc-clone.netlify.app/static/media/homeview-hdr-bg.5776f137.jpg */}
      <section
        style={{
          backgroundImage: `url('https://bc-clone.netlify.app/static/media/homeview-hdr-bg.5776f137.jpg')`,
        }}
        className="min-h-screen flex justify-center items-center bg-center bg-cover"
        // className="min-h-screen flex justify-between items-center bg-[#121212] text-white px-4"
      >
        <div className="flex flex-col items-center ">
          <img src={imgHomeHero} alt="home hero logo" className="px-5 mb-20" />
          <div className="flex flex-col md:flex-row items-center gap-4 text-white text-lg px-5">
            <button className="border border-white font-semibold px-4 py-2 rounded-sm">
              Mira nuestros productos
            </button>
            <button className="border border-white font-semibold px-4 py-2 rounded-sm">
              Visita nuestra tiendaaaa
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center md:flex-row">
          <img
            src="https://bc-clone.netlify.app/static/media/block-home-1-min.67f87515.jpg"
            alt="Coffee shop"
            className="object-cover w-full h-96 md:h-auto md:w-1/2"
          />
          <div className="flex flex-col justify-between p-4 leading-normal my-5 md:px-20">
            <div className="text-center md:text-start">
              <h4 className="text-[#ce7533] font-medium mb-1">
                THE STORY OF OUR
              </h4>
              <h2 className="text-3xl font-bold mb-2">COFFEE SHOPS</h2>
              <hr className="w-5 border-solid border-2 border-[#e67e22] mb-4" />
            </div>

            <p className="mb-3 font-normal">
              From an abandoned storage space to a convivial meeting place in
              the heart of Geneva, our first café opened in April 2009 at Rue du
              Stand 60.
            </p>
            <p className="mb-3 font-normal">
              Now in 3 locations in Geneva and 2 locations in Zürich, customers
              can expect an amazing experience from bean to cup. Boreal Coffee
              is committed to sourcing the finest quality coffee beans from
              farmers around the world, directly traded, and roasted with love
              each week in our artisanal roastery in Carouge.
            </p>
            <p className="mb-3 font-normal">
              Boréal Coffee expose photos of Léonard Fisch.
            </p>
            <button className="hover:text-[#ce7533] font-semibold py-2 text-center md:text-start">
              DISCOVER COFFEE SHOPS
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-col justify-between p-4 leading-normal my-5 md:px-20">
            <div className="text-center md:text-start">
              <h4 className="text-[#ce7533] font-medium mb-1">
                FROM BEAN TO CUP AT
              </h4>
              <h2 className="text-3xl font-bold mb-2">BOREAL'S ROASTERY</h2>
              <hr className="w-5 border-solid border-2 border-[#e67e22] mb-4" />
            </div>
            <p className="mb-3 font-normal">
              We opened an artisanal roastery in Carouge where our small team of
              dedicated roasters works to match the profiles of the green coffee
              beans we import with a roast that brings out their best
              characteristics.
            </p>
            <p className="mb-3 font-normal">
              And, knowing that we work directly with the farmers themselves
              wherever possible to ensure better livelihoods while caring for
              the environment, your beverage is one to feel good about.
            </p>
            <button className="hover:text-[#ce7533] font-semibold py-2 text-center md:text-start">
              DISCOVER COFFEE SHOPS
            </button>
          </div>
          <img
            src="https://www.borealcoffee.ch/images/thumbnails/800/532/promo_hover/1/home.jpg"
            alt="home hero section 2"
            className="object-cover w-full h-96 order-first md:order-last md:h-auto md:w-1/2"
          />
        </div>
      </section>
      {/* <section className="h-96 bg-[#8a2900]">
        <div><h1>Our products</h1></div>
      </section> */}
      <section
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2858192/pexels-photo-2858192.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
        className="h-96 bg-center bg-cover flex flex-row-reverse"
      >
        <div className="flex flex-col justify-center text-white p-4 leading-normal w-full md:w-1/2 md:px-20">
          <div className="text-center md:text-start">
            <h4 className="font-medium text-[#e67e22] mb-1">JEBREW</h4>
            <h2 className="text-2xl font-bold mb-2">CAN'T MAKE IT BOREAL?</h2>
            <hr className="w-5 border-solid border-2 border-[#e67e22] mb-4" />
          </div>
          <p className="font-normal mb-3">
            Can't make it to Boreal? Whether you are looking for a hearty mug of
            black coffee in the morning or an after-lunch espresso, learn how to
            brew a perfect cup of coffee for your needs and tastes
          </p>
        </div>
      </section>

      {/*  section for component */}
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

      {/* <main
        className="
        xl:pl-[100px] xl:pr-[100px] py-12 min-h-screen flex justify-center items-center bg-green-500"
      >
      </main> */}
      {/* <Outlet /> */}
      {/* bg-[#121212] h-60 text-white */}
    </div>
  );
}
export default Landing;
