import Promotion from "../../../components/Promotion";

function Contact() {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url('https://www.borealcoffee.ch/images/thumbnails/1600/700/page/1/header-contact.jpg')`,
        }}
        className="h-[95vh] bg-center bg-cover flex justify-center items-center relative"
      >
        {/* filter black */}
        <div className="inset-0 bg-black opacity-60 absolute"></div>

        <div className="z-10 text-white text-lg flex flex-col items-center pt-10 font-semibold">
          <h3 className="text-[#f78f1e] uppercase mb-1">Get in touch with</h3>
          <h2 className="text-5xl uppercase mb-3">Boréal Coffee</h2>
          <p className="font-medium">
            Email us or find us on social media (or better yet, stop by and say
            hello!)
          </p>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row items-center">
          {/* image */}
          <div
            style={{
              backgroundImage: `url('https://www.borealcoffee.ch/design/themes/boreal/assets/dist/images/content/blocks/block-contact-a.jpg')`,
            }}
            className="w-full md:w-1/2 leading-normal text-center md:text-start bg-center bg-cover"
          >
            <div className="p-4 md:px-20 md:py-10 text-white my-10">
              <h4 className="text-[#f78f1e] font-semibold mb-1 uppercase">
                Developing talent at Boréal
              </h4>
              <h2 className="text-4xl font-bold mb-2 uppercase">
                Work with us !
              </h2>
              <hr className="w-5 border-solid border-2 border-[#f78f1e] mb-5" />
              <div className="text-sm">
                <p>
                  Are you passionate about coffee? Do you enjoy working in a
                  young, dynamic environment?
                </p>
                <br />
                <p>
                  Whether you already have experience in specialty coffee and
                  barista talents or are interested in honing them, get in touch
                  with us. We are growing quickly and frequently open to new
                  talents.
                </p>
                <br />
                <p>
                  Before sending us your CV please make sure you that you
                  fulfill the following requirements :
                </p>
                <br />
                <ul className="list-disc px-4">
                  <li className="py-1">
                    You are available the weekends (you will not work every
                    weekend) and at least three half days in the week
                  </li>
                  <li className="py-1">
                    You are looking to work for at least one year
                  </li>
                  <li>You can work a minimum of 20 hours per week</li>
                  <li className="py-1">
                    You love coffee and don't mind getting your hands dirty!
                  </li>
                </ul>
                <br />
                <p>
                  If you fulfill these requirements we want to hear from you !
                  Please send us an email with your CV, a cover letter (PDF
                  format) and your availabilities.
                </p>
              </div>
            </div>
          </div>

          {/* form contact */}
          <div className="w-full md:w-1/2 text-center md:text-start leading-normal">
            <div className="p-4 md:px-20 md:py-10">
              <h4 className="text-[#f78f1e] font-semibold mb-1 uppercase">
                Boréal Coffee
              </h4>
              <h2 className="text-zinc-800 text-4xl font-bold mb-2 uppercase">
                Contact form
              </h2>
              <hr className="w-5 md:mx-0 mx-auto border-solid border-2 border-[#f78f1e] mb-5" />
              <div className="grid grid-cols-1 md:grid-cols-2 text-sm">
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="first name" className="block mb-2">
                    First Name <span className="text-[#f78f1e]">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    name="first name"
                    id="first name"
                    className="px-2 py-1 border border-zinc-400 focus:border-black focus:outline-none "
                  />
                </div>
                <div className="col-span-2 md:col-span-1 pl-0 md:pl-5">
                  <label htmlFor="last name" className="block mb-2">
                    Last Name <span className="text-[#f78f1e]">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    name="last name"
                    id="last name"
                    className="px-2 py-1 border border-zinc-400 focus:border-black focus:outline-none "
                  />
                </div>
                <div className="col-span-2 md:col-span-1 mt-3 ">
                  <label htmlFor="email" className="block mb-2">
                    Email <span className="text-[#f78f1e]">*</span>{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="px-2 py-1 border border-zinc-400 focus:border-black focus:outline-none "
                  />
                </div>
                <div className="col-span-2 md:col-span-1 pl-0 md:pl-5 mt-3">
                  <label htmlFor="phone" className="block mb-2">
                    Phone <span className="text-[#f78f1e]">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="px-2 py-1 border border-zinc-400 focus:border-black focus:outline-none "
                  />
                </div>
                <div className="col-span-2 mt-3">
                  <label htmlFor="message" className="block mb-2">
                    Message <span className="text-[#f78f1e]">*</span>{" "}
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols={20}
                    rows={10}
                    className="w-full px-2 py-1 border border-zinc-400 focus:border-black focus:outline-none "
                  ></textarea>
                </div>
              </div>
              <button className="bg-[#f78f1e] w-full py-4 font-semibold text-white mt-4">
                SEND
              </button>
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

        <div
          style={{
            backgroundImage: `url('https://www.borealcoffee.ch/images/thumbnails/1600/492/promo/1/1600.jpg')`,
          }}
          className="h-[60vh] md:h-[80vh] flex justify-center items-center bg-center bg-cover relative"
        >
          {/* filter background */}
          <div className="inset-0 absolute bg-black opacity-60"></div>

          <div className="z-10 text-white uppercase text-center">
            <h4 className="font-semibold mb-2">
              No matter if you are in beautiful Geneva or in Stunning Zurich
            </h4>
            <h2 className="text-[#f78f1e] text-3xl font-semibold mb-4">
              A perfect coffee cup always awaits for you
            </h2>
            <button className="bg-transparent text-[#f78f1e] font-semibold">
              Discover our shop locations {"->"}
            </button>
          </div>
        </div>
      </section>

      <Promotion />
    </div>
  );
}
export default Contact;
