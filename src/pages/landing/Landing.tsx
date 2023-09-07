import Promotion from "../../components/Promotion";

import imgBackgroundHome from "/background-home.jpg";
import imgHomeHero from "/home-hero.png";
import imgScrollHome from "/scroll-home.png";
import imgBlockHome1 from "/block-home-1.jpg";
import imgBlockHome2 from "/block-home-2.jpg";

function Landing() {
  return (
    <div className="min-h-screen w-full">
      <section
        style={{ backgroundImage: `url('${imgBackgroundHome}')` }}
        className="min-h-screen flex justify-center items-center bg-center bg-cover"
      >
        <div className="flex flex-col items-center pt-24">
          {/* Image home hero */}
          <img
            src={imgHomeHero}
            alt="home hero logo"
            className="px-5 mb-16 pt-2"
          />

          <div className="flex flex-col md:flex-row items-center gap-4 text-white text-sm px-5">
            <button className="border border-white font-semibold px-6 py-3 rounded-sm">
              DISCOVER BORÉAL
            </button>
            <button className="border border-white font-semibold px-6 py-3 rounded-sm">
              VISIT OUR WEBSHOP
            </button>
          </div>

          <img
            src={imgScrollHome}
            alt="scroll"
            className="w-14 bg-center bg-cover pt-10"
          />
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center md:flex-row">
          <img
            src={imgBlockHome1}
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
            src={imgBlockHome2}
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

      <Promotion />

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
