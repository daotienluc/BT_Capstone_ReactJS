import React, { useContext } from "react";
import { dataChiTietCongViec } from "../DetailTemplate";

const AboutDetails = () => {
  const { moTa, moTaNgan } = useContext(dataChiTietCongViec);

  return (
    <>
      <h2 className="font-bold text-xl text-[#404145] mt-10">About this gig</h2>
      <div className="text-[#62646A] space-y-5 font-medium">
        <p>Gig Title </p>
        <p>{moTaNgan}</p>
        <p>Description</p>
        <p>
          Looking for a professional website? Then youve come to the right
          place!{" "}
        </p>
        <p>{moTa}</p>
        <p>Why choose Me?</p>
        <ul className="list-disc mx-10">
          <li>Countless happy clients from around the world</li>
          <li>Professional and out of the box ideas</li>
          <li>EYE Catching</li>
          <li>Countless happy clients from around the world</li>
          <li>Countless happy clients from around the world</li>
          <li>Countless happy clients from around the world</li>
          <li>Countless happy clients from around the world</li>
          <li>Countless happy clients from around the world</li>
        </ul>
        <p>My Expertise:</p>
        <p>
          Wix | Shopify | Wordpress | Squarespace | Weebly | E-Commerce |
          Responsive | Mobile Friendly | Plugin Installation | Landing Page |
          User Interface |
        </p>
        <p>Feel that tingling in your fingertips?</p>
        <p>Then let's get started!</p>
      </div>
    </>
  );
};

export default AboutDetails;
