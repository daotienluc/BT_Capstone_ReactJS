import React from "react";
import FiverrVideoLink from "./../../../../assets/video/fiverrVideo.mp4";

const FiverrVideo = () => {
  return (
    <div className="container">
      <h2 className="font-normal text-5xl text-[#404145]">
        What success on Fiverr looks like
      </h2>
      <p className="my-10">
        Vontélle Eyewear turns to Fiverr freelancers to bring their vision to
        life.
      </p>
      <div>
        <video
          controls
          muted
          autoPlay
          className="rounded-lg"
          src={FiverrVideoLink}
        ></video>
      </div>
    </div>
  );
};

export default FiverrVideo;
