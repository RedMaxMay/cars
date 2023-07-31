import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex sm:flex-row flex-col flex-wrap sx:justify-between justify-center gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col sx:justify-start justify-center items-center gap-6">
          <Image
            src="./logo.svg"
            alt="Logo"
            width="118"
            height="18"
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Car Hub 2023 <br /> © MaxMay
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link ">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  href={item.url}
                  key={item.title}
                  className="text-gray-500"
                  target="_blank"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
