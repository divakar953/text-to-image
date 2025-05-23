import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <div className="flex gap-4 my-5">
        <img width={35} src={assets.facebook_icon} alt="" />
        <img width={35} src={assets.twitter_icon} alt="" />
        <img width={35} src={assets.instagram_icon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
