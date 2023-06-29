import React from "react";

import { footer } from "../constants";

const Footer = () => {
  return (
    <div className="flex gap-2 justify-center py-3">
      {footer.map((contact) => {
        return (
          <div
            onClick={() => window.open(contact.link, "_blank")}
            className="w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={contact.logo}
              alt={contact.name}
              className="object-contain"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
