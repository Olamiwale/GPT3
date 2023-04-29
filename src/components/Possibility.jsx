import React from "react";
import possibility from "../assets/possibility.png";

export default function Possibility() {
  return (
    <div className="w-[90%] m-auto flex justify-center items-center text-white py-16">
      <div>
        <img className="w-[70%]" src={possibility} alt="possibility" />
      </div>
      <div>
        <h4 className="text-2xl">Request Early Access to Get Started</h4>
        <h1 className="text-3xl font-bold py-5">
          The possibilities are <br /> beyond your imagination
        </h1>
        <p className="text-2xl py-5">
          Yet bed any for traveling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4 className="">Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}
