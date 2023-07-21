import { Footer as FOOTER } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import bookCover from "@/assets/bookCover.png"

const Footer = () => {
  return (
    <FOOTER container className="bg-gray-100 mt-8 mb-0">
      <div className="w-ful">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FOOTER.Brand
              alt="Bookfolio Logo"
              href={'/'}
              name="Bookfolio"
              src={bookCover}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FOOTER.Title title="about" />
              <FOOTER.LinkGroup col>
                <FOOTER.Link href="#">Bookfolio</FOOTER.Link>
                <FOOTER.Link href="#">Tailwind CSS</FOOTER.Link>
              </FOOTER.LinkGroup>
            </div>
            <div>
              <FOOTER.Title title="Follow us" />
              <FOOTER.LinkGroup col>
                <FOOTER.Link href="#">Github</FOOTER.Link>
                <FOOTER.Link href="#">Discord</FOOTER.Link>
              </FOOTER.LinkGroup>
            </div>
            <div>
              <FOOTER.Title title="Legal" />
              <FOOTER.LinkGroup col>
                <FOOTER.Link href="#">Privacy Policy</FOOTER.Link>
                <FOOTER.Link href="#">Terms & Conditions</FOOTER.Link>
              </FOOTER.LinkGroup>
            </div>
          </div>
        </div>
        <FOOTER.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FOOTER.Copyright by="Bookfolio™" href="#" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FOOTER.Icon href="#" icon={BsFacebook} />
            <FOOTER.Icon href="#" icon={BsInstagram} />
            <FOOTER.Icon href="#" icon={BsTwitter} />
            <FOOTER.Icon href="#" icon={BsGithub} />
            <FOOTER.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </FOOTER>
  );
};

export default Footer;
