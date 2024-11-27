import React from "react";
import VontéllesItems from "./Vontélle’sItems";

const Vontélle = () => {
  return (
    <div className="container my-10">
      <div className="grid grid-cols-5 gap-5">
        <VontéllesItems />
        <VontéllesItems />
        <VontéllesItems />
        <VontéllesItems />
        <VontéllesItems />
      </div>
    </div>
  );
};

export default Vontélle;
