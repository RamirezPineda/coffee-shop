function FooterContent() {
  return (
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
  );
}
export default FooterContent;
