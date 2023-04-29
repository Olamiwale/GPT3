import React from "react";

import people from "../assets/people.png";
import ai from "../assets/ai.png";

export default function Header() {
  return (
    <div className="py-10 bg-gradient-to-r from-black to-blue-600 via-black-300">
      <div className="md:flex justify-between w-[90%] m-auto">
        <div>
          <h1 className="text-5xl md:text-8xl font-bold p-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-300">
            Let's Build Something amazing with GPT3 OpenAI
          </h1>
          <p className=" md:text-2xl p-4 text-white">
            Yet bed any for traveling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>

          <div className="p-4 flex gap-2">
            <input
              className="w-full p-4"
              type="email"
              placeholder="Your Email Address"
            />
            <button className="w-[150px] bg-red-500 rounded">
              Get Started
            </button>
          </div>

          <div className="flex items-center">
            <img src={people} />
            <p className="p-3">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>

        <div>
          <img className="w-full" src={ai} alt="/" />
        </div>
      </div>
    </div>
  );
}
