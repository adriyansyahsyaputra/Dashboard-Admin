import React from "react";

export default function CardProduct() {
  const cardCount = Array(10).fill(null);

  return (
    <div className="grid md:grid-cols-4 lg:grid-cols-6 p-6 gap-5">
      {cardCount.map((_, index) => (
        <div
          className="bg-slate-50 rounded-md shadow-md border h-max"
          key={index}
        >
          <div>
            <img
              src=""
              alt=""
              className="w-full h-32 bg-red-400 object-cover rounded-t-md"
            />
          </div>
          <div className="p-4">
            <h3 className="text-base font-semibold">Product Name</h3>
            <p className="text-xs font-thin lg:text-sm mb-1">Shirt</p>
            <p className="text-sm font-medium">4.5 (255)</p>
            <p className="text-base mt-3 font-medium">Rp. 450.000</p>
          </div>
        </div>
      ))}
    </div>
  );
}
