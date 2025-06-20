import React from "react";
import creative from "../images/creative.png";
const Creative = () => {
  return (
    <div>
      <div>
        <div className="color-page">
          <p className="text-center pt-5">OUR CREATIVE PROCESS</p>
        </div>
        <div className="custom-purple">
          <h2 className="text-center pt-2 ps-5">
           Our creative process blends curiosity,collaboration, and innovation
            <b> to bring bold ideas to life</b> 
          </h2>
        </div>
        <div className="p-5">
        <img
          src={creative}
          alt="creative"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      </div>
    </div>
  );
};

export default Creative;
