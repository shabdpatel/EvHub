import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {/* <div>
          <h3 className="text-md font-semibold mb-4"></h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
        {/* <div className="flex items-center justify-center">
          <h3 className="text-md font-semibold mb-4"><h6>Made with 💖 by <a href="https://www.linkedin.com/in/shabdpatel8757/">Shabd</a> under <a href="https://unstop.com/competitions/sustain-a-thon-2024-sustainability-hackathon-by-indian-oil-corporation-ltd-indian-oil-corporation-limited-923906?utm_campaign=o_923906&utm_source=Both&utm_medium=D2C-Customized">SUSTAIN-A-THON 2024</a></h6></h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
        {/* <div>
          <h3 className="text-md font-semibold mb-4"></h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
