import React from "react";

export default function Feature({ title, text }) {
  return (
    <div className="flex-col">
      <div>
        <div className="bg-red-500 w-20 h-1 mt-5 " />
        <h1 className="text-xl md:text-3xl font-bold py-4">{title}</h1>
      </div>

      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}
