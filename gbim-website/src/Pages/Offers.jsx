import React from "react";
import OfferImg from "../images/OfferImg.png";
const Offers = () => {
  return (
    <div>
      <div className="color-page">
        <p className="text-center pt-5">WHAT WE OFFER</p>
      </div>
      <div className="custom-purple">
        <h2 className="text-center pt-2 ps-5">
          Transforming ideas into Visual Masterpieces,
          <b> Elevating Brands to New Heights</b> with Innovative and Impactful
          Design
        </h2>
      </div>
      <div className="p-5">
        <img
          src={OfferImg}
          alt="offers-img"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Offers;
