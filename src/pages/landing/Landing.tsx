import { Link } from "react-router-dom";

import imgHomeHero from "/home-hero.png";

import { PublicRoutes } from "../../routes/routes";

function Landing() {
  return (
    <div className="min-h-screen w-full">
      {/* bg-[#121212]  border-b border-white  */}
      <header
        style={{ fontFamily: "Bebas Neue" }}
        className="z-10 fixed flex-col md:flex-row px-8 py-4 gap-4 backdrop-blur-sm bg-transparent border-b border-white  text-white text-sm w-full flex items-center justify-between"
      >
        <nav className="w-full px-4 py-3  font-semibold  tracking-widest text-xl bg-opacity-60">
          <div className="flex justify-between items-center gap-2 ">
            <div>
              <Link
                to={PublicRoutes.landing}
                className="items-center gap-4 hover:text-white transition-colors"
              >
                MOCCA
              </Link>
            </div>
            {/* Center backdrop-blur-sm  Bebas Neue",cursive */}
            <div className="flex justify-center items-center gap-4">
              <div className="flex items-center relative">
                <Link
                  to={PublicRoutes.landing}
                  className="hover:text-[#ce7533] p-2 transition-colors"
                >
                  CAFES
                </Link>
              </div>
              <div>|</div>
              <div className="flex items-center relative">
                <Link
                  to={PublicRoutes.landing}
                  className="hover:text-[#ce7533] p-2 transition-colors"
                >
                  TIENDA
                </Link>
              </div>
              <div>|</div>
              <div>
                <Link
                  to={PublicRoutes.landing}
                  className="hover:text-[#ce7533] p-2 transition-colors"
                >
                  SHOP
                </Link>
              </div>
            </div>

            {/* Rigth */}
            <div className="flex justify-center items-center">
              <Link
                to={PublicRoutes.landing}
                className="hover:text-[#ce7533] p-2 transition-colors"
              >
                LOGIN
              </Link>
            </div>
          </div>
        </nav>
      </header>
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
          <div className="flex flex-col justify-between p-4 leading-normal mt-5 mb-5 md:px-20">
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
          <div className="flex flex-col justify-between p-4 leading-normal mt-5 mb-5 md:px-20">
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
      {/* <main
        className="
        xl:pl-[100px] xl:pr-[100px] py-12 min-h-screen flex justify-center items-center bg-green-500"
      >
      </main> */}
      {/* <Outlet /> */}
      {/* bg-[#121212] h-60 text-white */}
      <footer className="h-60">
        <div className="flex flex-col md:flex-row items-start p-4 md:px-20 leading-normal ">
          <img
            src="https://www.borealcoffee.ch/design/themes/boreal/assets/dist/images/logo-footer.png"
            alt="logo"
            width={100}
            height={100}
            className="mt-4"
          />
          <div className="p-4">
            <h4 className="font-bold mb-1">FIND US Discover</h4>
            <p>We have 3 shops in Geneva and 2 in Zurich</p>
            <p>them arrow</p>
          </div>
          <img
            src="https://www.borealcoffee.ch/design/themes/boreal/assets/dist/images/locations-footer.png"
            alt="logo"
            width={100}
            height={100}
            className="mt-4"
          />
          <div className="p-4">
            {/* Shop Terms & Conditions Contact */}
            <h4 className="font-bold mb-1">SUPPORT</h4>
            <ul>
              <li>Cafes</li>
              <li>Coffee catering</li>
              <li> Jebrew</li>
              <li>Jebrew Leonard</li>
            </ul>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div className="flex flex-row gap-4 ">
              <div className="flex flex-row gap-4">
                <h4 className="font-bold">LANGUAGE</h4>
                <select name="language" id="language">
                  <option value="EN">EN</option>
                </select>
              </div>
              <div className="flex flex-row gap-4">
                <h4 className="font-bold">CURRENCY</h4>
                <select name="currency" id="currency">
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <h4 className="font-bold mr-4">Follow us:</h4>
              <img
                src="https://img.icons8.com/material-outlined/24/000000/facebook-f.png"
                alt="facebook"
                width={22}
                height={2}
              />
              <img
                src="https://img.icons8.com/ios-filled/24/000000/instagram.png"
                alt="youtube"
                width={25}
                height={2}
              />
              <img
                src="https://img.icons8.com/material-rounded/24/000000/youtube-play.png"
                alt="youtube"
                width={25}
                height={2}
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Landing;
