import React from "react";
import Features from "../components/Features";

export default function WhatGPT3() {
  return (
    <div className="py-16 bg-black">
      <div className="bg-gradient-to-r from-black to-blue-600 via-black-300 text-white w-[90%] m-auto p-4">
       
          <div className="w-full flex text-xl py-5">
            <div className="w-full flex">
              <Features
                title="What is GPT-3"
                text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
              />
            
          </div>
        </div>

        <div className=" md:flex justify-between items-center py-5 mt-20">
          <h1 className=" md:text-5xl font-bold w-[50%] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-300">
            The possibilities are beyond your imagination
            </h1>
          <p className="mt-5 md:px-5 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-300 font-semibold ">Explore the Library</p>
        </div>

        <div className="md:flex justify-between items-center mt-20 text-xl gap-8">
          <Features
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          />

          <Features
            title="Knowledge-base"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
          <Features
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </div>
  );
}
